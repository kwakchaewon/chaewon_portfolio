# 곽채원 · 포트폴리오

> 기록하고 공유하는 개발자 곽채원의 웹 포트폴리오입니다.

**🔗 Live — [kwakchaewon.github.io/chaewon_portfolio](https://kwakchaewon.github.io/chaewon_portfolio/)**

![곽채원 포트폴리오](assets/og-image.png)

<br>

## 수록 내용

### Experience
| 기간 | 소속 | 역할 |
| --- | --- | --- |
| 2024.02 – 현재 | 이든티앤에스 기술연구소 | 백엔드 · 외부 고객 기술 지원 |
| 2023 | KT AIVLE School | 수료 |
| 2019.08 – 2020.08 | 태화이노베이션 SI 3팀 | — |

### Projects
| # | 프로젝트 | 기간 | 요약 |
| --- | --- | --- | --- |
| 01 | 표준 Oracle 환경 대응 리팩토링 | 2024.04 – 2025.11 | MariaDB + MyBatis → JPA + QueryDSL 전환. Oracle 기준 DDL 재설계, 동적 쿼리 표준화, batch flush·clear 메모리 안정화로 DB 교체 시 수정 범위 축소 |
| 02 | RPM · Inno Setup 기반 설치 패키지 표준화 | 2025.01 – 2025.04<br>2026.06 – 2026.08 | [Windows] Inno Setup 7 단일 .exe로 설치·업데이트·IP/포트 변경·언인스톨 라이프사이클 전 구간 관리(PowerShell · NSSM 서비스 등록), [Linux] rpmbuild 기반 8개 OS 대상 설치 자동화. 설치·장애 대응 비용 90% 이상 절감, 배포 용량 53% 최적화(1,893MB → 887MB) |
| 03 | 행정안전부 기준 보안 취약점 대응 | 2025.08 – 2025.12 | 「주요정보통신기반시설 기술적 취약점 분석·평가 방법(2021)」 기준으로 Web · WAS · DB · OS 4개 계층 점검 및 조치 |

### AX 업무 전환 케이스

| # | 영역 | 주요 성과 | 요약 |
| --- | --- | --- | --- |
| 01 | Claude Code · 스킬 기반 표준 개발 사이클 | 개발 컨벤션 준수율 향상 · 토큰 사용량 절감 | 플랜 → 승인 → 작은 변경 → 검증 게이트 사이클 정립, auto-commit · create-pr · write-release-note 등 다수 스킬 적용, 3회 이상 반복 작업은 스킬로 추출 |
| 02 | Claude Design · 사내 표준 디자인 시스템 구축 | 표준 UI 채택 및 디자인 일관성 향상 | Claude Design 기반 사내 표준 UI 기준 수립, 문서 · 디자인 시스템의 일관성과 준수율 향상 |
| 03 | Notion MCP · 문서 작성 파이프라인 구축 | 자연어를 통한 일관된 템플릿 기반 문서 작성 | 문서별 노션 템플릿 정의, 고객사별 히스토리 · 릴리즈 노트 등 자연어로 자동 작성, 작성된 문서 · 보고를 노션 DB에 이력화 |
| 04 | openKB · 문서를 위키로 컴파일하는 NoRAG 챗봇 | 문서 1,252건 지식화 · 재청킹 일치율 98.4% | Qdrant 역추적으로 유실 원본 .md 52개 무손실 복원, LLM 없는 결정론적 전처리 도구 개발, 골든셋 A/B · LLM-as-Judge 평가 |

<br>

## 기술 스택

| 분류 | 사용 기술 |
| --- | --- |
| Language | Java, Kotlin, Python, Shell |
| Backend | Spring Boot, Django, Vue, Tailwind |
| Infra | Docker, Jenkins, RPM, Inno Setup, Apache, AWS, Redis, Qdrant |
| Tool | Claude Code, Claude Design, Notion, Git |

**Certification** · 정보처리기사 · SQLD · AWS Solutions Architect – Associate · 컴퓨터활용능력 1급 · 1종 보통운전면허

**Awards** · KT AIVLE Big Project 우수상 · 순천향대 3분 독후감 스피치 장려상 · 우수 사회복무요원 표창

<br>

## 저장소 구조

```
.
├── index.html              # 슬라이드 마크업 (7장)
├── css/
│   ├── fonts.css           # Pretendard · JetBrains Mono @font-face
│   ├── design-system.css   # 디자인 토큰 · 텍스트 프리미티브 · 모션
│   └── components.css      # 슬라이드별 컴포넌트
├── js/
│   ├── deck-stage.js       # <deck-stage> 웹 컴포넌트 (레일 · 스케일 · 인쇄)
│   └── countup.js          # 수치 카운트업
├── assets/
│   ├── fonts/              # woff2 (Pretendard Variable · JetBrains Mono 6종)
│   ├── profile.jpg         # 프로필 사진
│   └── ...                 # OG 이미지 · 파비콘
├── docs/
│   └── 곽채원 · 포트폴리오.pdf   # PDF 버전
├── robots.txt
└── sitemap.xml
```

빌드 단계나 의존성 설치가 없습니다. 정적 파일을 그대로 서빙하면 됩니다.

<br>

## 로컬에서 보기

웹폰트와 스크립트가 상대 경로로 로드되므로 **로컬 서버가 필요합니다.** `file://`로 직접 열면 폰트가 적용되지 않습니다.

```bash
python -m http.server 8000
# http://localhost:8000
```

<br>

## PDF 내보내기

`docs/` 의 PDF는 브라우저 인쇄로 만듭니다. `deck-stage.js`가 `@page` 크기(1920×1080)와 인쇄용 스타일을 주입하므로 슬라이드 1장이 PDF 1쪽이 됩니다.

반드시 **`http://localhost:8000` 에서 인쇄**하세요. `file://`에서는 웹폰트가 차단되어 시스템 폰트로 출력됩니다.

```
Chrome → 인쇄 → 대상: PDF로 저장 → 여백: 없음 → 배경 그래픽: 켬
```

<br>

## 배포

`main` 브랜치 루트를 GitHub Pages가 그대로 서빙합니다. `index.html`을 수정해 push하면 자동 반영됩니다.

<br>

## 연락처

- 📧 ksh03003@naver.com
- 🐙 [github.com/kwakchaewon](https://github.com/kwakchaewon)
