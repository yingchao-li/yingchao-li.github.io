'use strict';
const translations = {
  zh: {
    homeAria:'Yingchao Li 首页',skip:'跳到主要内容',navProjects:'项目',navAbout:'关于我',navContact:'联系',heroEyebrow:'数据科学 · 计算机视觉 · 软件工程',heroTitle:'从算法，<br>到<span class="serif-accent">可以使用</span><br>的系统。',heroDescription:'你好，我是 Yingchao Li。FAU 数据科学硕士在读，将计算机视觉、机器学习与软件工程连接起来，让想法在真实场景中运行。',explore:'探索我的项目',downloadCv:'下载 CV',labAnnotation:'从噪声中，找到结构。',labInput:'深度点云',labOutput:'三维几何',labFootnote:'CVKit 几何模块 · 流程示意图',cloudAlt:'三维点云立方体与平面拟合流程示意',stripTitle:'理解原理，也把系统做完整。',projectsIndex:'01 / 项目精选',allRepos:'全部 GitHub 仓库',projectsTitle:'想法，<span class="serif-accent">落地成形。</span>',projectsIntro:'从视觉算法到 Web 应用，再到端侧设备。这里是我正在构建和探索的作品。',filterAll:'全部项目',filterVision:'计算机视觉',filterFullstack:'全栈开发',filterEmbedded:'嵌入式 AI',filterAria:'项目分类',projectSource:'项目内容整理自公开仓库 · 更新于 2026 年 10 月',aboutIndex:'02 / 关于我',aboutTitle:'保持好奇，<br><span class="serif-accent">动手构建。</span>',aboutDescription:'我的计算机科学背景，让我关心系统如何运行；数据科学的学习，则让我更深入地理解模型为何有效。我喜欢在两者之间工作——从实验、评估，到界面、API 和硬件集成。',aboutNote:'目前在德国 FAU 攻读数据科学硕士，关注计算机视觉、AI 应用与软硬件协同。',readCv:'查看完整 CV',present:'至今',education:'教育',experience:'实习',masters:'数据科学硕士',mastersDetail:'M.Sc. Data Science · Erlangen, Germany',intern:'软件开发实习生',internOrg:'Guanghong · 零售业务',internDetail:'独立开发并部署微信小程序，支持商品浏览、线上下单及 Python 后端，集成 AI 客服并负责测试与维护。',bachelors:'计算机科学与技术学士',bachelorsOrg:'中国地质大学（武汉）',researchEyebrow:'本科毕业论文 / 2024.12 — 2025.06',researchTitle:'先验增强的图像复原',researchDescription:'设计 PriAda-U-Net 去雾与 GRS-U-Net 去雨模型，将暗通道和梯度图先验融入网络，通过自适应损失加权、对比实验与消融研究评估模型。',dehazing:'图像去雾',cvResult:'CV 所列实验结果 · SSIM 0.8325',skillsVision:'从模型到评估',visionSkills:'目标检测 · 图像复原 · 特征提取',skillsSoftware:'从后端到界面',skillsEmbedded:'从代码到设备',embeddedSkills:'摄像头接入 · GPIO · 软硬件集成',languagesLabel:'语言',chinese:'中文 / 母语',english:'English / 流利',german:'Deutsch / 基础',contactIndex:'03 / 保持联系',contactTitle:'下一个想法，<br><span class="serif-accent">一起构建。</span>',contactDescription:'欢迎交流计算机视觉、AI 应用与软件开发。',footer:'以好奇心为起点，以作品作答。',backTop:'返回顶部 ↑',closeAria:'关闭项目详情',details:'项目详情',source:'查看源代码',repository:'GitHub',original:'查看初版仓库',visible:n=>`当前显示 ${n} 个项目`,cvAlt:'CVKit 仓库中的气球目标检测输出图',repoNote:'详细技术说明与复现步骤见项目 README。',metadata:'Yingchao Li 的个人作品集。FAU 数据科学硕士在读，探索计算机视觉、全栈应用与嵌入式 AI。'
  },
  en: {
    homeAria:'Yingchao Li home',skip:'Skip to content',navProjects:'Projects',navAbout:'About',navContact:'Contact',heroEyebrow:'DATA SCIENCE · VISION · SOFTWARE',heroTitle:'Ideas into<br><span class="serif-accent">working</span><br>systems.',heroDescription:'Hi, I’m Yingchao Li, an M.Sc. Data Science student at FAU. I connect computer vision, machine learning and software engineering to bring ideas into the real world.',explore:'Explore my work',downloadCv:'Download CV',labAnnotation:'Finding structure in the noise.',labInput:'Depth cloud',labOutput:'3D geometry',labFootnote:'CVKit geometry module · conceptual illustration',cloudAlt:'Conceptual illustration of a 3D point-cloud box and robust plane fitting',stripTitle:'Understand the principles. Build the whole system.',projectsIndex:'01 / SELECTED WORK',allRepos:'All GitHub repositories',projectsTitle:'Built to <span class="serif-accent">take shape.</span>',projectsIntro:'From vision algorithms to web applications and edge devices. A selection of things I build and explore.',filterAll:'All projects',filterVision:'Computer vision',filterFullstack:'Full-stack',filterEmbedded:'Embedded AI',filterAria:'Filter projects by category',projectSource:'Based on public repositories · October 2026',aboutIndex:'02 / ABOUT ME',aboutTitle:'Stay curious.<br><span class="serif-accent">Keep building.</span>',aboutDescription:'Computer science taught me to ask how systems work. Data science pushes me to understand why models work. I enjoy the space between them: experiments and evaluation, interfaces and APIs, software and hardware.',aboutNote:'Currently pursuing an M.Sc. in Data Science at FAU in Germany, with a focus on computer vision, AI applications and hardware–software integration.',readCv:'Read the full CV',present:'PRESENT',education:'EDUCATION',experience:'INTERNSHIP',masters:'M.Sc. Data Science',mastersDetail:'Erlangen, Germany · October 2025 – Present',intern:'Software Development Intern',internOrg:'Guanghong · Retail business',internDetail:'Independently developed and deployed a WeChat Mini Program for product browsing and online orders, with a Python backend and AI customer support. Managed testing and maintenance.',bachelors:'B.Sc. Computer Science and Technology',bachelorsOrg:'China University of Geosciences (Wuhan)',researchEyebrow:'BACHELOR’S THESIS / DEC 2024 — JUN 2025',researchTitle:'Prior-enhanced image restoration',researchDescription:'Designed PriAda-U-Net for dehazing and GRS-U-Net for deraining, integrating dark-channel and gradient-map priors. Evaluated adaptive loss weighting through comparative experiments and ablation studies.',dehazing:'Image dehazing',cvResult:'Experiment reported in CV · SSIM 0.8325',skillsVision:'From models to evaluation',visionSkills:'Detection · Restoration · Feature extraction',skillsSoftware:'From backend to interface',skillsEmbedded:'From code to devices',embeddedSkills:'Camera interfacing · GPIO · Hardware integration',languagesLabel:'LANGUAGES',chinese:'Chinese / Native',english:'English / Fluent',german:'German / Basic',contactIndex:'03 / GET IN TOUCH',contactTitle:'The next idea.<br><span class="serif-accent">Let’s build it.</span>',contactDescription:'Always happy to talk computer vision, AI applications and software.',footer:'Led by curiosity. Expressed through building.',backTop:'Back to top ↑',closeAria:'Close project details',details:'Explore project',source:'View source code',repository:'GitHub',original:'View original repository',visible:n=>`Showing ${n} projects`,cvAlt:'Balloon detection output from the CVKit repository',repoNote:'See the project README for implementation details and reproduction steps.',metadata:'Portfolio of Yingchao Li, an M.Sc. Data Science student at FAU, exploring computer vision, full-stack software and embedded AI.'
  }
};
Object.assign(translations.en, {
  "navAria": "Main navigation",
  "languageAria": "Website language",
  "stackHeading": "MY TECHNOLOGY STACK",
  "stackIndex": "CONNECTED CAPABILITIES",
  "stackTitle": "My technology stack",
  "stackDescription": "An interconnected technology map: AI and computer vision with PyTorch and OpenCV; web applications with React and FastAPI; data and retrieval with SQL, FAISS and RAG; embedded systems with ESP32-S3 and C++. Python connects these areas, supported by Git and pytest.",
  "stackVisionDetail": "Detection · Image restoration",
  "stackCameraDetail": "ESP-DL · Camera · GPIO",
  "stackVision": "AI & COMPUTER VISION",
  "stackWeb": "WEB APPLICATIONS",
  "stackData": "DATA & RETRIEVAL",
  "stackEdge": "EMBEDDED SYSTEMS",
  "stackCenter": "MODELS ↔ SYSTEMS",
  "stackFoundation": "FOUNDATION",
  "stackWorkflow": "WORKFLOW",
  "stackNote": "From experiments to applications and devices."
});
Object.assign(translations.zh, {
  "navAria": "主导航",
  "languageAria": "网站语言",
  "stackHeading": "我的技术栈",
  "stackIndex": "相互连接的能力",
  "stackTitle": "我的技术栈关系图",
  "stackDescription": "技术栈关系图：PyTorch、OpenCV 支持 AI 与计算机视觉；React、FastAPI 支持 Web 应用；SQL、FAISS、RAG 支持数据处理与检索；ESP32-S3、C++ 支持嵌入式系统。以 Python 连接这些领域，使用 Git 和 pytest 支持开发与测试。",
  "stackVisionDetail": "目标检测 · 图像复原",
  "stackCameraDetail": "ESP-DL · 摄像头 · GPIO",
  "stackVision": "AI 与计算机视觉",
  "stackWeb": "WEB 应用开发",
  "stackData": "数据处理与检索",
  "stackEdge": "嵌入式系统",
  "stackCenter": "模型 ↔ 系统",
  "stackFoundation": "编程基础",
  "stackWorkflow": "开发与测试",
  "stackNote": "从实验，到应用，再到设备。"
});
translations.de = {
  "homeAria": "Yingchao Li – Startseite",
  "skip": "Zum Inhalt springen",
  "navProjects": "Projekte",
  "navAbout": "Über mich",
  "navContact": "Kontakt",
  "heroEyebrow": "DATA SCIENCE · COMPUTER VISION · SOFTWARE",
  "heroTitle": "Aus Ideen<br><span class=\"serif-accent\">werden</span><br>Systeme.",
  "heroDescription": "Hallo, ich bin Yingchao Li und studiere Data Science im Master an der FAU. Ich verbinde Computer Vision, maschinelles Lernen und Softwareentwicklung, um Ideen in die Praxis umzusetzen.",
  "explore": "Projekte entdecken",
  "downloadCv": "Lebenslauf herunterladen",
  "stripTitle": "Die Grundlagen verstehen. Das ganze System entwickeln.",
  "projectsIndex": "01 / AUSGEWÄHLTE PROJEKTE",
  "allRepos": "Alle GitHub-Repositories",
  "projectsTitle": "Ideen, die <span class=\"serif-accent\">Gestalt annehmen.</span>",
  "projectsIntro": "Von Bildverarbeitungsalgorithmen über Webanwendungen bis zu Embedded-Systemen: eine Auswahl meiner Projekte.",
  "filterAll": "Alle Projekte",
  "filterVision": "Computer Vision",
  "filterFullstack": "Fullstack",
  "filterEmbedded": "Embedded-KI",
  "filterAria": "Projekte nach Kategorie filtern",
  "projectSource": "Auf Grundlage der öffentlichen Repositories · Oktober 2026",
  "aboutIndex": "02 / ÜBER MICH",
  "aboutTitle": "Neugierig bleiben.<br><span class=\"serif-accent\">Weiterentwickeln.</span>",
  "aboutDescription": "Die Informatik hat mich gelehrt zu fragen, wie Systeme funktionieren. Data Science hilft mir zu verstehen, warum Modelle funktionieren. Mich interessiert die Verbindung: von Experimenten und Evaluation über Oberflächen und APIs bis zur Integration von Software und Hardware.",
  "aboutNote": "Ich studiere derzeit Data Science im Master an der FAU in Deutschland. Meine Schwerpunkte sind Computer Vision, KI-Anwendungen und die Integration von Hardware und Software.",
  "readCv": "Vollständiger Lebenslauf",
  "present": "HEUTE",
  "education": "STUDIUM",
  "experience": "PRAKTIKUM",
  "masters": "M.Sc. Data Science",
  "mastersDetail": "Erlangen, Deutschland · Oktober 2025 – heute",
  "intern": "Praktikant in der Softwareentwicklung",
  "internOrg": "Guanghong · Einzelhandel",
  "internDetail": "Eigenständige Entwicklung und Bereitstellung eines WeChat-Mini-Programms für Produktkatalog und Onlinebestellungen, mit Python-Backend und KI-Kundenservice. Verantwortlich für Tests und Wartung.",
  "bachelors": "B.Sc. Informatik und Technologie",
  "bachelorsOrg": "China University of Geosciences (Wuhan)",
  "researchEyebrow": "BACHELORARBEIT / DEZ. 2024 — JUNI 2025",
  "researchTitle": "Bildrestaurierung mit Vorwissen",
  "researchDescription": "Entwicklung von PriAda-U-Net zur Entnebelung und GRS-U-Net zur Entfernung von Regenartefakten. Integration von Dark-Channel- und Gradienten-Priors; Evaluation adaptiver Verlustgewichtung durch Vergleichsexperimente und Ablationsstudien.",
  "dehazing": "Bildentnebelung",
  "cvResult": "Experiment laut Lebenslauf · SSIM 0,8325",
  "skillsVision": "Vom Modell zur Evaluation",
  "visionSkills": "Objekterkennung · Bildrestaurierung · Merkmale",
  "skillsSoftware": "Vom Backend zur Oberfläche",
  "skillsEmbedded": "Vom Code zum Gerät",
  "embeddedSkills": "Kameraanbindung · GPIO · Hardwareintegration",
  "languagesLabel": "SPRACHEN",
  "chinese": "Chinesisch / Muttersprache",
  "english": "Englisch / Fließend",
  "german": "Deutsch / Grundkenntnisse",
  "contactIndex": "03 / KONTAKT",
  "contactTitle": "Die nächste Idee.<br><span class=\"serif-accent\">Gemeinsam umsetzen.</span>",
  "contactDescription": "Ich freue mich auf den Austausch über Computer Vision, KI-Anwendungen und Softwareentwicklung.",
  "footer": "Von Neugier angetrieben. Durch Projekte ausgedrückt.",
  "backTop": "Nach oben ↑",
  "closeAria": "Projektdetails schließen",
  "details": "Projekt ansehen",
  "source": "Quellcode ansehen",
  "repository": "GitHub",
  "original": "Ursprüngliches Repository",
  "cvAlt": "Ausgabe der Ballonerkennung aus dem CVKit-Repository",
  "repoNote": "Implementierungsdetails und Schritte zur Reproduktion stehen in der Projekt-README.",
  "metadata": "Portfolio von Yingchao Li, Masterstudent für Data Science an der FAU, mit Projekten in Computer Vision, Fullstack-Software und Embedded-KI.",
  "navAria": "Hauptnavigation",
  "languageAria": "Sprache der Website",
  "stackHeading": "MEIN TECHNOLOGIE-STACK",
  "stackIndex": "VERNETZTE KOMPETENZEN",
  "stackTitle": "Mein Technologie-Stack",
  "stackDescription": "Eine vernetzte Übersicht: KI und Computer Vision mit PyTorch und OpenCV; Webanwendungen mit React und FastAPI; Daten und Retrieval mit SQL, FAISS und RAG; Embedded-Systeme mit ESP32-S3 und C++. Python verbindet die Bereiche, unterstützt durch Git und pytest.",
  "stackVisionDetail": "Erkennung · Bildrestaurierung",
  "stackCameraDetail": "ESP-DL · Kamera · GPIO",
  "stackVision": "KI & COMPUTER VISION",
  "stackWeb": "WEBANWENDUNGEN",
  "stackData": "DATEN & RETRIEVAL",
  "stackEdge": "EMBEDDED-SYSTEME",
  "stackCenter": "MODELLE ↔ SYSTEME",
  "stackFoundation": "GRUNDLAGEN",
  "stackWorkflow": "ENTWICKLUNG & TESTS",
  "stackNote": "Vom Experiment zur Anwendung und zum Gerät."
};
translations.de.visible = n => `${n} Projekte werden angezeigt`;

