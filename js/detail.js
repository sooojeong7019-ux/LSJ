/* detail.js
   프로젝트 상세 페이지 공통 기능입니다.
   - 문서 카드 렌더링
   - 문서 카테고리 필터
   - PDF 미리보기 모달
   - 새 탭 열기 / 다운로드 placeholder 처리
   - YouTube 영상 / 빌드 다운로드 카드 렌더링
*/
function resetScrollPositionOnPageShow() {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.addEventListener("pageshow", () => {
    if (!location.hash) window.scrollTo(0, 0);
  });
}

function getCurrentProject() {
  const id = document.body.dataset.projectId;
  const data = window.PORTFOLIO_DATA;
  if (!data || !Array.isArray(data.projects)) return null;
  return data.projects.find((project) => project.id === id) || null;
}

function renderFilters(project) {
  const filterRoot = document.querySelector("[data-doc-filters]");
  if (!filterRoot || !window.PORTFOLIO_DATA) return;

  filterRoot.innerHTML = window.PORTFOLIO_DATA.categories.map((category) => `
    <button class="filter-btn ${category.id === "all" ? "is-active" : ""}" type="button" data-doc-filter="${category.id}">
      ${category.label}
    </button>
  `).join("");

  filterRoot.addEventListener("click", (event) => {
    const button = event.target.closest("[data-doc-filter]");
    if (!button) return;
    filterRoot.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderDocuments(project, button.dataset.docFilter);
  });
}

function renderDocuments(project, category = "all") {
  const grid = document.querySelector("[data-document-grid]");
  if (!grid || !project) return;

  const docs = category === "all"
    ? project.documents
    : project.documents.filter((doc) => doc.category === category);

  grid.innerHTML = docs.map((doc) => `
    <article class="doc-card" data-doc-number="${doc.no}" data-doc-type="${doc.category}">
      <div>
        <div class="doc-no">${doc.no} / PDF</div>
        <h3>${doc.title}</h3>
        <p class="doc-desc">${doc.description}</p>
        <div class="doc-meta">
          <span>작성일: ${doc.date}</span>
        </div>
      </div>
      <div class="doc-actions">
        <button class="doc-link" type="button" data-preview-pdf data-title="${doc.title}" data-path="${doc.path}" data-legacy-path="${doc.legacyPath || ""}">
          미리보기
        </button>
        <a class="doc-link" href="${doc.path}" target="_blank" rel="noopener" data-open-pdf data-legacy-path="${doc.legacyPath || ""}">
          새 탭 열기
        </a>
        <a class="doc-link" href="${doc.path}" download data-download-pdf data-legacy-path="${doc.legacyPath || ""}">
          다운로드
        </a>
      </div>
    </article>
  `).join("");
}

async function resolvePdfPath(path, legacyPath) {
  const candidates = [path, legacyPath].filter(Boolean);
  for (const candidate of candidates) {
    try {
      const response = await fetch(candidate, { method: "HEAD" });
      if (response.ok) return { exists: true, path: candidate };
    } catch (error) {
      /* Live Server가 아닌 환경에서는 fetch 검사가 실패할 수 있으므로 placeholder로 처리합니다. */
    }
  }
  return { exists: false, path: candidates[0] || "" };
}

function renderVideo(project) {
  const root = document.querySelector("[data-project-video]");
  if (!root || !project) return;
  const videoId = project.video.youtubeId || "";
  const hasVideo = videoId && videoId !== "VIDEO_ID_HERE";
  root.innerHTML = `
    <div class="video-preview">
      ${hasVideo ? `<iframe title="${project.video.title}" src="https://www.youtube.com/embed/${videoId}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` : `<div class="video-thumb-placeholder">YouTube Video</div>`}
    </div>
    <div class="info-card-body">
      <h2>${project.video.title}</h2>
      <p>${project.video.description}</p>
    </div>
  `;
}

function renderBuilds(project) {
  const root = document.querySelector("[data-build-downloads]");
  if (!root || !project) return;
  const b = project.build;
  root.innerHTML = `
    <div class="info-card-body">
      <h2>게임 빌드 다운로드</h2>
      <p>${b.installGuide}</p>
    </div>
    <div class="build-list">
      ${b.downloads.map((item) => `
        <article class="build-item">
          <h3>${item.platform}</h3>
          <div class="build-meta">
            <span>빌드 버전: ${b.version}</span>
            <span>파일 용량: ${b.size}</span>
            <span>업데이트: ${b.updatedAt}</span>
          </div>
          <a class="doc-link" href="${item.url}" target="_blank" rel="noopener">외부 다운로드 →</a>
        </article>
      `).join("")}
    </div>
  `;
}

function openPdfModal(title, bodyHtml) {
  const modal = document.querySelector("[data-pdf-modal]");
  if (!modal) return;
  modal.querySelector("[data-modal-title]").textContent = title;
  modal.querySelector("[data-modal-body]").innerHTML = bodyHtml;
  modal.classList.add("is-open");
  document.body.classList.add("modal-open");
  const closeButton = modal.querySelector("[data-modal-close]");
  if (closeButton) closeButton.focus();
}

function closePdfModal() {
  const modal = document.querySelector("[data-pdf-modal]");
  if (!modal) return;
  modal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  modal.querySelector("[data-modal-body]").innerHTML = "";
}

function bindPdfActions() {
  document.addEventListener("click", async (event) => {
    const preview = event.target.closest("[data-preview-pdf]");
    if (preview) {
      const title = preview.dataset.title || "문서 미리보기";
      const result = await resolvePdfPath(preview.dataset.path, preview.dataset.legacyPath);
      if (result.exists) {
        openPdfModal(title, `<iframe class="pdf-frame" src="${result.path}" title="${title} PDF 미리보기"></iframe>`);
      } else {
        openPdfModal(title, `
          <div class="placeholder-message">
            <div>
              <strong>PDF 파일이 아직 연결되지 않았습니다.</strong>
              <p>아래 경로에 실제 PDF를 넣으면 미리보기, 새 탭 열기, 다운로드 기능이 활성화됩니다.</p>
              <p>${result.path || "등록된 경로 없음"}</p>
            </div>
          </div>
        `);
      }
      return;
    }

    const pdfLink = event.target.closest("[data-open-pdf], [data-download-pdf]");
    if (pdfLink) {
      const result = await resolvePdfPath(pdfLink.getAttribute("href"), pdfLink.dataset.legacyPath);
      if (!result.exists) {
        event.preventDefault();
        openPdfModal("문서 준비 중", `
          <div class="placeholder-message">
            <div>
              <strong>PDF 파일이 아직 연결되지 않았습니다.</strong>
              <p>현재 등록된 경로에 파일이 없어 링크 실행 대신 안내를 표시합니다.</p>
              <p>${result.path || "등록된 경로 없음"}</p>
            </div>
          </div>
        `);
      } else if (result.path !== pdfLink.getAttribute("href")) {
        pdfLink.setAttribute("href", result.path);
      }
    }
  });

  const modal = document.querySelector("[data-pdf-modal]");
  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target.matches("[data-modal-close], .modal-backdrop")) closePdfModal();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePdfModal();
  });
}

function initDetailPage() {
  resetScrollPositionOnPageShow();
  const project = getCurrentProject();
  if (!project) return;
  renderFilters(project);
  renderDocuments(project);
  renderVideo(project);
  renderBuilds(project);
  bindPdfActions();
}

initDetailPage();
