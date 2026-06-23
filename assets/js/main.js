// assets/js/main.js

const story = document.querySelector(".story");
const gray = document.querySelector(".bg-gray");
const color = document.querySelector(".bg-color");

function getYouTubeId(url) {
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) return match[1];
  }

  return "";
}

function initVideoPanels() {
  document.querySelectorAll("[data-video]").forEach((panel) => {
    const iframe = panel.querySelector("iframe");
    const input = panel.querySelector("input");
    const button = panel.querySelector("button");

    if (!iframe) return;

    if (iframe.getAttribute("src")) {
      panel.classList.add("has-video");
    }

    if (!input || !button) return;

    const key = `portfolio-youtube-${panel.dataset.video}`;
    const savedUrl = localStorage.getItem(key);

    function setVideo(url) {
      const id = getYouTubeId(url);
      if (!id) return;

      iframe.src = `https://www.youtube.com/embed/${id}`;
      panel.classList.add("has-video");
      localStorage.setItem(key, url);
    }

    if (savedUrl) {
      input.value = savedUrl;
      setVideo(savedUrl);
    }

    button.addEventListener("click", () => setVideo(input.value.trim()));

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        setVideo(input.value.trim());
      }
    });
  });
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function updateScrollBackground() {
  if (!story || !gray || !color) return;

  const storyTop = story.offsetTop;
  const scrollRange = story.offsetHeight - window.innerHeight;
  const progress = clamp((window.scrollY - storyTop) / scrollRange, 0, 1);

  const renderedHeight = gray.getBoundingClientRect().height;
  const maxShift = Math.max(0, renderedHeight - window.innerHeight);
  const shift = -maxShift * progress;

  gray.style.setProperty("--shift", `${shift}px`);
  color.style.setProperty("--shift", `${shift}px`);

  const colorStart = 0.16;
  const colorEnd = 0.34;
  const colorProgress = clamp((progress - colorStart) / (colorEnd - colorStart), 0, 1);
  const easedColorProgress = colorProgress * colorProgress * (3 - 2 * colorProgress);

  color.style.opacity = easedColorProgress.toFixed(3);

  requestAnimationFrame(updateScrollBackground);
}

function initAnchorNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "auto", block: "start" });
      history.replaceState(null, "", anchor.getAttribute("href"));
    });
  });
}




initVideoPanels();
initAnchorNavigation();
updateScrollBackground();
