(() => {
  const storageKey = "xiangju-color-theme";
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const themeColor = document.querySelector("#theme-color");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  const getSavedTheme = () => {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (_error) {
      return null;
    }
  };

  const applyTheme = (theme, persist = false) => {
    const isDark = theme === "dark";
    root.dataset.theme = isDark ? "dark" : "light";
    toggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
    toggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
    themeColor.content = isDark ? "#191c20" : "#fdfdfc";

    if (persist) {
      try {
        window.localStorage.setItem(storageKey, root.dataset.theme);
      } catch (_error) {}
    }
  };

  applyTheme(root.dataset.theme);

  toggle.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  });

  systemTheme.addEventListener("change", (event) => {
    if (!getSavedTheme()) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });
})();

if (
  window.matchMedia("(min-width: 701px)").matches &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  document.querySelectorAll(".paper").forEach((paper) => {
    const video = paper.querySelector(".thumb-demo");
    if (!video) return;
    let hovering = false;

    paper.addEventListener("mouseenter", () => {
      hovering = true;
      const playback = video.play();
      if (playback) {
        playback
          .then(() => {
            if (hovering) {
              paper.classList.add("demo-active");
            } else {
              video.pause();
              video.currentTime = 0;
            }
          })
          .catch(() => {});
      }
    });

    paper.addEventListener("mouseleave", () => {
      hovering = false;
      paper.classList.remove("demo-active");
      video.pause();
      video.currentTime = 0;
    });
  });
}
