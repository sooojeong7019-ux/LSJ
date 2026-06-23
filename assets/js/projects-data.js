/* projects-data.js
   수정 위치: 프로젝트 제목/소개, PDF 문서 제목과 경로, YouTube Video ID, 빌드 다운로드 URL, 연락처, 소셜 링크을 한 곳에서 관리합니다.
*/
window.PORTFOLIO_DATA = {
  "site": {
    "name": "Game Design Portfolio",
    "email": "your-email@example.com",
    "keywords": "게임기획 포트폴리오, 게임기획자 취업, Unreal Engine, 레벨디자인, 게임시스템기획, 오픈월드 RPG, 뱀서라이크, 메트로바니아",
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
  "categories": [
    {
      "id": "all",
      "label": "전체"
    },
    {
      "id": "proposal",
      "label": "제안"
    },
    {
      "id": "concept",
      "label": "컨셉"
    },
    {
      "id": "system",
      "label": "시스템"
    },
    {
      "id": "level",
      "label": "레벨"
    },
    {
      "id": "ui-service",
      "label": "UI/서비스"
    },
    {
      "id": "test-scope",
      "label": "테스트/일정"
    }
  ],
  "projects": [
    {
      "id": "escape-trauma",
      "title": "Escape:Trauma",
      "type": "Team Project",
      "genre": "Escape Horror",
      "description": "불안정한 화면 연출과 폐쇄적인 공간 탐험을 중심으로 구성한 탈출형 공포 프로젝트입니다.",
      "page": "escape-trauma.html",
      "anchor": "escape",
      "video": {
        "youtubeId": "2jlXA7jPefU",
        "title": "Escape:Trauma Gameplay Video",
        "description": "Escape:Trauma의 분위기, 화면 구성, 탐색 중심 플레이를 확인할 수 있는 임시/프로토타입 영상입니다.",
        "thumbnail": "./assets/images/og/escape-trauma-og.jpg"
      },
      "build": {
        "version": "v0.1.0",
        "size": "외부 링크 제공",
        "updatedAt": "2026-06-23",
        "installGuide": "빌드 파일은 사이트에 직접 포함하지 않고 외부 URL로 연결합니다. 실제 배포 시 URL만 교체하세요.",
        "downloads": [
          {
            "platform": "Windows",
            "url": "https://example.com/download/windows-build"
          },
          {
            "platform": "Android",
            "url": "https://example.com/download/android-build"
          }
        ]
      },
      "documents": [
        {
          "no": "01",
          "category": "proposal",
          "title": "개발제안서",
          "description": "프로젝트 목표, 시장 포지션, 핵심 플레이 경험과 개발 방향을 정리한 문서입니다.",
          "fileName": "01_development_proposal.pdf",
          "path": "./assets/documents/escape-trauma/01_development_proposal.pdf",
          "legacyPath": "./assets/pdf/escape-trauma/01_development_proposal.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "02",
          "category": "concept",
          "title": "캐릭터컨셉기획서",
          "description": "주인공, 적, 주요 NPC의 역할과 시각 콘셉트를 정리한 문서입니다.",
          "fileName": "02_character_concept.pdf",
          "path": "./assets/documents/escape-trauma/02_character_concept.pdf",
          "legacyPath": "./assets/pdf/escape-trauma/02_character_concept.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "03",
          "category": "concept",
          "title": "배경컨셉기획서",
          "description": "세계관, 지역 분위기, 주요 배경 구조와 랜드마크를 정리한 문서입니다.",
          "fileName": "03_background_concept.pdf",
          "path": "./assets/documents/escape-trauma/03_background_concept.pdf",
          "legacyPath": "./assets/pdf/escape-trauma/03_background_concept.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "04",
          "category": "system",
          "title": "게임시스템기획서",
          "description": "전투, 성장, 자원, 상호작용 등 핵심 시스템 규칙을 정리한 문서입니다.",
          "fileName": "04_game_system.pdf",
          "path": "./assets/documents/escape-trauma/04_game_system.pdf",
          "legacyPath": "./assets/pdf/escape-trauma/04_game_system.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "05",
          "category": "level",
          "title": "레벨디자인기획서",
          "description": "동선, 전투 배치, 공간 구조, 플레이 리듬을 정리한 문서입니다.",
          "fileName": "05_level_design.pdf",
          "path": "./assets/documents/escape-trauma/05_level_design.pdf",
          "legacyPath": "./assets/pdf/escape-trauma/05_level_design.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "06",
          "category": "ui-service",
          "title": "게임 UI 디자인기획서",
          "description": "HUD, 메뉴, 정보 표시, 화면 전환 구조를 정리한 문서입니다.",
          "fileName": "06_game_ui_design.pdf",
          "path": "./assets/documents/escape-trauma/06_game_ui_design.pdf",
          "legacyPath": "./assets/pdf/escape-trauma/06_game_ui_design.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "07",
          "category": "ui-service",
          "title": "게임서비스기획서",
          "description": "서비스 플로우, 유저 진입 구조, 운영 방향을 정리한 문서입니다.",
          "fileName": "07_game_service_plan.pdf",
          "path": "./assets/documents/escape-trauma/07_game_service_plan.pdf",
          "legacyPath": "./assets/pdf/escape-trauma/07_game_service_plan.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "08",
          "category": "test-scope",
          "title": "테스트 시나리오 및 플레이테스트 분석서",
          "description": "테스트 목표, 플레이 시나리오, 피드백 분석 기준을 정리한 문서입니다.",
          "fileName": "08_playtest_analysis.pdf",
          "path": "./assets/documents/escape-trauma/08_playtest_analysis.pdf",
          "legacyPath": "./assets/pdf/escape-trauma/08_playtest_analysis.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "09",
          "category": "test-scope",
          "title": "개발 일정 및 에셋 스코프 문서",
          "description": "개발 마일스톤, 필요 에셋 범위, 우선순위를 정리한 문서입니다.",
          "fileName": "09_schedule_asset_scope.pdf",
          "path": "./assets/documents/escape-trauma/09_schedule_asset_scope.pdf",
          "legacyPath": "./assets/pdf/escape-trauma/09_schedule_asset_scope.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        }
      ],
      "seo": {
        "title": "Escape:Trauma | Game Design Portfolio",
        "description": "불안정한 화면 연출과 폐쇄적인 공간 탐험을 중심으로 구성한 탈출형 공포 프로젝트입니다.",
        "ogImage": "./assets/images/og/escape-trauma-og.jpg"
      }
    },
    {
      "id": "the-stillborn-age",
      "title": "The Stillborn Age",
      "type": "Personal Project",
      "genre": "Turn-Based JRPG",
      "description": "붕괴한 세계의 복원과 턴제 전투 구조를 중심으로 설계한 개인 JRPG 프로젝트입니다.",
      "page": "the-stillborn-age.html",
      "anchor": "stillborn",
      "video": {
        "youtubeId": "M7lc1UVf-VE",
        "title": "The Stillborn Age Prototype Video",
        "description": "The Stillborn Age의 전투/분위기 참고용 임시 영상입니다. 실제 영상은 YouTube Video ID만 교체하면 됩니다.",
        "thumbnail": "./assets/images/og/the-stillborn-age-og.jpg"
      },
      "build": {
        "version": "v0.1.0",
        "size": "외부 링크 제공",
        "updatedAt": "2026-06-23",
        "installGuide": "빌드 파일은 사이트에 직접 포함하지 않고 외부 URL로 연결합니다. 실제 배포 시 URL만 교체하세요.",
        "downloads": [
          {
            "platform": "Windows",
            "url": "https://example.com/download/windows-build"
          },
          {
            "platform": "Android",
            "url": "https://example.com/download/android-build"
          }
        ]
      },
      "documents": [
        {
          "no": "01",
          "category": "proposal",
          "title": "개발제안서",
          "description": "프로젝트 목표, 시장 포지션, 핵심 플레이 경험과 개발 방향을 정리한 문서입니다.",
          "fileName": "01_development_proposal.pdf",
          "path": "./assets/documents/the-stillborn-age/01_development_proposal.pdf",
          "legacyPath": "./assets/pdf/the-stillborn-age/01_development_proposal.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "02",
          "category": "concept",
          "title": "캐릭터컨셉기획서",
          "description": "주인공, 적, 주요 NPC의 역할과 시각 콘셉트를 정리한 문서입니다.",
          "fileName": "02_character_concept.pdf",
          "path": "./assets/documents/the-stillborn-age/02_character_concept.pdf",
          "legacyPath": "./assets/pdf/the-stillborn-age/02_character_concept.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "03",
          "category": "concept",
          "title": "배경컨셉기획서",
          "description": "세계관, 지역 분위기, 주요 배경 구조와 랜드마크를 정리한 문서입니다.",
          "fileName": "03_background_concept.pdf",
          "path": "./assets/documents/the-stillborn-age/03_background_concept.pdf",
          "legacyPath": "./assets/pdf/the-stillborn-age/03_background_concept.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "04",
          "category": "system",
          "title": "게임시스템기획서",
          "description": "전투, 성장, 자원, 상호작용 등 핵심 시스템 규칙을 정리한 문서입니다.",
          "fileName": "04_game_system.pdf",
          "path": "./assets/documents/the-stillborn-age/04_game_system.pdf",
          "legacyPath": "./assets/pdf/the-stillborn-age/04_game_system.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "05",
          "category": "level",
          "title": "레벨디자인기획서",
          "description": "동선, 전투 배치, 공간 구조, 플레이 리듬을 정리한 문서입니다.",
          "fileName": "05_level_design.pdf",
          "path": "./assets/documents/the-stillborn-age/05_level_design.pdf",
          "legacyPath": "./assets/pdf/the-stillborn-age/05_level_design.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "06",
          "category": "ui-service",
          "title": "게임 UI 디자인기획서",
          "description": "HUD, 메뉴, 정보 표시, 화면 전환 구조를 정리한 문서입니다.",
          "fileName": "06_game_ui_design.pdf",
          "path": "./assets/documents/the-stillborn-age/06_game_ui_design.pdf",
          "legacyPath": "./assets/pdf/the-stillborn-age/06_game_ui_design.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "07",
          "category": "ui-service",
          "title": "게임서비스기획서",
          "description": "서비스 플로우, 유저 진입 구조, 운영 방향을 정리한 문서입니다.",
          "fileName": "07_game_service_plan.pdf",
          "path": "./assets/documents/the-stillborn-age/07_game_service_plan.pdf",
          "legacyPath": "./assets/pdf/the-stillborn-age/07_game_service_plan.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "08",
          "category": "test-scope",
          "title": "테스트 시나리오 및 플레이테스트 분석서",
          "description": "테스트 목표, 플레이 시나리오, 피드백 분석 기준을 정리한 문서입니다.",
          "fileName": "08_playtest_analysis.pdf",
          "path": "./assets/documents/the-stillborn-age/08_playtest_analysis.pdf",
          "legacyPath": "./assets/pdf/the-stillborn-age/08_playtest_analysis.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "09",
          "category": "test-scope",
          "title": "개발 일정 및 에셋 스코프 문서",
          "description": "개발 마일스톤, 필요 에셋 범위, 우선순위를 정리한 문서입니다.",
          "fileName": "09_schedule_asset_scope.pdf",
          "path": "./assets/documents/the-stillborn-age/09_schedule_asset_scope.pdf",
          "legacyPath": "./assets/pdf/the-stillborn-age/09_schedule_asset_scope.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        }
      ],
      "seo": {
        "title": "The Stillborn Age | Game Design Portfolio",
        "description": "붕괴한 세계의 복원과 턴제 전투 구조를 중심으로 설계한 개인 JRPG 프로젝트입니다.",
        "ogImage": "./assets/images/og/the-stillborn-age-og.jpg"
      }
    },
    {
      "id": "leonardo-wing",
      "title": "레오나르의 날개",
      "type": "Team Project",
      "genre": "Steampunk RPG",
      "description": "거대 비공정 내부 구역과 스팀펑크 오픈월드 구조를 중심으로 설계한 팀 프로젝트 RPG입니다.",
      "page": "leonardo-wing.html",
      "anchor": "leonardo",
      "video": {
        "youtubeId": "M7lc1UVf-VE",
        "title": "레오나르의 날개 Prototype Video",
        "description": "레오나르의 날개 프로젝트의 분위기 참고용 임시 영상입니다. 실제 영상은 YouTube Video ID만 교체하면 됩니다.",
        "thumbnail": "./assets/images/og/leonardo-wing-og.jpg"
      },
      "build": {
        "version": "v0.1.0",
        "size": "외부 링크 제공",
        "updatedAt": "2026-06-23",
        "installGuide": "빌드 파일은 사이트에 직접 포함하지 않고 외부 URL로 연결합니다. 실제 배포 시 URL만 교체하세요.",
        "downloads": [
          {
            "platform": "Windows",
            "url": "https://example.com/download/windows-build"
          },
          {
            "platform": "Android",
            "url": "https://example.com/download/android-build"
          }
        ]
      },
      "documents": [
        {
          "no": "01",
          "category": "proposal",
          "title": "개발제안서",
          "description": "프로젝트 목표, 시장 포지션, 핵심 플레이 경험과 개발 방향을 정리한 문서입니다.",
          "fileName": "01_development_proposal.pdf",
          "path": "./assets/documents/leonardo-wing/01_development_proposal.pdf",
          "legacyPath": "./assets/pdf/leonardo-wing/01_development_proposal.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "02",
          "category": "concept",
          "title": "캐릭터컨셉기획서",
          "description": "주인공, 적, 주요 NPC의 역할과 시각 콘셉트를 정리한 문서입니다.",
          "fileName": "02_character_concept.pdf",
          "path": "./assets/documents/leonardo-wing/02_character_concept.pdf",
          "legacyPath": "./assets/pdf/leonardo-wing/02_character_concept.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "03",
          "category": "concept",
          "title": "배경컨셉기획서",
          "description": "세계관, 지역 분위기, 주요 배경 구조와 랜드마크를 정리한 문서입니다.",
          "fileName": "03_background_concept.pdf",
          "path": "./assets/documents/leonardo-wing/03_background_concept.pdf",
          "legacyPath": "./assets/pdf/leonardo-wing/03_background_concept.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "04",
          "category": "system",
          "title": "게임시스템기획서",
          "description": "전투, 성장, 자원, 상호작용 등 핵심 시스템 규칙을 정리한 문서입니다.",
          "fileName": "04_game_system.pdf",
          "path": "./assets/documents/leonardo-wing/04_game_system.pdf",
          "legacyPath": "./assets/pdf/leonardo-wing/04_game_system.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "05",
          "category": "level",
          "title": "레벨디자인기획서",
          "description": "동선, 전투 배치, 공간 구조, 플레이 리듬을 정리한 문서입니다.",
          "fileName": "05_level_design.pdf",
          "path": "./assets/documents/leonardo-wing/05_level_design.pdf",
          "legacyPath": "./assets/pdf/leonardo-wing/05_level_design.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "06",
          "category": "ui-service",
          "title": "게임 UI 디자인기획서",
          "description": "HUD, 메뉴, 정보 표시, 화면 전환 구조를 정리한 문서입니다.",
          "fileName": "06_game_ui_design.pdf",
          "path": "./assets/documents/leonardo-wing/06_game_ui_design.pdf",
          "legacyPath": "./assets/pdf/leonardo-wing/06_game_ui_design.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "07",
          "category": "ui-service",
          "title": "게임서비스기획서",
          "description": "서비스 플로우, 유저 진입 구조, 운영 방향을 정리한 문서입니다.",
          "fileName": "07_game_service_plan.pdf",
          "path": "./assets/documents/leonardo-wing/07_game_service_plan.pdf",
          "legacyPath": "./assets/pdf/leonardo-wing/07_game_service_plan.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "08",
          "category": "test-scope",
          "title": "테스트 시나리오 및 플레이테스트 분석서",
          "description": "테스트 목표, 플레이 시나리오, 피드백 분석 기준을 정리한 문서입니다.",
          "fileName": "08_playtest_analysis.pdf",
          "path": "./assets/documents/leonardo-wing/08_playtest_analysis.pdf",
          "legacyPath": "./assets/pdf/leonardo-wing/08_playtest_analysis.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        },
        {
          "no": "09",
          "category": "test-scope",
          "title": "개발 일정 및 에셋 스코프 문서",
          "description": "개발 마일스톤, 필요 에셋 범위, 우선순위를 정리한 문서입니다.",
          "fileName": "09_schedule_asset_scope.pdf",
          "path": "./assets/documents/leonardo-wing/09_schedule_asset_scope.pdf",
          "legacyPath": "./assets/pdf/leonardo-wing/09_schedule_asset_scope.pdf",
          "date": "2026-06-23",
          "version": "v1.0"
        }
      ],
      "seo": {
        "title": "레오나르의 날개 | Game Design Portfolio",
        "description": "거대 비공정 내부 구역과 스팀펑크 오픈월드 구조를 중심으로 설계한 팀 프로젝트 RPG입니다.",
        "ogImage": "./assets/images/og/leonardo-wing-og.jpg"
      }
    }
  ]
};
