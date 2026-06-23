# Game Design Portfolio

기존 포트폴리오 외형을 최대한 유지하면서 정적 사이트 배포, SEO, 문서 라이브러리, 영상/빌드 관리 구조를 보강한 버전입니다.

## VS Code에서 실행하는 방법

1. ZIP 파일을 압축 해제합니다.
2. VS Code에서 폴더를 엽니다.
3. `index.html`을 우클릭합니다.
4. `Open with Live Server`를 선택합니다.

`file://`로 직접 열면 PDF 미리보기, YouTube iframe, 일부 fetch 기반 placeholder 검사가 다르게 동작할 수 있습니다.

## Live Server 실행 방법

VS Code 확장 프로그램에서 `Live Server`를 설치한 뒤 `index.html`을 실행하세요.

## 이미지 교체 방법

메인 배경 이미지는 아래 위치에 있습니다.

```text
assets/background/
```

로고는 아래 위치에 있습니다.

```text
assets/logo/
assets/images/icons/
```

Open Graph 이미지는 아래 위치에 있습니다.

```text
assets/images/og/
```

## PDF 문서 추가 및 변경 방법

프로젝트별 PDF는 아래 폴더에 넣습니다.

```text
assets/documents/escape-trauma/
assets/documents/the-stillborn-age/
assets/documents/leonardo-wing/
```

문서 제목, 설명, 파일 경로, 작성일, 버전은 한 곳에서 관리합니다.

```text
assets/js/projects-data.js
```

수정 위치:

```js
window.PORTFOLIO_DATA.projects[].documents
```

실제 PDF 파일이 없어도 사이트는 오류를 내지 않고 placeholder 안내를 표시합니다.

## YouTube 영상 교체 방법

수정 위치:

```text
assets/js/projects-data.js
```

수정 항목:

```js
window.PORTFOLIO_DATA.projects[].video.youtubeId
```

YouTube 전체 URL이 아니라 `embed/` 뒤에 들어가는 Video ID만 넣으면 됩니다.

## 게임 빌드 다운로드 링크 교체 방법

빌드 파일은 웹사이트 폴더에 직접 포함하지 않습니다. 외부 URL만 연결합니다.

수정 위치:

```js
window.PORTFOLIO_DATA.projects[].build.downloads[].url
```

## favicon 교체 방법

아래 파일명을 유지한 채 이미지 파일만 교체하면 됩니다.

```text
favicon.svg
favicon-16x16.png
favicon-32x32.png
apple-touch-icon.png
assets/logo/favicon.png
assets/logo/apple-touch-icon.png
assets/logo/portfolio-logo.png
```

## Open Graph 검색 이미지 교체 방법

아래 파일을 교체합니다.

```text
assets/images/og/portfolio-cover.jpg
assets/images/og/escape-trauma-og.jpg
assets/images/og/the-stillborn-age-og.jpg
assets/images/og/leonardo-wing-og.jpg
```

각 HTML의 meta 태그도 함께 확인하세요.

## GitHub Pages 배포 방법

1. 저장소를 생성합니다.
2. 이 폴더 안의 파일을 저장소 루트에 업로드합니다.
3. GitHub `Settings > Pages`에서 배포 브랜치를 설정합니다.
4. 배포 주소가 나오면 `sitemap.xml`, `robots.txt`, 각 HTML의 `canonical` URL을 실제 주소로 바꿉니다.

## 정적 호스팅 배포 전 체크리스트

- [ ] `assets/js/projects-data.js`의 프로젝트 설명 확인
- [ ] YouTube Video ID 교체
- [ ] PDF 파일 경로 확인
- [ ] 외부 빌드 다운로드 URL 교체
- [ ] favicon 확인
- [ ] Open Graph 이미지 확인
- [ ] `sitemap.xml` URL 수정
- [ ] `robots.txt` Sitemap URL 수정
- [ ] 모바일 화면 확인
- [ ] 키보드 Tab 이동 확인
- [ ] PDF 미리보기 모달 확인
- [ ] Live Server에서 YouTube iframe 확인

## 주요 수정 파일

```text
assets/js/projects-data.js
assets/js/detail.js
assets/js/main.js
assets/css/style.css
```


## PDF 카드 표시 정보

현재 문서 카드 화면에는 `작성일`만 표시됩니다.  
`버전`, `파일 경로`는 화면에 노출하지 않지만, 유지보수를 위해 아래 파일에는 그대로 남겨두었습니다.

```text
assets/js/projects-data.js
```

필요하면 `assets/js/detail.js`의 `renderDocuments()` 함수에서 다시 표시할 수 있습니다.


## 링크 공유 미리보기 이미지 설정

