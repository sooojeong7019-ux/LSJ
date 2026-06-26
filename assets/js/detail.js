/* detail.js
   폴더 기반 문서 라이브러리 상세 페이지 기능입니다.
   - projects-data.js의 documentGroups를 읽어 9개 파트 카드를 표시합니다.
   - 폴더 안 파일이 여러 개면 번호순으로 정렬된 파일 목록을 표시합니다.
   - 미리보기 버튼은 대표 파일 또는 선택 파일을 모달에서 보여줍니다.
   - 비어 있는 폴더는 Coming Soon PDF로 연결합니다.
*/
function getCurrentProject() {
  const id = document.body.dataset.projectId;
  const data = window.PORTFOLIO_DATA;
  if (!data || !Array.isArray(data.projects)) return null;
  return data.projects.find((project) => project.id === id) || null;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderProjectHeader(project) {
  const typeNode = document.querySelector("[data-project-type]");
  const titleNode = document.querySelector("[data-project-title]");
  const descNode = document.querySelector("[data-project-description]");
  if (typeNode) typeNode.textContent = project.type;
  if (titleNode) titleNode.textContent = project.title;
  if (descNode) descNode.textContent = project.description;
}

function getGroups(project) {
  return project.documentGroups || project.documents || [];
}

function renderDocuments(project) {
  const grid = document.querySelector("[data-document-grid]");
  if (!grid || !project) return;
  const groups = getGroups(project);

  grid.innerHTML = groups.map((group) => {
    const files = group.files || [];
    const primary = group.primaryFile || files[0];
    const statusText = group.status === "coming-soon" ? "Coming Soon" : `${files.length}개 파일`;
    const fileList = files.length > 1
      ? `<div class="doc-file-list">
          ${files.map((file, index) => `
            <button class="doc-file-chip ${index === 0 ? "is-active" : ""}" type="button"
              data-select-file
              data-group-id="${escapeHtml(group.id)}"
              data-file-index="${index}">
              ${escapeHtml(file.fileName)}
            </button>
          `).join("")}
        </div>`
      : "";

    return `
      <article class="doc-card folder-doc-card ${group.status === "coming-soon" ? "is-coming-soon" : ""}"
        data-doc-group="${escapeHtml(group.id)}"
        data-selected-index="0">
        <div>
          <div class="doc-no">${escapeHtml(group.no)}</div>
          <h3>${escapeHtml(group.title)}</h3>
          <div class="doc-meta">
            <span>${escapeHtml(group.folderName || group.title)} · ${statusText}</span>
          </div>
          ${primary ? `<p class="doc-primary-file">대표 파일: ${escapeHtml(primary.fileName)}</p>` : ""}
          ${fileList}
        </div>

        <div class="doc-actions">
          <button class="doc-link" type="button" data-preview-group data-group-id="${escapeHtml(group.id)}">
            미리보기
          </button>
          <a class="doc-link" href="${primary ? escapeHtml(primary.path) : "#"}" target="_blank" rel="noopener" data-open-group data-group-id="${escapeHtml(group.id)}">
            문서확인
          </a>
        </div>
      </article>
    `;
  }).join("");
}

function renderVideo(project) {
  const root = document.querySelector("[data-project-video]");
  if (!root || !project) return;
  const videoId = project.video.youtubeId || "";
  const embedUrl = project.video.embedUrl || (videoId ? `https://www.youtube.com/embed/${videoId}` : "");
  const hasVideo = embedUrl && videoId !== "VIDEO_ID_HERE";

  root.innerHTML = `
    <div class="video-preview">
      ${hasVideo
        ? `<iframe title="${escapeHtml(project.video.title)}" src="${escapeHtml(embedUrl)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
        : `<div class="video-thumb-placeholder">YouTube Video</div>`
      }
    </div>
    <div class="info-card-body">
      <h2>${escapeHtml(project.video.title)}</h2>
      <p>${escapeHtml(project.video.description)}</p>
    </div>
  `;
}

function renderSimulator(project) {
  const root = document.querySelector("[data-project-simulator]");
  if (!root || !project) return;
  const simulator = project.simulator || {};
  const url = simulator.url || "#";

  root.innerHTML = `
    <div class="info-card-body">
      <h2>${escapeHtml(simulator.title || "게임 시뮬레이터")}</h2>
      <p>${escapeHtml(simulator.description || "시뮬레이터를 실행하는 영역입니다.")}</p>
    </div>
    <div class="build-list">
      <article class="build-item simulator-item">
        <h3>${escapeHtml(simulator.name || "시뮬레이터 플레이")}</h3>
        <a class="doc-link simulator-play-button" href="${escapeHtml(url)}" target="_blank" rel="noopener">
          ${escapeHtml(simulator.playLabel || "실행")}
        </a>
      </article>
    </div>
  `;
}

function findGroup(project, groupId) {
  return getGroups(project).find((group) => group.id === groupId);
}

function getSelectedFile(project, groupId) {
  const group = findGroup(project, groupId);
  if (!group) return null;
  const card = document.querySelector(`[data-doc-group="${CSS.escape(groupId)}"]`);
  const index = card ? Number(card.dataset.selectedIndex || "0") : 0;
  const files = group.files || [];
  return files[index] || group.primaryFile || files[0] || null;
}

function renderPreviewContent(file) {
  if (!file) {
    return `<div class="placeholder-message"><div><strong>파일이 없습니다.</strong></div></div>`;
  }

  const type = file.type || "file";
  const path = file.path;
  const title = escapeHtml(file.title || file.fileName || "문서");

  if (type === "pdf") {
    return `<iframe class="pdf-frame" src="${escapeHtml(path)}" title="${title} PDF 미리보기"></iframe>`;
  }

  if (type === "image" || type === "svg") {
    return `
      <div class="image-preview-wrap">
        <img class="image-preview" src="${escapeHtml(path)}" alt="${title}">
      </div>
    `;
  }

  if (type === "text" || type === "markdown") {
    return `
      <div class="text-preview-wrap" data-text-preview="${escapeHtml(path)}">
        <p>텍스트 파일을 불러오는 중입니다.</p>
      </div>
    `;
  }

  if (type === "spreadsheet" || type === "word" || type === "presentation") {
    return `
      <div class="placeholder-message">
        <div>
          <strong>이 파일 형식은 브라우저 내장 미리보기를 지원하지 않습니다.</strong>
          <p>문서확인 버튼으로 파일을 열거나 다운로드해 확인해주세요.</p>
          <p>${escapeHtml(file.fileName || "")}</p>
        </div>
      </div>
    `;
  }

  return `
    <div class="placeholder-message">
      <div>
        <strong>브라우저 미리보기를 지원하지 않는 파일입니다.</strong>
        <p>문서확인 버튼으로 파일을 열어주세요.</p>
        <p>${escapeHtml(file.fileName || "")}</p>
      </div>
    </div>
  `;
}

async function hydrateTextPreview(container) {
  const target = container.querySelector("[data-text-preview]");
  if (!target) return;
  const path = target.dataset.textPreview;
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error("load failed");
    const text = await response.text();
    target.innerHTML = `<pre>${escapeHtml(text)}</pre>`;
  } catch (error) {
    target.innerHTML = `<p>텍스트 파일을 불러올 수 없습니다.</p>`;
  }
}

function openPreviewModal(project, groupId) {
  const group = findGroup(project, groupId);
  if (!group) return;
  const selectedFile = getSelectedFile(project, groupId);
  const files = group.files || [];
  const modal = document.querySelector("[data-pdf-modal]");
  if (!modal) return;

  const fileTabs = files.length > 1
    ? `<div class="modal-file-tabs">
        ${files.map((file, index) => `
          <button class="modal-file-tab ${file === selectedFile ? "is-active" : ""}" type="button"
            data-modal-select-file
            data-group-id="${escapeHtml(groupId)}"
            data-file-index="${index}">
            ${escapeHtml(file.fileName)}
          </button>
        `).join("")}
      </div>`
    : "";

  const title = group.status === "coming-soon" ? `${group.title} - Coming Soon` : `${group.title} 미리보기`;

  modal.querySelector("[data-modal-title]").textContent = title;
  modal.querySelector("[data-modal-body]").innerHTML = `
    ${fileTabs}
    <div class="modal-preview-stage">
      ${renderPreviewContent(selectedFile)}
    </div>
  `;
  modal.classList.add("is-open");
  document.body.classList.add("modal-open");
  hydrateTextPreview(modal);
}

function closePdfModal() {
  const modal = document.querySelector("[data-pdf-modal]");
  if (!modal) return;
  modal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  modal.querySelector("[data-modal-body]").innerHTML = "";
}

function bindDocumentActions(project) {
  document.addEventListener("click", (event) => {
    const selectFile = event.target.closest("[data-select-file]");
    if (selectFile) {
      const groupId = selectFile.dataset.groupId;
      const index = selectFile.dataset.fileIndex;
      const card = document.querySelector(`[data-doc-group="${CSS.escape(groupId)}"]`);
      if (card) {
        card.dataset.selectedIndex = index;
        card.querySelectorAll(".doc-file-chip").forEach((chip) => chip.classList.remove("is-active"));
        selectFile.classList.add("is-active");
        const selected = getSelectedFile(project, groupId);
        const openLink = card.querySelector("[data-open-group]");
        if (openLink && selected) openLink.href = selected.path;
      }
      return;
    }

    const preview = event.target.closest("[data-preview-group]");
    if (preview) {
      event.preventDefault();
      openPreviewModal(project, preview.dataset.groupId);
      return;
    }

    const modalSelect = event.target.closest("[data-modal-select-file]");
    if (modalSelect) {
      const groupId = modalSelect.dataset.groupId;
      const index = modalSelect.dataset.fileIndex;
      const card = document.querySelector(`[data-doc-group="${CSS.escape(groupId)}"]`);
      if (card) card.dataset.selectedIndex = index;
      openPreviewModal(project, groupId);
      return;
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
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  const project = getCurrentProject();
  if (!project) return;
  renderProjectHeader(project);
  renderDocuments(project);
  renderVideo(project);
  renderSimulator(project);
  bindDocumentActions(project);
}

initDetailPage();
