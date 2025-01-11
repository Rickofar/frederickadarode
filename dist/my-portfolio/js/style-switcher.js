// Toggle Style Switcher
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide Style Switcher on Scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// Theme Colors
const root = document.documentElement; // Reference to the root element
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");

      // Dynamically update scrollbar colors based on the selected theme
      if (color === "color-1") {
        root.style.setProperty("--ion-background-color", "#2eb1ed"); // Example color
        root.style.setProperty("--ion-tab-color", "#ecf0f1");
      } else if (color === "color-2") {
        root.style.setProperty("--ion-background-color", "#f384a0");
        root.style.setProperty("--ion-tab-color", "#f5f5f5");
      } else if (color === "color-3") {
        root.style.setProperty("--ion-background-color", "#1fc586");
        root.style.setProperty("--ion-tab-color", "#eaeaea");
      } else if (color === "color-4") {
        root.style.setProperty("--ion-background-color", "#f0b30f");
        root.style.setProperty("--ion-tab-color", "#ffffff");
      } else if (color === "color-5") {
        root.style.setProperty("--ion-background-color", "#cc3a3b");
        root.style.setProperty("--ion-tab-color", "#f7f7f7");
      }
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
