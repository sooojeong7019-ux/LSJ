/* projects-data.js
   폴더 기반 문서 라이브러리 데이터입니다.
   - 각 프로젝트의 9개 파트별 폴더를 기준으로 파일 목록을 관리합니다.
   - 빈 폴더는 공통 Coming Soon PDF로 연결합니다.
   - 여러 파일이 있으면 파일명 앞 번호 기준으로 정렬하고, 1번 파일을 대표 미리보기로 사용합니다.
   - 단일 파일은 그대로 대표 파일로 사용합니다.
   - PDF / SVG / PNG / JPG / WEBP / TXT / MD / XLSX / DOCX / PPTX 파일을 목록에 등록합니다.
*/
window.PORTFOLIO_DATA = {
  "site": {
    "name": "Game Design Portfolio | 이수정",
    "description": "게임 기획 포트폴리오 - 프로젝트, 기획 문서, 프로토타입 영상",
    "url": "https://soojeong01.netlify.app",
    "email": "your-email@example.com",
    "keywords": "게임 기획 포트폴리오, 게임기획자 취업, Unreal Engine, 레벨디자인, 게임시스템기획, 오픈월드 RPG, 뱀서라이크, 메트로바니아",
    "socials": [
      {
        "label": "GitHub",
        "url": "https://github.com/your-id"
      },
      {
        "label": "Notion",
        "url": "https://notion.so/your-page"
      }
    ]
  },
  "common": {
    "comingSoonPdf": "./assets/pdf/_common/coming-soon.pdf",
    "comingSoonBackground": "./assets/images/placeholders/gdd-coming-soon-bg.png"
  },
  "projects": [
    {
      "id": "escape-trauma",
      "title": "Escape:Trauma",
      "type": "Personal Project",
      "description": "Escape:Trauma 프로젝트의 기획 문서를 확인하는 페이지입니다.",
      "page": "escape-trauma.html",
      "video": {
        "youtubeId": "2jlXA7jPefU",
        "embedUrl": "https://www.youtube.com/embed/2jlXA7jPefU",
        "title": "Escape:Trauma Prototype Video",
        "description": "Escape:Trauma 프로젝트의 프로토타입 또는 플레이 영상을 확인하는 영역입니다.",
        "thumbnail": "./assets/images/og/portfolio-home-preview.jpg"
      },
      "simulator": {
        "title": "게임 시뮬레이터",
        "name": "시뮬레이터 플레이",
        "description": "Escape:Trauma 시뮬레이터 플레이 화면을 실행합니다.",
        "url": "./simulators/escape-trauma.html",
        "playLabel": "실행"
      },
      "documentGroups": [
        {
          "no": "01",
          "id": "proposal",
          "title": "개발제안서",
          "folderName": "개발제안서",
          "folderAliases": [
            "개발제안서",
            "proposal"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "02",
          "id": "scenario",
          "title": "게임스토리&게임시나리오",
          "folderName": "게임스토리&시나리오",
          "folderAliases": [
            "게임스토리&시나리오",
            "게임스토리&게임시나리오",
            "시나리오",
            "scenario"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "03",
          "id": "character",
          "title": "캐릭터컨셉기획서",
          "folderName": "캐릭터컨셉기획서",
          "folderAliases": [
            "캐릭터컨셉기획서",
            "캐릭터컨셉",
            "character"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "04",
          "id": "background",
          "title": "배경컨셉기획서",
          "folderName": "배경컨셉기획서",
          "folderAliases": [
            "배경컨셉기획서",
            "배경컨셉",
            "background"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "05",
          "id": "mechanics",
          "title": "게임메카닉스기획서",
          "folderName": "게임메카닉스기획서",
          "folderAliases": [
            "게임메카닉스기획서",
            "게임메카닉스",
            "mechanics"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "06",
          "id": "contents-system",
          "title": "게임콘텐츠시스템기획서",
          "folderName": "게임콘텐츠시스템기획서",
          "folderAliases": [
            "게임콘텐츠시스템기획서",
            "콘텐츠시스템기획서",
            "콘텐츠시스템",
            "contents-system"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "07",
          "id": "level-design",
          "title": "레벨디자인기획서",
          "folderName": "레벨디자인기획서",
          "folderAliases": [
            "레벨디자인기획서",
            "레벨기획서",
            "레벨디자인",
            "level-design"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "08",
          "id": "ui-design",
          "title": "게임UI디자인기획서",
          "folderName": "게임UI디자인기획서",
          "folderAliases": [
            "게임UI디자인기획서",
            "게임UI기획서",
            "UI디자인기획서",
            "UI기획서",
            "ui-design"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "09",
          "id": "service-plan",
          "title": "게임서비스기획서",
          "folderName": "게임서비스기획서",
          "folderAliases": [
            "게임서비스기획서",
            "서비스기획서",
            "service-plan"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        }
      ],
      "documents": [
        {
          "no": "01",
          "id": "proposal",
          "title": "개발제안서",
          "folderName": "개발제안서",
          "folderAliases": [
            "개발제안서",
            "proposal"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "02",
          "id": "scenario",
          "title": "게임스토리&게임시나리오",
          "folderName": "게임스토리&시나리오",
          "folderAliases": [
            "게임스토리&시나리오",
            "게임스토리&게임시나리오",
            "시나리오",
            "scenario"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "03",
          "id": "character",
          "title": "캐릭터컨셉기획서",
          "folderName": "캐릭터컨셉기획서",
          "folderAliases": [
            "캐릭터컨셉기획서",
            "캐릭터컨셉",
            "character"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "04",
          "id": "background",
          "title": "배경컨셉기획서",
          "folderName": "배경컨셉기획서",
          "folderAliases": [
            "배경컨셉기획서",
            "배경컨셉",
            "background"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "05",
          "id": "mechanics",
          "title": "게임메카닉스기획서",
          "folderName": "게임메카닉스기획서",
          "folderAliases": [
            "게임메카닉스기획서",
            "게임메카닉스",
            "mechanics"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "06",
          "id": "contents-system",
          "title": "게임콘텐츠시스템기획서",
          "folderName": "게임콘텐츠시스템기획서",
          "folderAliases": [
            "게임콘텐츠시스템기획서",
            "콘텐츠시스템기획서",
            "콘텐츠시스템",
            "contents-system"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "07",
          "id": "level-design",
          "title": "레벨디자인기획서",
          "folderName": "레벨디자인기획서",
          "folderAliases": [
            "레벨디자인기획서",
            "레벨기획서",
            "레벨디자인",
            "level-design"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "08",
          "id": "ui-design",
          "title": "게임UI디자인기획서",
          "folderName": "게임UI디자인기획서",
          "folderAliases": [
            "게임UI디자인기획서",
            "게임UI기획서",
            "UI디자인기획서",
            "UI기획서",
            "ui-design"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "09",
          "id": "service-plan",
          "title": "게임서비스기획서",
          "folderName": "게임서비스기획서",
          "folderAliases": [
            "게임서비스기획서",
            "서비스기획서",
            "service-plan"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        }
      ],
      "seo": {
        "title": "Escape:Trauma | Game Design Portfolio | 이수정",
        "description": "Escape:Trauma 프로젝트의 기획 문서를 확인하는 페이지입니다.",
        "ogImage": "./assets/images/og/portfolio-home-preview.jpg"
      }
    },
    {
      "id": "the-stillborn-age",
      "title": "The Stillborn Age",
      "type": "Personal Project",
      "description": "The Stillborn Age 프로젝트의 기획 문서를 확인하는 페이지입니다.",
      "page": "the-stillborn-age.html",
      "video": {
        "youtubeId": "2VaLOc1FpSo",
        "embedUrl": "https://www.youtube.com/embed/2VaLOc1FpSo?si=0d4sLAy0NElpSS_D",
        "title": "The Stillborn Age Prototype Video",
        "description": "The Stillborn Age 프로젝트의 프로토타입 또는 플레이 영상을 확인하는 영역입니다.",
        "thumbnail": "./assets/images/og/portfolio-home-preview.jpg"
      },
      "simulator": {
        "title": "게임 시뮬레이터",
        "name": "시뮬레이터 플레이",
        "description": "The Stillborn Age 웹 시뮬레이터를 새 창에서 실행합니다.",
        "url": "https://stillbornage001.netlify.app/",
        "playLabel": "실행"
      },
      "documentGroups": [
        {
          "no": "01",
          "id": "proposal",
          "title": "개발제안서",
          "folderName": "개발제안서",
          "folderAliases": [
            "개발제안서",
            "proposal"
          ],
          "sourceFolders": [
            "./assets/pdf/the-stillborn-age/개발제안서"
          ],
          "status": "available",
          "primaryFile": {
            "title": "The Stillborn Age 개발제안서",
            "fileName": "1.The Stillborn Age 개발제안서.pdf",
            "path": "./assets/pdf/the-stillborn-age/개발제안서/1.The Stillborn Age 개발제안서.pdf",
            "type": "pdf",
            "isPrimary": true
          },
          "files": [
            {
              "title": "The Stillborn Age 개발제안서",
              "fileName": "1.The Stillborn Age 개발제안서.pdf",
              "path": "./assets/pdf/the-stillborn-age/개발제안서/1.The Stillborn Age 개발제안서.pdf",
              "type": "pdf",
              "isPrimary": true
            },
            {
              "title": "The Stillborn Age 게임 소개",
              "fileName": "2.The Stillborn Age 게임 소개.pdf",
              "path": "./assets/pdf/the-stillborn-age/개발제안서/2.The Stillborn Age 게임 소개.pdf",
              "type": "pdf",
              "isPrimary": false
            },
            {
              "title": "원페이지 기획서",
              "fileName": "3.원페이지 기획서.svg",
              "path": "./assets/pdf/the-stillborn-age/개발제안서/3.원페이지 기획서.svg",
              "type": "svg",
              "isPrimary": false
            }
          ],
          "fileCount": 3
        },
        {
          "no": "02",
          "id": "scenario",
          "title": "게임스토리&게임시나리오",
          "folderName": "게임스토리&시나리오",
          "folderAliases": [
            "게임스토리&시나리오",
            "게임스토리&게임시나리오",
            "시나리오",
            "scenario"
          ],
          "sourceFolders": [
            "./assets/pdf/the-stillborn-age/게임스토리&시나리오"
          ],
          "status": "available",
          "primaryFile": {
            "title": "TSA_메인스토리",
            "fileName": "1.TSA_메인스토리.pdf",
            "path": "./assets/pdf/the-stillborn-age/게임스토리&시나리오/1.TSA_메인스토리.pdf",
            "type": "pdf",
            "isPrimary": true
          },
          "files": [
            {
              "title": "TSA_메인스토리",
              "fileName": "1.TSA_메인스토리.pdf",
              "path": "./assets/pdf/the-stillborn-age/게임스토리&시나리오/1.TSA_메인스토리.pdf",
              "type": "pdf",
              "isPrimary": true
            },
            {
              "title": "TSA_Final_Scenario",
              "fileName": "2.TSA_Final_Scenario.pdf",
              "path": "./assets/pdf/the-stillborn-age/게임스토리&시나리오/2.TSA_Final_Scenario.pdf",
              "type": "pdf",
              "isPrimary": false
            }
          ],
          "fileCount": 2
        },
        {
          "no": "03",
          "id": "character",
          "title": "캐릭터컨셉기획서",
          "folderName": "캐릭터컨셉기획서",
          "folderAliases": [
            "캐릭터컨셉기획서",
            "캐릭터컨셉",
            "character"
          ],
          "sourceFolders": [
            "./assets/pdf/the-stillborn-age/캐릭터컨셉기획서"
          ],
          "status": "available",
          "primaryFile": {
            "title": "TSA_캐릭터컨셉",
            "fileName": "TSA_캐릭터컨셉.pdf",
            "path": "./assets/pdf/the-stillborn-age/캐릭터컨셉기획서/TSA_캐릭터컨셉.pdf",
            "type": "pdf",
            "isPrimary": true
          },
          "files": [
            {
              "title": "TSA_캐릭터컨셉",
              "fileName": "TSA_캐릭터컨셉.pdf",
              "path": "./assets/pdf/the-stillborn-age/캐릭터컨셉기획서/TSA_캐릭터컨셉.pdf",
              "type": "pdf",
              "isPrimary": true
            }
          ],
          "fileCount": 1
        },
        {
          "no": "04",
          "id": "background",
          "title": "배경컨셉기획서",
          "folderName": "배경컨셉기획서",
          "folderAliases": [
            "배경컨셉기획서",
            "배경컨셉",
            "background"
          ],
          "sourceFolders": [
            "./assets/pdf/the-stillborn-age/배경컨셉기획서"
          ],
          "status": "available",
          "primaryFile": {
            "title": "TSA_배경컨셉",
            "fileName": "TSA_배경컨셉.pdf",
            "path": "./assets/pdf/the-stillborn-age/배경컨셉기획서/TSA_배경컨셉.pdf",
            "type": "pdf",
            "isPrimary": true
          },
          "files": [
            {
              "title": "TSA_배경컨셉",
              "fileName": "TSA_배경컨셉.pdf",
              "path": "./assets/pdf/the-stillborn-age/배경컨셉기획서/TSA_배경컨셉.pdf",
              "type": "pdf",
              "isPrimary": true
            }
          ],
          "fileCount": 1
        },
        {
          "no": "05",
          "id": "mechanics",
          "title": "게임메카닉스기획서",
          "folderName": "게임메카닉스기획서",
          "folderAliases": [
            "게임메카닉스기획서",
            "게임메카닉스",
            "mechanics"
          ],
          "sourceFolders": [
            "./assets/pdf/the-stillborn-age/게임메카닉스기획서"
          ],
          "status": "available",
          "primaryFile": {
            "title": "TSA_01_Game_Mechanics",
            "fileName": "TSA_01_Game_Mechanics.pdf",
            "path": "./assets/pdf/the-stillborn-age/게임메카닉스기획서/TSA_01_Game_Mechanics.pdf",
            "type": "pdf",
            "isPrimary": true
          },
          "files": [
            {
              "title": "TSA_01_Game_Mechanics",
              "fileName": "TSA_01_Game_Mechanics.pdf",
              "path": "./assets/pdf/the-stillborn-age/게임메카닉스기획서/TSA_01_Game_Mechanics.pdf",
              "type": "pdf",
              "isPrimary": true
            }
          ],
          "fileCount": 1
        },
        {
          "no": "06",
          "id": "contents-system",
          "title": "게임콘텐츠시스템기획서",
          "folderName": "게임콘텐츠시스템기획서",
          "folderAliases": [
            "게임콘텐츠시스템기획서",
            "콘텐츠시스템기획서",
            "콘텐츠시스템",
            "contents-system"
          ],
          "sourceFolders": [
            "./assets/pdf/the-stillborn-age/게임콘텐츠시스템기획서"
          ],
          "status": "available",
          "primaryFile": {
            "title": "콘텐츠맵2",
            "fileName": "콘텐츠맵2.svg",
            "path": "./assets/pdf/the-stillborn-age/게임콘텐츠시스템기획서/콘텐츠맵2.svg",
            "type": "svg",
            "isPrimary": true
          },
          "files": [
            {
              "title": "콘텐츠맵2",
              "fileName": "콘텐츠맵2.svg",
              "path": "./assets/pdf/the-stillborn-age/게임콘텐츠시스템기획서/콘텐츠맵2.svg",
              "type": "svg",
              "isPrimary": true
            }
          ],
          "fileCount": 1
        },
        {
          "no": "07",
          "id": "level-design",
          "title": "레벨디자인기획서",
          "folderName": "레벨디자인기획서",
          "folderAliases": [
            "레벨디자인기획서",
            "레벨기획서",
            "레벨디자인",
            "level-design"
          ],
          "sourceFolders": [
            "./assets/pdf/the-stillborn-age/레벨기획서"
          ],
          "status": "available",
          "primaryFile": {
            "title": "TSA_01_레벨_컨셉_문서",
            "fileName": "1.TSA_01_레벨_컨셉_문서.pdf",
            "path": "./assets/pdf/the-stillborn-age/레벨기획서/1.TSA_01_레벨_컨셉_문서.pdf",
            "type": "pdf",
            "isPrimary": true
          },
          "files": [
            {
              "title": "TSA_01_레벨_컨셉_문서",
              "fileName": "1.TSA_01_레벨_컨셉_문서.pdf",
              "path": "./assets/pdf/the-stillborn-age/레벨기획서/1.TSA_01_레벨_컨셉_문서.pdf",
              "type": "pdf",
              "isPrimary": true
            },
            {
              "title": "TSA_전체_레벨_레이아웃",
              "fileName": "2.TSA_전체_레벨_레이아웃.xlsx",
              "path": "./assets/pdf/the-stillborn-age/레벨기획서/2.TSA_전체_레벨_레이아웃.xlsx",
              "type": "spreadsheet",
              "isPrimary": false
            }
          ],
          "fileCount": 2
        },
        {
          "no": "08",
          "id": "ui-design",
          "title": "게임UI디자인기획서",
          "folderName": "게임UI디자인기획서",
          "folderAliases": [
            "게임UI디자인기획서",
            "게임UI기획서",
            "UI디자인기획서",
            "UI기획서",
            "ui-design"
          ],
          "sourceFolders": [
            "./assets/pdf/the-stillborn-age/게임UI기획서"
          ],
          "status": "available",
          "primaryFile": {
            "title": "TSA_UI기획",
            "fileName": "TSA_UI기획.pdf",
            "path": "./assets/pdf/the-stillborn-age/게임UI기획서/TSA_UI기획.pdf",
            "type": "pdf",
            "isPrimary": true
          },
          "files": [
            {
              "title": "TSA_UI기획",
              "fileName": "TSA_UI기획.pdf",
              "path": "./assets/pdf/the-stillborn-age/게임UI기획서/TSA_UI기획.pdf",
              "type": "pdf",
              "isPrimary": true
            }
          ],
          "fileCount": 1
        },
        {
          "no": "09",
          "id": "service-plan",
          "title": "게임서비스기획서",
          "folderName": "게임서비스기획서",
          "folderAliases": [
            "게임서비스기획서",
            "서비스기획서",
            "service-plan"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        }
      ],
      "documents": [
        {
          "no": "01",
          "id": "proposal",
          "title": "개발제안서",
          "folderName": "개발제안서",
          "folderAliases": [
            "개발제안서",
            "proposal"
          ],
          "sourceFolders": [
            "./assets/pdf/the-stillborn-age/개발제안서"
          ],
          "status": "available",
          "primaryFile": {
            "title": "The Stillborn Age 개발제안서",
            "fileName": "1.The Stillborn Age 개발제안서.pdf",
            "path": "./assets/pdf/the-stillborn-age/개발제안서/1.The Stillborn Age 개발제안서.pdf",
            "type": "pdf",
            "isPrimary": true
          },
          "files": [
            {
              "title": "The Stillborn Age 개발제안서",
              "fileName": "1.The Stillborn Age 개발제안서.pdf",
              "path": "./assets/pdf/the-stillborn-age/개발제안서/1.The Stillborn Age 개발제안서.pdf",
              "type": "pdf",
              "isPrimary": true
            },
            {
              "title": "The Stillborn Age 게임 소개",
              "fileName": "2.The Stillborn Age 게임 소개.pdf",
              "path": "./assets/pdf/the-stillborn-age/개발제안서/2.The Stillborn Age 게임 소개.pdf",
              "type": "pdf",
              "isPrimary": false
            },
            {
              "title": "원페이지 기획서",
              "fileName": "3.원페이지 기획서.svg",
              "path": "./assets/pdf/the-stillborn-age/개발제안서/3.원페이지 기획서.svg",
              "type": "svg",
              "isPrimary": false
            }
          ],
          "fileCount": 3
        },
        {
          "no": "02",
          "id": "scenario",
          "title": "게임스토리&게임시나리오",
          "folderName": "게임스토리&시나리오",
          "folderAliases": [
            "게임스토리&시나리오",
            "게임스토리&게임시나리오",
            "시나리오",
            "scenario"
          ],
          "sourceFolders": [
            "./assets/pdf/the-stillborn-age/게임스토리&시나리오"
          ],
          "status": "available",
          "primaryFile": {
            "title": "TSA_메인스토리",
            "fileName": "1.TSA_메인스토리.pdf",
            "path": "./assets/pdf/the-stillborn-age/게임스토리&시나리오/1.TSA_메인스토리.pdf",
            "type": "pdf",
            "isPrimary": true
          },
          "files": [
            {
              "title": "TSA_메인스토리",
              "fileName": "1.TSA_메인스토리.pdf",
              "path": "./assets/pdf/the-stillborn-age/게임스토리&시나리오/1.TSA_메인스토리.pdf",
              "type": "pdf",
              "isPrimary": true
            },
            {
              "title": "TSA_Final_Scenario",
              "fileName": "2.TSA_Final_Scenario.pdf",
              "path": "./assets/pdf/the-stillborn-age/게임스토리&시나리오/2.TSA_Final_Scenario.pdf",
              "type": "pdf",
              "isPrimary": false
            }
          ],
          "fileCount": 2
        },
        {
          "no": "03",
          "id": "character",
          "title": "캐릭터컨셉기획서",
          "folderName": "캐릭터컨셉기획서",
          "folderAliases": [
            "캐릭터컨셉기획서",
            "캐릭터컨셉",
            "character"
          ],
          "sourceFolders": [
            "./assets/pdf/the-stillborn-age/캐릭터컨셉기획서"
          ],
          "status": "available",
          "primaryFile": {
            "title": "TSA_캐릭터컨셉",
            "fileName": "TSA_캐릭터컨셉.pdf",
            "path": "./assets/pdf/the-stillborn-age/캐릭터컨셉기획서/TSA_캐릭터컨셉.pdf",
            "type": "pdf",
            "isPrimary": true
          },
          "files": [
            {
              "title": "TSA_캐릭터컨셉",
              "fileName": "TSA_캐릭터컨셉.pdf",
              "path": "./assets/pdf/the-stillborn-age/캐릭터컨셉기획서/TSA_캐릭터컨셉.pdf",
              "type": "pdf",
              "isPrimary": true
            }
          ],
          "fileCount": 1
        },
        {
          "no": "04",
          "id": "background",
          "title": "배경컨셉기획서",
          "folderName": "배경컨셉기획서",
          "folderAliases": [
            "배경컨셉기획서",
            "배경컨셉",
            "background"
          ],
          "sourceFolders": [
            "./assets/pdf/the-stillborn-age/배경컨셉기획서"
          ],
          "status": "available",
          "primaryFile": {
            "title": "TSA_배경컨셉",
            "fileName": "TSA_배경컨셉.pdf",
            "path": "./assets/pdf/the-stillborn-age/배경컨셉기획서/TSA_배경컨셉.pdf",
            "type": "pdf",
            "isPrimary": true
          },
          "files": [
            {
              "title": "TSA_배경컨셉",
              "fileName": "TSA_배경컨셉.pdf",
              "path": "./assets/pdf/the-stillborn-age/배경컨셉기획서/TSA_배경컨셉.pdf",
              "type": "pdf",
              "isPrimary": true
            }
          ],
          "fileCount": 1
        },
        {
          "no": "05",
          "id": "mechanics",
          "title": "게임메카닉스기획서",
          "folderName": "게임메카닉스기획서",
          "folderAliases": [
            "게임메카닉스기획서",
            "게임메카닉스",
            "mechanics"
          ],
          "sourceFolders": [
            "./assets/pdf/the-stillborn-age/게임메카닉스기획서"
          ],
          "status": "available",
          "primaryFile": {
            "title": "TSA_01_Game_Mechanics",
            "fileName": "TSA_01_Game_Mechanics.pdf",
            "path": "./assets/pdf/the-stillborn-age/게임메카닉스기획서/TSA_01_Game_Mechanics.pdf",
            "type": "pdf",
            "isPrimary": true
          },
          "files": [
            {
              "title": "TSA_01_Game_Mechanics",
              "fileName": "TSA_01_Game_Mechanics.pdf",
              "path": "./assets/pdf/the-stillborn-age/게임메카닉스기획서/TSA_01_Game_Mechanics.pdf",
              "type": "pdf",
              "isPrimary": true
            }
          ],
          "fileCount": 1
        },
        {
          "no": "06",
          "id": "contents-system",
          "title": "게임콘텐츠시스템기획서",
          "folderName": "게임콘텐츠시스템기획서",
          "folderAliases": [
            "게임콘텐츠시스템기획서",
            "콘텐츠시스템기획서",
            "콘텐츠시스템",
            "contents-system"
          ],
          "sourceFolders": [
            "./assets/pdf/the-stillborn-age/게임콘텐츠시스템기획서"
          ],
          "status": "available",
          "primaryFile": {
            "title": "콘텐츠맵2",
            "fileName": "콘텐츠맵2.svg",
            "path": "./assets/pdf/the-stillborn-age/게임콘텐츠시스템기획서/콘텐츠맵2.svg",
            "type": "svg",
            "isPrimary": true
          },
          "files": [
            {
              "title": "콘텐츠맵2",
              "fileName": "콘텐츠맵2.svg",
              "path": "./assets/pdf/the-stillborn-age/게임콘텐츠시스템기획서/콘텐츠맵2.svg",
              "type": "svg",
              "isPrimary": true
            }
          ],
          "fileCount": 1
        },
        {
          "no": "07",
          "id": "level-design",
          "title": "레벨디자인기획서",
          "folderName": "레벨디자인기획서",
          "folderAliases": [
            "레벨디자인기획서",
            "레벨기획서",
            "레벨디자인",
            "level-design"
          ],
          "sourceFolders": [
            "./assets/pdf/the-stillborn-age/레벨기획서"
          ],
          "status": "available",
          "primaryFile": {
            "title": "TSA_01_레벨_컨셉_문서",
            "fileName": "1.TSA_01_레벨_컨셉_문서.pdf",
            "path": "./assets/pdf/the-stillborn-age/레벨기획서/1.TSA_01_레벨_컨셉_문서.pdf",
            "type": "pdf",
            "isPrimary": true
          },
          "files": [
            {
              "title": "TSA_01_레벨_컨셉_문서",
              "fileName": "1.TSA_01_레벨_컨셉_문서.pdf",
              "path": "./assets/pdf/the-stillborn-age/레벨기획서/1.TSA_01_레벨_컨셉_문서.pdf",
              "type": "pdf",
              "isPrimary": true
            },
            {
              "title": "TSA_전체_레벨_레이아웃",
              "fileName": "2.TSA_전체_레벨_레이아웃.xlsx",
              "path": "./assets/pdf/the-stillborn-age/레벨기획서/2.TSA_전체_레벨_레이아웃.xlsx",
              "type": "spreadsheet",
              "isPrimary": false
            }
          ],
          "fileCount": 2
        },
        {
          "no": "08",
          "id": "ui-design",
          "title": "게임UI디자인기획서",
          "folderName": "게임UI디자인기획서",
          "folderAliases": [
            "게임UI디자인기획서",
            "게임UI기획서",
            "UI디자인기획서",
            "UI기획서",
            "ui-design"
          ],
          "sourceFolders": [
            "./assets/pdf/the-stillborn-age/게임UI기획서"
          ],
          "status": "available",
          "primaryFile": {
            "title": "TSA_UI기획",
            "fileName": "TSA_UI기획.pdf",
            "path": "./assets/pdf/the-stillborn-age/게임UI기획서/TSA_UI기획.pdf",
            "type": "pdf",
            "isPrimary": true
          },
          "files": [
            {
              "title": "TSA_UI기획",
              "fileName": "TSA_UI기획.pdf",
              "path": "./assets/pdf/the-stillborn-age/게임UI기획서/TSA_UI기획.pdf",
              "type": "pdf",
              "isPrimary": true
            }
          ],
          "fileCount": 1
        },
        {
          "no": "09",
          "id": "service-plan",
          "title": "게임서비스기획서",
          "folderName": "게임서비스기획서",
          "folderAliases": [
            "게임서비스기획서",
            "서비스기획서",
            "service-plan"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        }
      ],
      "seo": {
        "title": "The Stillborn Age | Game Design Portfolio | 이수정",
        "description": "The Stillborn Age 프로젝트의 기획 문서를 확인하는 페이지입니다.",
        "ogImage": "./assets/images/og/portfolio-home-preview.jpg"
      }
    },
    {
      "id": "leonardo-wing",
      "title": "레오나르의 날개",
      "type": "Team Project",
      "description": "레오나르의 날개 프로젝트의 기획 문서를 확인하는 페이지입니다.",
      "page": "leonardo-wing.html",
      "video": {
        "youtubeId": "ZisnmAELEPM",
        "embedUrl": "https://www.youtube.com/embed/ZisnmAELEPM?si=kl0g3IbHEqmZQgLb",
        "title": "레오나르의 날개 Prototype Video",
        "description": "레오나르의 날개 프로젝트의 프로토타입 또는 플레이 영상을 확인하는 영역입니다.",
        "thumbnail": "./assets/images/og/portfolio-home-preview.jpg"
      },
      "simulator": {
        "title": "게임 시뮬레이터",
        "name": "시뮬레이터 플레이",
        "description": "레오나르의 날개 시뮬레이터 플레이 화면을 실행합니다.",
        "url": "./simulators/leonardo-wing.html",
        "playLabel": "실행"
      },
      "documentGroups": [
        {
          "no": "01",
          "id": "proposal",
          "title": "개발제안서",
          "folderName": "개발제안서",
          "folderAliases": [
            "개발제안서",
            "proposal"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "02",
          "id": "scenario",
          "title": "게임스토리&게임시나리오",
          "folderName": "게임스토리&시나리오",
          "folderAliases": [
            "게임스토리&시나리오",
            "게임스토리&게임시나리오",
            "시나리오",
            "scenario"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "03",
          "id": "character",
          "title": "캐릭터컨셉기획서",
          "folderName": "캐릭터컨셉기획서",
          "folderAliases": [
            "캐릭터컨셉기획서",
            "캐릭터컨셉",
            "character"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "04",
          "id": "background",
          "title": "배경컨셉기획서",
          "folderName": "배경컨셉기획서",
          "folderAliases": [
            "배경컨셉기획서",
            "배경컨셉",
            "background"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "05",
          "id": "mechanics",
          "title": "게임메카닉스기획서",
          "folderName": "게임메카닉스기획서",
          "folderAliases": [
            "게임메카닉스기획서",
            "게임메카닉스",
            "mechanics"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "06",
          "id": "contents-system",
          "title": "게임콘텐츠시스템기획서",
          "folderName": "게임콘텐츠시스템기획서",
          "folderAliases": [
            "게임콘텐츠시스템기획서",
            "콘텐츠시스템기획서",
            "콘텐츠시스템",
            "contents-system"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "07",
          "id": "level-design",
          "title": "레벨디자인기획서",
          "folderName": "레벨디자인기획서",
          "folderAliases": [
            "레벨디자인기획서",
            "레벨기획서",
            "레벨디자인",
            "level-design"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "08",
          "id": "ui-design",
          "title": "게임UI디자인기획서",
          "folderName": "게임UI디자인기획서",
          "folderAliases": [
            "게임UI디자인기획서",
            "게임UI기획서",
            "UI디자인기획서",
            "UI기획서",
            "ui-design"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "09",
          "id": "service-plan",
          "title": "게임서비스기획서",
          "folderName": "게임서비스기획서",
          "folderAliases": [
            "게임서비스기획서",
            "서비스기획서",
            "service-plan"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        }
      ],
      "documents": [
        {
          "no": "01",
          "id": "proposal",
          "title": "개발제안서",
          "folderName": "개발제안서",
          "folderAliases": [
            "개발제안서",
            "proposal"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "02",
          "id": "scenario",
          "title": "게임스토리&게임시나리오",
          "folderName": "게임스토리&시나리오",
          "folderAliases": [
            "게임스토리&시나리오",
            "게임스토리&게임시나리오",
            "시나리오",
            "scenario"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "03",
          "id": "character",
          "title": "캐릭터컨셉기획서",
          "folderName": "캐릭터컨셉기획서",
          "folderAliases": [
            "캐릭터컨셉기획서",
            "캐릭터컨셉",
            "character"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "04",
          "id": "background",
          "title": "배경컨셉기획서",
          "folderName": "배경컨셉기획서",
          "folderAliases": [
            "배경컨셉기획서",
            "배경컨셉",
            "background"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "05",
          "id": "mechanics",
          "title": "게임메카닉스기획서",
          "folderName": "게임메카닉스기획서",
          "folderAliases": [
            "게임메카닉스기획서",
            "게임메카닉스",
            "mechanics"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "06",
          "id": "contents-system",
          "title": "게임콘텐츠시스템기획서",
          "folderName": "게임콘텐츠시스템기획서",
          "folderAliases": [
            "게임콘텐츠시스템기획서",
            "콘텐츠시스템기획서",
            "콘텐츠시스템",
            "contents-system"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "07",
          "id": "level-design",
          "title": "레벨디자인기획서",
          "folderName": "레벨디자인기획서",
          "folderAliases": [
            "레벨디자인기획서",
            "레벨기획서",
            "레벨디자인",
            "level-design"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "08",
          "id": "ui-design",
          "title": "게임UI디자인기획서",
          "folderName": "게임UI디자인기획서",
          "folderAliases": [
            "게임UI디자인기획서",
            "게임UI기획서",
            "UI디자인기획서",
            "UI기획서",
            "ui-design"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        },
        {
          "no": "09",
          "id": "service-plan",
          "title": "게임서비스기획서",
          "folderName": "게임서비스기획서",
          "folderAliases": [
            "게임서비스기획서",
            "서비스기획서",
            "service-plan"
          ],
          "sourceFolders": [],
          "status": "coming-soon",
          "primaryFile": {
            "title": "Coming Soon",
            "fileName": "coming-soon.pdf",
            "path": "./assets/pdf/_common/coming-soon.pdf",
            "type": "pdf",
            "isPlaceholder": true
          },
          "files": [
            {
              "title": "Coming Soon",
              "fileName": "coming-soon.pdf",
              "path": "./assets/pdf/_common/coming-soon.pdf",
              "type": "pdf",
              "isPlaceholder": true
            }
          ],
          "fileCount": 0
        }
      ],
      "seo": {
        "title": "레오나르의 날개 | Game Design Portfolio | 이수정",
        "description": "레오나르의 날개 프로젝트의 기획 문서를 확인하는 페이지입니다.",
        "ogImage": "./assets/images/og/portfolio-home-preview.jpg"
      }
    }
  ]
};
