document.addEventListener("DOMContentLoaded", function () {
  // ============================================
  // Shared references
  // ============================================
  const styleSwitcherToggler = document.querySelector(
    ".style-switcher-toggler",
  );
  const styleSwitcher = document.querySelector(".style-switcher");
  const alternateStyles = document.querySelectorAll(".alternate-style");
  const root = document.documentElement;

  // Scroll-related elements
  const progressBar = document.getElementById("scroll-progress");
  const percentageLabel = document.getElementById("scroll-percentage");
  const scrollBtn = document.getElementById("scroll-to-top");

  console.log("[portfolio] styleSwitcherToggler:", styleSwitcherToggler);
  console.log("[portfolio] styleSwitcher:", styleSwitcher);
  console.log("[portfolio] progressBar:", progressBar);
  console.log("[portfolio] percentageLabel:", percentageLabel);
  console.log("[portfolio] scrollBtn:", scrollBtn);

  // ============================================
  // Map each theme to its icon files
  // ============================================
  const FAVICON_BY_THEME = {
    "color-1": "images/Favicon/icon-blue.png",
    "color-2": "images/Favicon/icon-pink.png",
    "color-3": "images/Favicon/icon-green.png",
    "color-4": "images/Favicon/icon-orange.png",
    "color-5": "images/Favicon/icon-red.png",
  };

  const DARK_ICON = "images/Favicon/icon-dark.png";

  let currentTheme = "color-1";
  let isAtTop = true;

  // ============================================
  // Branding: favicon + header logo
  // ============================================
  function applyBranding() {
    const iconPath = isAtTop ? DARK_ICON : FAVICON_BY_THEME[currentTheme];

    ["primary-favicon", "shortcut-favicon", "apple-favicon"].forEach((id) => {
      const link = document.getElementById(id);
      if (link) link.setAttribute("href", iconPath);
    });

    const logoLight = document.getElementById("nav-logo-light");
    const logoDark = document.getElementById("nav-logo-dark");
    if (logoLight) logoLight.setAttribute("src", iconPath);
    if (logoDark) logoDark.setAttribute("src", iconPath);
  }

  // ============================================
  // Theme switcher
  // ============================================
  function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
      if (color === style.getAttribute("title")) {
        style.removeAttribute("disabled");
        localStorage.setItem("portfolio-theme", color);

        currentTheme = color;

        switch (color) {
          case "color-1":
            root.style.setProperty("--main-color", "#2eb1ed");
            root.style.setProperty("--ion-background-color", "#2eb1ed");
            root.style.setProperty("--ion-tab-color", "#ecf0f1");
            break;
          case "color-2":
            root.style.setProperty("--main-color", "#f384a0");
            root.style.setProperty("--ion-background-color", "#f384a0");
            root.style.setProperty("--ion-tab-color", "#f5f5f5");
            break;
          case "color-3":
            root.style.setProperty("--main-color", "#1fc586");
            root.style.setProperty("--ion-background-color", "#1fc586");
            root.style.setProperty("--ion-tab-color", "#eaeaea");
            break;
          case "color-4":
            root.style.setProperty("--main-color", "#f0b30f");
            root.style.setProperty("--ion-background-color", "#f0b30f");
            root.style.setProperty("--ion-tab-color", "#ffffff");
            break;
          case "color-5":
            root.style.setProperty("--main-color", "#cc3a3b");
            root.style.setProperty("--ion-background-color", "#cc3a3b");
            root.style.setProperty("--ion-tab-color", "#f7f7f7");
            break;
        }

        applyBranding();
      } else {
        style.setAttribute("disabled", "true");
      }
    });
  }

  // Expose globally for inline onclick handlers
  window.setActiveStyle = setActiveStyle;

  // ============================================
  // Scroll handler (single, unified listener)
  // ============================================
  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // --------------------------------------------
    // 1. Branding (dark icon at top, themed when scrolled)
    // --------------------------------------------
    const nowAtTop = scrollTop < 10;
    if (nowAtTop !== isAtTop) {
      isAtTop = nowAtTop;
      applyBranding();
    }

    // --------------------------------------------
    // 2. Hide style switcher on scroll
    // --------------------------------------------
    if (styleSwitcher && styleSwitcher.classList.contains("open")) {
      styleSwitcher.classList.remove("open");
    }

    // --------------------------------------------
    // 3. Progress bar
    // --------------------------------------------
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    const rounded = Math.max(0, Math.min(100, Math.round(progress)));

    if (progressBar) {
      progressBar.style.width = rounded + "%";
    }

    // --------------------------------------------
    // 4. Percentage badge
    // --------------------------------------------
    if (percentageLabel) {
      percentageLabel.textContent = rounded + "%";
      if (scrollTop > 40) {
        percentageLabel.classList.add("visible");
      } else {
        percentageLabel.classList.remove("visible");
      }
    }

    // --------------------------------------------
    // 5. Scroll-to-top button
    // --------------------------------------------
    if (scrollBtn) {
      if (scrollTop > 400) {
        scrollBtn.classList.add("visible");
      } else {
        scrollBtn.classList.remove("visible");
      }
    }
  }

  // ============================================
  // Scroll-to-top click handler
  // ============================================
  if (scrollBtn) {
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ============================================
  // Style switcher toggle
  // ============================================
  if (styleSwitcherToggler && styleSwitcher) {
    styleSwitcherToggler.addEventListener("click", () => {
      styleSwitcher.classList.toggle("open");
    });
  }

  // ============================================
  // Attach listeners
  // ============================================
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll, { passive: true });

  // ============================================
  // Initialize
  // ============================================
  const savedTheme = localStorage.getItem("portfolio-theme") || "color-1";
  currentTheme = savedTheme;
  isAtTop = window.scrollY < 10;

  setActiveStyle(savedTheme);
  handleScroll(); // Run once on load to set initial state
});