const projects = [
  {id:'cvkit',repo:'CV-Tool-Platform',category:'vision',categoryLabel:'COMPUTER VISION',number:'01',tags:['Python','Streamlit','OpenCV','scikit-learn'],featured:true,
    zh:{title:'CVKit',subtitle:'从 RAW 数据到人脸识别',description:'将几何测量、RAW / HDR 成像、图像检索、目标检测和人脸分析，整合为一个模块化工具箱。统一 API、CLI 与交互式 Studio，让算法成为可复用的系统。',points:['几何：使用 RANSAC、MLESAC 和 Preemptive RANSAC 拟合平面，结合 PCA 完成三维箱体测量。','成像与检索：实现 RAW 去马赛克、响应标定和 HDR 色调映射，以及 RootSIFT → VLAD → Exemplar SVM 检索流程。','检测与人脸：Selective Search + HOG / SVM，支持开放集人脸识别与未知身份拒绝；各模块提供可复现实验。'],note:'公开仓库提供统一 Python 包、CLI 与 Streamlit Studio。卡片图片为仓库中的实际检测输出，实验设置与复现步骤见 README。'},
    en:{title:'CVKit',subtitle:'From RAW data to face recognition',description:'A modular vision toolkit spanning 3D geometry, RAW / HDR imaging, retrieval, detection and face analysis. One Python package, a unified CLI and an interactive studio turn separate algorithms into a reusable system.',points:['Geometry: robust plane fitting with RANSAC, MLESAC and Preemptive RANSAC, followed by PCA-based 3D box measurement.','Imaging and retrieval: RAW demosaicing, response calibration and HDR tone mapping, plus a RootSIFT → VLAD → Exemplar SVM pipeline.','Detection and faces: Selective Search + HOG / SVM, open-set recognition and unknown-identity rejection, with reproducible benchmarks.'],note:'The repository provides a unified Python package, CLI and Streamlit studio. The image shows an actual detection output; experiment settings and reproduction steps are documented in the README.'}},
  {id:'ev',repo:'ev-charging-reservation-v2',category:'fullstack',categoryLabel:'FULL-STACK / HARDWARE',number:'02',tags:['React','FastAPI','SQLite','REST + SSE'],
    zh:{title:'EV 预约与智能地锁',subtitle:'从预约到离场的完整流程',description:'慕尼黑黑客马拉松项目：地图找桩、司机与运营端、预约冲突处理，以及 ECURIOUS 地锁 REST / SSE 集成。',points:['React / Leaflet 地图与司机、管理员界面；FastAPI 和 SQLite 协调账号、车辆、预约、候补和重新分配。','通过服务端适配器对接 ECURIOUS 官方 REST API 与 SSE，处理车牌签到、状态同步、事件去重和失败恢复。','Mock 与 Live 模式明确分离；充电状态、费用和收入均标注为模拟或估计。'],note:'这是黑客马拉松原型。README 仍列有待完成的实物硬件验证事项，实际设备表现不作保证。'},
    en:{title:'EV Reservation & Smart Lock',subtitle:'A complete reservation-to-release flow',description:'A Munich hackathon prototype with map-based discovery, driver and operator dashboards, reservation handling, and ECURIOUS parking-lock integration over REST and SSE.',points:['React / Leaflet interfaces with FastAPI and SQLite for accounts, vehicles, reservations, waitlisting and reallocation.','A server-side adapter integrates official ECURIOUS REST and SSE, with plate-based check-in, event deduplication, synchronization and failure recovery.','Explicitly separated Mock and Live modes. Charging, cost and revenue figures remain labeled as simulated or estimated.'],note:'A hackathon prototype. The README lists remaining physical hardware validation; real-device performance is not claimed.'}},
  {id:'embedded',repo:'esp32-s3-vision-alert',category:'embedded',categoryLabel:'EMBEDDED / EDGE AI',number:'03',tags:['C++','ESP32-S3','ESP-DL','YOLO11n INT8'],
    zh:{title:'ESP32-S3 Vision Alert',subtitle:'把视觉推理带到设备端',description:'基于 ESP-DL 的端侧视觉固件，面向行人、自行车和汽车检测，结合 ROI 跟踪、分级蜂鸣提示与 Wi-Fi 状态面板。',notice:'研发中 · 待实物硬件验证',points:['使用官方 YOLO11n COCO 320 INT8 模型，在 ESP32-S3 运行端侧推理，不依赖云端或 PC 推理。','有界 FreeRTOS 流水线连接摄像头采集、推理、跟踪和蜂鸣提示；Wi-Fi 面板提供同帧图像与检测框。','包含模型 SHA / 张量校验、主机测试与刷写保护；Traffic Cone 扩展仍在进行中。'],note:'当前固件构建通过，但尚未完成板端硬件测试。未宣称实际 FPS 或精度；研究用途，不是导航安全产品。'},
    en:{title:'ESP32-S3 Vision Alert',subtitle:'Computer vision at the edge',description:'On-device vision firmware using ESP-DL, with person, bicycle and car detection, ROI tracking, graded buzzer alerts and a Wi-Fi dashboard.',notice:'In development · Hardware testing pending',points:['Official YOLO11n COCO 320 INT8 model for ESP32-S3 inference, without cloud or PC inference.','A bounded FreeRTOS pipeline connects camera capture, inference, tracking and alerts; the Wi-Fi dashboard displays same-frame images and boxes.','Model SHA and tensor-contract checks, host tests and guarded flashing. Traffic Cone detection is an extension still in progress.'],note:'Firmware builds pass, but on-board hardware testing is pending. No measured FPS or accuracy is claimed. A research project, not a navigation-safety product.'}},
  {id:'rag',repo:'DeepSeek-Multi-Mode-Chat',category:'llm',categoryLabel:'LLM / RETRIEVAL / DATA',number:'04',tags:['Python','Streamlit','FAISS','DeepSeek'],
    zh:{title:'DeepSeek Multi-Mode Chat',subtitle:'让文档、论文和数据参与对话',description:'将文档 RAG、Agentic RAG、论文阅读与表格分析整合到一个 Streamlit 应用，支持中、英、德、法四种界面语言。',points:['文档上传、分块、嵌入和 FAISS 检索；Agentic 流程覆盖路由、检索、评分、查询重写、生成与验证。','论文模式提取 PDF 文本与图片，生成结构化摘要，并支持检索问答或全文问答。','CSV / Excel 清洗、自然语言分析、Plotly 图表、多表连接和 scikit-learn 基线建模。'],note:'应用需在运行环境配置 DeepSeek API Key。此作品集展示项目说明，并链接到源代码。'},
    en:{title:'DeepSeek Multi-Mode Chat',subtitle:'A conversation with documents and data',description:'One Streamlit application for document RAG, agentic retrieval, paper reading and tabular analysis, with Chinese, English, German and French interfaces.',points:['Document upload, chunking, embeddings and FAISS retrieval. The agentic pipeline adds routing, grading, query rewriting, generation and verification.','Paper mode extracts PDF text and figures, creates structured summaries and supports retrieval-based or full-text Q&A.','CSV / Excel cleaning, natural-language analysis, Plotly charts, multi-table joins and scikit-learn baselines.'],note:'The application requires a DeepSeek API key in its own runtime. This portfolio presents the project and links to its source.'}},
  {id:'mock',repo:'ev-charging-reservation',category:'fullstack',categoryLabel:'FULL-STACK / PROTOTYPE',number:'05',tags:['React','FastAPI','SQLite','Mock API'],
    zh:{title:'EV Charging · 初版原型',subtitle:'先让完整业务流程跑起来',description:'EV 系统的初版仓库。基于明确的 Mock API，验证预约、自动签到、No-Show、占位告警和司机 / 运营端的完整业务闭环。',points:['前端、应用后端与 Mock Server 分离，预约状态经由 HTTP API、数据库和事件同步驱动。','支持重叠预约冲突、取消、角色权限、错误车牌、Blocked Bay 与 No-Show 模拟。','后续 v2 仓库在这一架构上增加官方地锁 REST / SSE 适配。'],note:'本仓库中的 ECURIOUS 接口是赛事开发用的虚构 Mock；充电与收入也是模拟值，不代表真实充电遥测。'},
    en:{title:'EV Charging · First Prototype',subtitle:'Making the business flow work end to end',description:'The original EV system repository. An explicit Mock API validates reservations, check-in, No-Show handling and blocked-bay alerts across driver and operator workflows.',points:['Separate frontend, application backend and Mock Server. States flow through HTTP APIs, databases and event synchronization.','Covers overlapping reservations, cancellation, role permissions, incorrect plates, Blocked Bay and No-Show simulations.','The v2 repository extends this architecture with official parking-lock REST and SSE adapters.'],note:'The ECURIOUS API here is a fictional hackathon Mock. Charging and revenue figures are simulations, not live charger telemetry.'}}
];
const germanProjects = {
  "cvkit": {
    "title": "CVKit",
    "subtitle": "Von RAW-Daten zur Gesichtserkennung",
    "description": "Ein modularer Werkzeugkasten für 3D-Geometrie, RAW- und HDR-Bildverarbeitung, Bildretrieval, Objekterkennung und Gesichtsanalyse. Ein Python-Paket, eine einheitliche CLI und ein interaktives Studio verbinden die Algorithmen zu einem wiederverwendbaren System.",
    "points": [
      "Geometrie: robuste Ebenenschätzung mit RANSAC, MLESAC und Preemptive RANSAC, gefolgt von PCA-basierter 3D-Boxvermessung.",
      "Bildverarbeitung und Retrieval: RAW-Demosaicing, Kalibrierung der Kamerakennlinie und HDR-Tonemapping sowie eine Pipeline aus RootSIFT, VLAD und Exemplar SVM.",
      "Objekt- und Gesichtserkennung: Selective Search mit HOG/SVM, Open-Set-Erkennung und Zurückweisung unbekannter Identitäten, mit reproduzierbaren Benchmarks."
    ],
    "note": "Das Repository bietet ein einheitliches Python-Paket, eine CLI und ein Streamlit-Studio. Das Bild zeigt ein tatsächliches Erkennungsergebnis; Versuchsbedingungen und Reproduktion sind in der README dokumentiert."
  },
  "ev": {
    "title": "E-Ladeplatzreservierung & Smart Lock",
    "subtitle": "Ein vollständiger Ablauf von der Reservierung bis zur Freigabe",
    "description": "Ein Prototyp von einem Münchner Hackathon: kartenbasierte Ladesäulensuche, Fahrer- und Betreiberoberflächen, Reservierungsverwaltung und die Integration von ECURIOUS-Parksperren über REST und SSE.",
    "points": [
      "React- und Leaflet-Oberflächen mit FastAPI und SQLite für Konten, Fahrzeuge, Reservierungen, Wartelisten und Neuzuweisung.",
      "Ein serverseitiger Adapter integriert die offizielle ECURIOUS-REST-API und SSE: Kennzeichen-Check-in, Ereignisdeduplizierung, Synchronisation und Fehlerbehandlung.",
      "Mock- und Live-Modus sind ausdrücklich getrennt. Ladevorgänge, Kosten und Umsätze bleiben als simuliert beziehungsweise geschätzt gekennzeichnet."
    ],
    "note": "Ein Hackathon-Prototyp. Die README nennt noch ausstehende Tests mit physischer Hardware; Aussagen zur tatsächlichen Geräteleistung werden nicht gemacht."
  },
  "embedded": {
    "title": "ESP32-S3 Vision Alert",
    "subtitle": "Computer Vision direkt auf dem Gerät",
    "description": "Firmware für lokale Bildverarbeitung mit ESP-DL: Erkennung von Personen, Fahrrädern und Autos, ROI-Tracking, abgestufte Signaltöne und ein WLAN-Dashboard.",
    "notice": "In Entwicklung · Hardwaretests ausstehend",
    "points": [
      "Offizielles YOLO11n-COCO-320-INT8-Modell zur Inferenz auf dem ESP32-S3, ohne Cloud- oder PC-Inferenz.",
      "Eine begrenzte FreeRTOS-Pipeline verbindet Kameraaufnahme, Inferenz, Tracking und Warnsignale. Das WLAN-Dashboard zeigt Bilder und Erkennungsrahmen desselben Frames.",
      "Prüfungen von Modell-SHA und Tensorverträgen, Host-Tests und abgesichertes Flashen. Die Erweiterung zur Erkennung von Verkehrskegeln ist noch in Arbeit."
    ],
    "note": "Die Firmware lässt sich erfolgreich bauen, Tests auf dem Board stehen aber noch aus. Es werden keine gemessenen FPS oder Genauigkeitswerte behauptet. Ein Forschungsprojekt, kein Produkt zur Navigationssicherheit."
  },
  "rag": {
    "title": "DeepSeek Multi-Mode Chat",
    "subtitle": "Mit Dokumenten und Daten ins Gespräch kommen",
    "description": "Eine Streamlit-Anwendung für Dokumenten-RAG, agentengestütztes Retrieval, wissenschaftliche Artikel und Tabellenanalyse, mit chinesischer, englischer, deutscher und französischer Oberfläche.",
    "points": [
      "Dokumentenupload, Aufteilung in Textabschnitte, Embeddings und FAISS-Retrieval. Die agentische Pipeline ergänzt Routing, Bewertung, Query-Rewriting, Generierung und Verifikation.",
      "Der Paper-Modus extrahiert Text und Abbildungen aus PDFs, erstellt strukturierte Zusammenfassungen und unterstützt Retrieval- oder Volltextfragen.",
      "CSV-/Excel-Bereinigung, Analyse in natürlicher Sprache, Plotly-Diagramme, Tabellenverknüpfungen und scikit-learn-Basismodelle."
    ],
    "note": "Die Anwendung benötigt einen DeepSeek-API-Schlüssel in ihrer eigenen Laufzeitumgebung. Dieses Portfolio stellt das Projekt vor und verlinkt den Quellcode."
  },
  "mock": {
    "title": "E-Ladeplatzreservierung · Erster Prototyp",
    "subtitle": "Den gesamten Geschäftsablauf zum Laufen bringen",
    "description": "Das ursprüngliche Repository des E-Ladeplatzsystems. Eine ausdrücklich simulierte API dient zur Prüfung von Reservierung, Check-in, No-Show-Regeln und Meldungen blockierter Stellplätze für Fahrer und Betreiber.",
    "points": [
      "Getrenntes Frontend, Anwendungsbackend und Mock-Server. Zustände werden über HTTP-APIs, Datenbanken und Ereignissynchronisation verarbeitet.",
      "Umfasst sich überschneidende Reservierungen, Stornierung, Rollenrechte, falsche Kennzeichen sowie Simulationen blockierter Stellplätze und nicht wahrgenommener Reservierungen.",
      "Das v2-Repository erweitert diese Architektur um Adapter für die offizielle Parksperren-REST-API und SSE."
    ],
    "note": "Die ECURIOUS-API in diesem Repository ist ein fiktiver Hackathon-Mock. Ladevorgänge und Umsätze sind Simulationen, keine Live-Telemetrie von Ladesäulen."
  }
};
for (const project of projects) project.de = germanProjects[project.id];

