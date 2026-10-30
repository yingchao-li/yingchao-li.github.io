# Yingchao Li — Personal Portfolio

Live website: **https://yingchao-li.github.io/**

An English / Chinese / German portfolio for computer vision, full-stack software and embedded AI. It preserves the design, project gallery, filters, project dialogs, education and experience timeline, and downloadable CV from the original portfolio.

## Stack and hosting

- Plain HTML, CSS and JavaScript; no frontend framework or dependencies.
- `dist/` is the complete static website. No compilation is needed.
- Relative asset paths work at the user-site root and under a project path. Navigation uses section anchors, so no SPA rewrite is needed.
- GitHub Pages hosts the static portfolio only. The projects' FastAPI, model-inference, hardware and other backend functionality is not deployed here; project links open their source repositories.
- GitHub's provided `github.io` domain is used; no custom domain, VPS or paid hosting is configured.

## Local checks and preview

```sh
node --check dist/app.js
python3 scripts/validate-site.py
python3 -m http.server 4173 --directory dist
```

Open http://localhost:4173. Node.js is used only for the JavaScript syntax check; the website itself needs only a browser.

## Automatic deployment

`.github/workflows/deploy.yml` runs on every push to `main` and can also be started manually in the Actions tab. It checks JavaScript syntax and static paths, uploads only `dist/`, and deploys it to the `github-pages` environment using GitHub's official Pages actions.

The repository's **Settings → Pages → Build and deployment → Source** must be **GitHub Actions**. No personal access token or repository secret is required: deployment uses the temporary, repository-scoped `GITHUB_TOKEN` and OIDC permissions supplied by Actions.

## Languages and technology map

English is the default language, including the initial HTML before JavaScript loads. Visitors can explicitly choose English, Chinese or German; their selection is remembered locally. A versioned preference key prevents the earlier Chinese default from carrying over as a visitor choice.

The hero diagram presents the overall technology stack across AI / computer vision, web applications, data / retrieval and embedded systems. It is an accessible, responsive inline SVG, not a single CVKit module.

## Editing

- `dist/index.html`: page structure, initial Chinese copy and SEO metadata.
- `dist/app.js`: project data, trilingual text and interactive behavior.
- `dist/style.css`: responsive styles and design.
- `dist/assets/`: illustrations, the CVKit output image and CV PDF.

Commit updates and push to `main`; the workflow publishes them automatically.

## Content sources

Content was reviewed on 30 October 2026 using the supplied CV and these public repositories:

- https://github.com/yingchao-li/CV-Tool-Platform
- https://github.com/yingchao-li/ev-charging-reservation-v2
- https://github.com/yingchao-li/esp32-s3-vision-alert
- https://github.com/yingchao-li/DeepSeek-Multi-Mode-Chat
- https://github.com/yingchao-li/ev-charging-reservation

The gallery is a curated snapshot, not a live GitHub API feed. The CV is the supplied, unchanged PDF. The CVKit image comes from that repository's `docs/assets/detection/balloons/balloon_02.jpg`; the hero technology map and other project graphics are original, code-based illustrations.

This public repository contains the portfolio's intended public content, including the downloadable CV. Site credentials, hosting account metadata, local environment files and the original Site's Git history are not included.
