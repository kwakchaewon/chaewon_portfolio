# 곽채원 · 포트폴리오

> 기록하고 공유하는 개발자 곽채원의 웹 포트폴리오입니다.

**🔗 Live — [kwakchaewon.github.io/chaewon_portfolio](https://kwakchaewon.github.io/chaewon_portfolio/)**

![곽채원 포트폴리오](assets/og-image.png)

<br>

## 수록 내용

### Experience
| 기간 | 소속 | 역할 |
| --- | --- | --- |
| 2024.02 – 현재 | 이든티앤에스 기술연구소 | 백엔드 · 기술 지원 담당 |
| 2023 | KT AIVLE School | 수료 |
| 2019.08 – 2020.08 | 태화이노베이션 SI 3팀 | — |

### Projects
| # | 프로젝트 | 기간 | 요약 |
| --- | --- | --- | --- |
| 01 | 표준 Oracle 환경 대응 리팩토링 | 2024.04 – 2025.11 | MariaDB + MyBatis → JPA + QueryDSL 전환. Oracle 기준 DDL 재설계, 동적 쿼리 표준화, batch flush·clear 메모리 안정화로 DB 교체 시 수정 범위 축소 |
| 02 | 8개 OS 설치 패키지 자동화 | 2025.01 – 2025.03 | Docker 이미지·의존성·설정을 포함한 표준 설치 패키지, Flyway 초기 스키마 · rpmbuild spec Shell 자동화, 설치 실패 케이스 예외 처리 |
| 03 | 행정안전부 기준 보안 취약점 대응 | 2025.08 – 2025.12 | 「주요정보통신기반시설 기술적 취약점 분석·평가 방법(2021)」 기준으로 Web · WAS · DB · OS 4개 계층 점검 및 조치 |

### Side Project
**[QuSign](https://qusign.link)** — 양자 컴퓨터에도 안전한 암호(PQC)로 만든 전자서명 SaaS. AWS 기반 운영형 인프라를 비용·보안·모니터링까지 직접 구성했습니다.

<br>

## 기술 스택

| 분류 | 사용 기술 |
| --- | --- |
| Language | Java, Kotlin, Python, Shell |
| Backend | Spring Boot, Django, Vue |
| Infra | Docker, Jenkins, RPM, Apache, AWS, Redis |
| Tool | Claude Design, Claude Security, Notion, Git |

**Certification** · 정보처리기사 · SQLD · AWS Solutions Architect – Associate · 컴퓨터활용능력 1급

<br>

## 저장소 구조

```
.
├── index.html              # 포트폴리오 단일 페이지 (에셋이 인라인 번들된 빌드 산출물)
├── assets/                 # OG 이미지 · 파비콘
├── docs/
│   └── 곽채원 · 포트폴리오.pdf   # PDF 버전
├── robots.txt
└── sitemap.xml
```

`index.html`은 이미지·폰트가 base64로 포함된 단일 파일 번들입니다. 페이지 로드 시 번들 로더가 에셋을 Blob URL로 풀어 렌더링하므로 별도 빌드나 의존성 설치가 필요 없습니다.

<br>

## 로컬에서 보기

파일을 직접 열어도 되지만, 상대 경로 에셋(파비콘·OG 이미지)까지 확인하려면 로컬 서버를 권장합니다.

```bash
python -m http.server 8000
# http://localhost:8000
```

<br>

## 배포

`main` 브랜치 루트를 GitHub Pages가 그대로 서빙합니다. `index.html`을 수정해 push하면 자동 반영됩니다.

<br>

## 연락처

- 📧 ksh03003@naver.com
- 🐙 [github.com/kwakchaewon](https://github.com/kwakchaewon)
