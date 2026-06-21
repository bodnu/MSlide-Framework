Reveal.initialize({
  scale: 1.0,
  margin: 0,
  center: true,
  preloadIframes: true,
  hash: true,
  progress: false,
  navigation: true,
  backgroundIframe: true,
  touch: true,
  jumpToSlide: false,
  showNotes: false,
  pause: false,
  overview: false,
  disableLayout: false,
  view: "scroll",
  scrollProgress: true,
  scrollSnap: "mandatory",
  verticator: { color: "white" },
  toolbar: {
    position: "bottom",
    fullscreen: false,
    help: false,
  },
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes, Verticator],
});

function getBottomNavTarget(href) {
  const id = decodeURIComponent(href.replace(/^#\/?/, "").split("/")[0]);
  const slide = document.getElementById(id);
  if (!slide) return null;

  return {
    slide,
    page: slide.closest(".scroll-page"),
  };
}

function scrollToBottomNavTarget(href) {
  const target = getBottomNavTarget(href);
  if (!target) return false;

  const scrollTarget = target.page || target.slide;
  const viewport = Reveal.getViewportElement ? Reveal.getViewportElement() : document.body;
  const top = scrollTarget.offsetTop;

  if (viewport && typeof viewport.scrollTo === "function") {
    viewport.scrollTo({ top, left: 0, behavior: "auto" });
  } else if (viewport) {
    viewport.scrollTop = top;
  }

  document.body.scrollTop = top;
  document.documentElement.scrollTop = top;

  if (window.location.hash !== href) {
    history.pushState(null, "", href);
  }

  if (Reveal.scroll && Reveal.scroll.syncScrollPosition) {
    requestAnimationFrame(() => Reveal.scroll.syncScrollPosition());
  }

  return true;
}

document.addEventListener(
  "click",
  (event) => {
    const link = event.target.closest('.navbar.is-fixed-bottom a[href^="#/"]');
    if (!link || link.hasAttribute("data-preview-link")) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    const href = link.getAttribute("href");
    scrollToBottomNavTarget(href);
  },
  true
);

Reveal.on("ready", () => {
  if (window.location.hash.startsWith("#/")) {
    requestAnimationFrame(() => scrollToBottomNavTarget(window.location.hash));
  }
});

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-preview-link]");
  if (!trigger || trigger.getAttribute("data-preview-link") === "false" || event.defaultPrevented) return;

  const url = trigger.getAttribute("href");
  if (!url) return;

  event.preventDefault();
  event.stopPropagation();

  if (window.Reveal && typeof Reveal.showPreview === "function") {
    Reveal.showPreview(url);
  }
});
