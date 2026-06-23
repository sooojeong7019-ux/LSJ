# 다운로드 링크 관리

빌드 파일은 웹사이트 폴더에 직접 포함하지 않습니다.

다운로드 버튼은 `assets/js/projects-data.js`의 다음 위치에서 외부 URL로 관리합니다.

```js
projects[].build.downloads[].url
```

권장 외부 저장소:
- Google Drive
- GitHub Releases
- itch.io
- Dropbox
- 별도 파일 서버
