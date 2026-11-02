---
name: export-pdf
description: 포트폴리오(index.html)를 headless Chrome으로 PDF 재추출 (docs/ 갱신)
---
1. 대상: `docs/곽채원 · 포트폴리오.pdf` (기존 파일 덮어쓰기). 슬라이드 1장 = 1쪽 (1920×1080, `deck-stage.js`가 `@page` 주입).
2. 반드시 `http://localhost:8000` 으로 출력 — `file://`은 웹폰트 차단되어 폰트가 깨짐.
3. 서버 기동 (백그라운드): `python -m http.server 8000` (프로젝트 루트). 이미 8000 점유 중이면 재사용.
4. Chrome 경로: `C:\Program Files\Google\Chrome\Application\chrome.exe` (없으면 Edge `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`).
5. 출력은 임시 파일로 먼저 생성 후 검증, 통과하면 `docs/`로 교체:
   ```
   chrome --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=10000 \
     --print-to-pdf="<scratchpad>/out.pdf" http://localhost:8000/
   ```
   - 배경 그래픽은 헤드리스 기본 출력에 포함됨. 애니메이션/웹폰트 로드 대기를 위해 `--virtual-time-budget` 유지.
6. 검증: 파일 크기 > 0, 쪽수 == `index.html`의 `<section>` 슬라이드 수 (`python -m pypdf` 또는 `pdfinfo`로 확인), 첫 쪽 이미지 확인(폰트·배경 정상 여부). 쪽수가 어긋나면(빈 마지막 쪽 등) 덮어쓰지 말고 원인 보고.
7. 서버는 이 스킬에서 띄운 경우에만 종료.
8. 변경된 PDF는 `auto-commit` 스킬로 커밋 (`docs: 포트폴리오 PDF 재추출`). push 금지.
