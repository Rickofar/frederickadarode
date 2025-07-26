document.addEventListener('DOMContentLoaded', function() {
  const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
  const styleSwitcher = document.querySelector(".style-switcher");
  const alternateStyles = document.querySelectorAll(".alternate-style");
  const root = document.documentElement;
  
  // Initialize theme from localStorage or default to color-1
  const savedTheme = localStorage.getItem('portfolio-theme') || 'color-1';
  setActiveStyle(savedTheme);
  
  // Toggle style switcher
  styleSwitcherToggler.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
  });

  // Hide style switcher on scroll
  window.addEventListener("scroll", () => {
    if (styleSwitcher.classList.contains("open")) {
      styleSwitcher.classList.remove("open");
    }
  });

  // Theme colors function
  function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
      if (color === style.getAttribute("title")) {
        style.removeAttribute("disabled");
        localStorage.setItem('portfolio-theme', color);
        
        // Update CSS variables based on theme
        switch(color) {
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
      } else {
        style.setAttribute("disabled", "true");
      }
    });
  }

  // Make setActiveStyle available globally for color span clicks
  window.setActiveStyle = setActiveStyle;
});