카카오톡, 디스코드, 페이스북, X 같은 공유 미리보기는 화면을 실시간 캡처하지 않고 HTML의 Open Graph 태그를 읽습니다.

현재 대표 이미지는 아래 파일입니다.

```text
assets/images/og/portfolio-home-preview.jpg
```

현재 메타 태그는 실제 배포 주소 기준으로 설정되어 있습니다.

```text
https://zettstudio.netlify.app/assets/images/og/portfolio-home-preview.jpg
```

배포 주소가 바뀌면 각 HTML 파일의 `og:image`, `twitter:image`, `canonical`, `og:url` 값을 실제 주소로 교체해야 합니다.

이미지를 바꿔도 바로 안 보이면 플랫폼 캐시 때문일 수 있습니다. 이 경우 파일명을 바꾸거나, 배포 후 공유 플랫폼의 캐시 갱신 도구를 사용하세요.


## 현재 공유 대표 이미지

공유 대표 이미지는 별도 디자인 카드가 아니라, 메인 상단 배경 영상에서 추출한 정지 프레임입니다.

```text
assets/images/og/portfolio-home-preview.jpg
```

메인 배경 영상을 바꾼 뒤 공유 대표 이미지도 맞추려면, 새 영상에서 프레임을 다시 추출해서 위 파일명으로 교체하면 됩니다.


## PDF 카드 번호 표시

문서 카드 상단에는 `01`, `02`, `03`처럼 번호만 표시합니다.  
`/ PDF` 표기는 제거했습니다.

수정 위치:

```text
assets/js/detail.js
```


## PDF 카드 번호 표시 캐시 대응

문서 카드 상단은 `01`, `02`, `03`처럼 번호만 표시합니다.  
브라우저나 Netlify가 이전 `detail.js`를 캐시해서 `01 / PDF`가 계속 보일 수 있어, 상세 페이지의 script 경로에 버전 쿼리를 붙였습니다.

```html
<script src="./assets/js/detail.js?v=pdf-number-only-20260624"></script>
```

배포 후에도 이전 표시가 보이면 브라우저 강력 새로고침을 하거나 Netlify 캐시 삭제 후 다시 배포하세요.


## 프로젝트 구분

현재 포트폴리오의 프로젝트 구분은 아래 기준으로 정리되어 있습니다.

```text
Escape:Trauma → Team Project / Escape Horror
The Stillborn Age → Personal Project / Turn-Based JRPG
레오나르의 날개 → Team Project / Steampunk RPG
```

레오나르의 날개는 개인 프로젝트가 아니라 팀 프로젝트이므로 `projects-data.js`와 `leonardo-wing.html`의 표기를 `Team Project`로 통일했습니다.


## 검색/공유 제목 설정

메인 페이지의 검색/공유 제목은 아래 형식으로 설정되어 있습니다.

```text
Game Design Portfolio | 이수정
```

수정 위치:

```text
index.html
```

수정해야 하는 태그:

```html
<title>Game Design Portfolio | 이수정</title>
<meta property="og:title" content="Game Design Portfolio | 이수정">
<meta name="twitter:title" content="Game Design Portfolio | 이수정">
```


## Netlify 기존 주소 기준 SEO 설정

현재 SEO / 공유 미리보기 주소는 아래 기존 Netlify 주소 기준으로 통일되어 있습니다.

```text
https://soojeong01.netlify.app
```

메인 공유 제목:

```text
Game Design Portfolio | 이수정
```

대표 이미지:

```text
https://soojeong01.netlify.app/assets/images/og/portfolio-home-preview.jpg
```

`zettstudio.netlify.app`로 남아 있던 canonical, og:url, og:image, twitter:image는 전부 `soojeong01.netlify.app` 기준으로 수정했습니다.


## 최종 링크 미리보기 설정

최종 공유 링크 기준 주소:

```text
https://soojeong01.netlify.app
```

공유 제목:

```text
Game Design Portfolio | 이수정
```

공유 설명:

```text
게임 기획 포트폴리오 - 프로젝트, 기획 문서, 프로토타입 영상
```

공유 이미지:

```text
https://soojeong01.netlify.app/assets/images/og/portfolio-home-preview.jpg
```

`index.html`에서 `zettstudio.netlify.app`, `loquacious-frangipane-3e9b5c.netlify.app`로 남아 있던 주소를 전부 `soojeong01.netlify.app` 기준으로 통일했습니다.

배포 전 VS Code 전체 검색에서 아래 값이 남아 있으면 안 됩니다.

```text
zettstudio
loquacious-frangipane
Game Design Portfolio | 게임기획자 포트폴리오
```