let language = 'en';
let activeFilter = 'all';
let currentProject = null;
const languagePreferenceKey = 'yl-portfolio-language-v2';
try { const saved = localStorage.getItem(languagePreferenceKey); if (Object.hasOwn(translations, saved)) language = saved; } catch {}
const grid = document.getElementById('project-grid');
const dialog = document.getElementById('project-dialog');
const t = key => translations[language][key];
const escapeHtml = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const repoUrl = p => `https://github.com/yingchao-li/${p.repo}`;
function artwork(p) {
  const prefix = `<span class="art-caption">${p.id === 'cvkit' ? 'ACTUAL OUTPUT / OBJECT DETECTION' : 'CONCEPT / ' + p.categoryLabel}</span><span class="art-index">${p.number}</span>`;
  if (p.id === 'cvkit') return `<div class="project-art art-cv">${prefix}<img class="cv-image" src="assets/cvkit-detection.jpg" alt="${t('cvAlt')}" loading="lazy" width="480" height="320"><span class="art-stamp"><span>↳</span> FIVE MODULES. ONE TOOLKIT.</span></div>`;
  if (p.id === 'ev') return `<div class="project-art art-ev" aria-hidden="true">${prefix}<div class="map-illustration"><i class="map-block"></i><i class="map-block"></i><i class="map-block"></i><i class="map-block"></i><div class="map-pin"><span>ϟ</span></div><div class="map-label">RESERVE → CHECK-IN → RELEASE</div></div><span class="map-note">REACT ↔ FASTAPI ↔ PARKING LOCK</span></div>`;
  if (p.id === 'embedded') return `<div class="project-art art-embedded" aria-hidden="true">${prefix}<div class="circuit-board"><span class="board-pins"></span><span class="board-pins right"></span><span class="board-lens"></span></div><span class="board-annotation">CAMERA → INFERENCE → ALERT</span></div>`;
  if (p.id === 'rag') return `<div class="project-art art-llm" aria-hidden="true">${prefix}<div class="rag-diagram"><div class="rag-docs"><i></i><i></i><i></i></div><span class="rag-arrow">→</span><div class="rag-core">RAG</div><span class="rag-arrow">→</span><div class="rag-answer"><i></i><i></i></div></div><div class="rag-labels">RETRIEVE / REASON / RESPOND</div></div>`;
  return `<div class="project-art art-mock" aria-hidden="true">${prefix}<div class="workflow-art"><div class="workflow-step"><strong>01</strong>RESERVE</div><span>→</span><div class="workflow-step"><strong>02</strong>CHECK IN</div><span>→</span><div class="workflow-step"><strong>03</strong>RELEASE</div></div><span class="workflow-label">BUSINESS FLOW / MOCK API</span></div>`;
}
function renderProjects() {
  const visible = projects.filter(p => activeFilter === 'all' || p.category === activeFilter);
  grid.innerHTML = visible.map(p => {
    const c = p[language];
    return `<article class="project-card ${p.featured ? 'featured' : ''}">${artwork(p)}<div class="project-body"><p class="project-category"><span class="category-dot"></span>${p.categoryLabel}</p><h3>${escapeHtml(c.title)}</h3><p class="project-description">${escapeHtml(c.description)}</p>${c.notice ? `<p class="project-notice"><span>◌</span>${escapeHtml(c.notice)}</p>` : ''}<div class="project-tags">${p.tags.map(tag => `<span class="project-tag">${escapeHtml(tag)}</span>`).join('')}</div><div class="project-actions"><button class="project-detail" data-project="${p.id}" aria-label="${t('details')}: ${escapeHtml(c.title)}"><span>${t('details')}</span><span>↗</span></button><a class="repo-link" href="${repoUrl(p)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(c.title)} GitHub">GitHub ↗</a></div></div></article>`;
  }).join('');
  document.getElementById('filter-status').textContent = t('visible')(visible.length);
}
function renderDialog(p) {
  const c = p[language];
  document.getElementById('dialog-content').innerHTML = `<p class="eyebrow">${p.categoryLabel}</p><h2 id="dialog-title" class="dialog-title">${escapeHtml(c.title)}</h2><p class="dialog-lead">${escapeHtml(c.subtitle)}</p><ul class="dialog-points">${c.points.map(point => `<li>${escapeHtml(point)}</li>`).join('')}</ul><p class="dialog-note">${escapeHtml(c.note)}</p><div class="dialog-links"><a class="button button-dark" href="${repoUrl(p)}" target="_blank" rel="noopener noreferrer"><span>${t('source')}</span><span>↗</span></a>${p.id === 'ev' ? `<a class="text-link" href="https://github.com/yingchao-li/ev-charging-reservation" target="_blank" rel="noopener noreferrer"><span>${t('original')}</span><span>↗</span></a>` : ''}</div>`;
}
function setLanguage(next) {
  if (!Object.hasOwn(translations, next)) return;
  language = next;
  document.documentElement.lang = {en:'en',zh:'zh-CN',de:'de'}[next];
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-alt]').forEach(el => { el.alt = t(el.dataset.alt); });
  document.querySelectorAll('[data-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.aria)); });
  document.querySelector('meta[name="description"]').content = t('metadata');
  document.querySelectorAll('[data-language]').forEach(button => {
    const selected = button.dataset.language === next;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  renderProjects();
  if (currentProject) renderDialog(currentProject);
  try { localStorage.setItem(languagePreferenceKey, next); } catch {}
}
document.querySelector('.language-options').addEventListener('click', event => {
  const button = event.target.closest('[data-language]');
  if (button) setLanguage(button.dataset.language);
});
document.querySelector('.project-filters').addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(el => {
    const active = el === button;
    el.classList.toggle('active', active);
    el.setAttribute('aria-pressed', String(active));
  });
  renderProjects();
});
grid.addEventListener('click', event => {
  const button = event.target.closest('[data-project]');
  if (!button) return;
  currentProject = projects.find(p => p.id === button.dataset.project);
  renderDialog(currentProject);
  dialog.showModal();
  document.body.classList.add('dialog-open');
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  currentProject = null;
});
function layoutTechnologyMap() {
  const narrow = matchMedia('(max-width:620px)').matches;
  const map = document.querySelector('.stack-map');
  map.setAttribute('viewBox', narrow ? '0 0 320 655' : '0 0 560 430');
  const positions = narrow
    ? {vision:'66 115',web:'66 250',data:'66 385',edge:'66 520'}
    : {vision:'18 35',web:'314 35',data:'18 275',edge:'314 275'};
  document.querySelectorAll('[data-stack-node]').forEach(node => {
    node.setAttribute('transform', `translate(${positions[node.dataset.stackNode]})`);
  });
  document.querySelector('.stack-core').setAttribute('transform', narrow ? 'translate(77 10)' : 'translate(197 177)');
  const paths = document.querySelectorAll('.stack-connections path');
  paths[0].setAttribute('d', narrow ? 'M160 86v14H30v480M30 175h36M30 310h36M30 445h36M30 580h36' : 'M132 155v35q0 25 35 25h35M428 155v35q0 25-35 25h-35M132 275v-35q0-25 35-25h35M428 275v-35q0-25-35-25h-35');
  paths[1].setAttribute('d', narrow ? '' : 'M280 105v70m0 80v70');
  document.querySelectorAll('.stack-map > g[fill="#809b68"] circle').forEach((dot, i) => {
    dot.setAttribute('cx', narrow ? '66' : ['132','428','132','428'][i]);
    dot.setAttribute('cy', narrow ? String(175 + i * 135) : ['155','155','275','275'][i]);
  });
}
matchMedia('(max-width:620px)').addEventListener('change', layoutTechnologyMap);
layoutTechnologyMap();
setLanguage(language);
