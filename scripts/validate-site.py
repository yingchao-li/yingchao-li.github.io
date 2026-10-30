"""Check the exact static directory uploaded by the Pages workflow."""

from html.parser import HTMLParser
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
EXPECTED_URL = "https://yingchao-li.github.io/"


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.references = []
        self.canonical = None
        self.og_url = None

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if "id" in attributes:
            assert attributes["id"] not in self.ids, "Duplicate HTML id"
            self.ids.add(attributes["id"])
        for name in ("src", "href"):
            if attributes.get(name):
                self.references.append(attributes[name])
        if tag == "link" and attributes.get("rel") == "canonical":
            self.canonical = attributes.get("href")
        if tag == "meta" and attributes.get("property") == "og:url":
            self.og_url = attributes.get("content")


def check_reference(reference, page):
    url = urlsplit(reference)
    if url.scheme or url.netloc:
        assert url.scheme not in {"javascript", "file"}, "Unsafe URL scheme"
        return
    if not url.path:
        if url.fragment:
            assert unquote(url.fragment) in page.ids, f"Missing anchor: {url.fragment}"
        return
    assert not url.path.startswith("/"), "Use relative paths for portable static assets"
    target = (DIST / unquote(url.path)).resolve()
    assert target.is_relative_to(DIST.resolve()), "Asset escapes the static directory"
    assert target.is_file(), f"Missing local resource: {url.path}"


def main():
    index = (DIST / "index.html").read_text()
    javascript = (DIST / "app.js").read_text()
    css = (DIST / "style.css").read_text()
    page = Page()
    page.feed(index)
    assert page.canonical == EXPECTED_URL, "Canonical URL must match GitHub Pages"
    assert page.og_url == EXPECTED_URL, "Open Graph URL must match GitHub Pages"
    assert "chatgpt.site" not in index, "Old hosting URL in HTML metadata"
    assert "<meta name=\"viewport\"" in index, "Missing responsive viewport"
    assert (DIST / ".nojekyll").is_file(), "Missing .nojekyll"
    assert (DIST / "assets/Yingchao-Li-CV.pdf").read_bytes().startswith(b"%PDF-"), "Invalid CV PDF"
    references = page.references + re.findall(r'src="(assets/[^"$]+)"', javascript)
    references += re.findall(r'url\([\s\'"]*([^\)\s\'\"]+)', css)
    for reference in references:
        check_reference(reference, page)
    for path in DIST.rglob("*"):
        assert not path.is_symlink(), "Pages artifacts must not contain symbolic links"
        assert path.name not in {".env", ".git", ".openai", "CNAME"}, "Unexpected deployment file"
        if path.is_file():
            assert path.suffix not in {".pem", ".key"}, "Private key file in static output"
    print(f"Static checks passed: {len(references)} references, {len(page.ids)} anchors.")


if __name__ == "__main__":
    main()
