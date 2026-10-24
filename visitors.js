(() => {
  const section = document.querySelector("#visitors");
  if (!section) return;

  const mount = section.querySelector(".visitor-map-mount");
  const status = section.querySelector(".visitor-status");
  const details = section.querySelector(".visitor-details");
  const siteId = section.dataset.mapId.trim();
  const isProduction = window.location.hostname === "xiangju-mi.github.io";
  const isLocal = ["localhost", "127.0.0.1", "[::1]", ""].includes(window.location.hostname);

  // Local previews never call the tracker, even after a real site ID is set.
  // Leave the unconfigured section hidden on the public site.
  if (!isProduction || !/^[\w-]+$/.test(siteId)) {
    if (isLocal) {
      section.hidden = false;
      section.dataset.state = "preview";
      status.textContent = "Design preview · visitor statistics are not connected here.";
    }
    return;
  }

  section.hidden = false;
  section.dataset.state = "loading";

  const showError = () => {
    if (section.dataset.state === "ready") return;
    section.dataset.state = "error";
    status.hidden = false;
    status.textContent = "Visitor statistics are temporarily unavailable.";
  };

  // The provider creates its own widget and then populates it asynchronously.
  // Wait for actual counter text and the site's statistics URL, not script.onload.
  const syncWidget = () => {
    const widget = mount.querySelector("#mapmyvisitors-widget");
    if (!widget) return;

    const svg = widget.querySelector("svg");
    // The provider updates its SVG and marker coordinates on window resize.
    // Do not add a fixed viewBox: that would scale the markers a second time.
    if (svg) svg.setAttribute("aria-hidden", "true");

    const count = widget.querySelector(".mapmyvisitors-visitors")?.textContent.trim();
    const url = new URL(widget.getAttribute("href") || "", window.location.href);
    if (!/\d/.test(count || "") || url.hostname !== "mapmyvisitors.com" || !url.pathname.startsWith("/web/")) return;

    url.protocol = "https:";
    widget.href = url.href;
    widget.target = "_blank";
    widget.rel = "external noopener noreferrer";
    widget.setAttribute("aria-label", `${count}. View visitor locations and detailed statistics (opens in a new tab).`);
    details.href = url.href;
    details.hidden = false;
    status.hidden = true;
    section.dataset.state = "ready";
    window.clearTimeout(timeout);
  };

  const observer = new MutationObserver(syncWidget);
  observer.observe(mount, { childList: true, subtree: true, characterData: true });
  const timeout = window.setTimeout(showError, 15000);

  // Load once at page load, including for readers who never scroll to the footer.
  // Theme changes are entirely CSS-driven and never send another counting request.
  const dark = document.documentElement.dataset.theme === "dark";
  const params = new URLSearchParams({
    d: siteId,
    w: "a",
    t: "tt",
    co: dark ? "191c20" : "fdfdfc",
    cl: dark ? "36434f" : "dce4ea",
    ct: dark ? "a8b1bc" : "626b76",
  });
  const script = document.createElement("script");
  script.id = "mapmyvisitors";
  script.async = true;
  script.src = `https://mapmyvisitors.com/map.js?${params}`;
  script.addEventListener("error", () => {
    window.clearTimeout(timeout);
    showError();
  }, { once: true });
  mount.append(script);
})();
