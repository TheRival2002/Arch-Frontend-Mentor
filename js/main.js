// Mobile nav menu
const mobileNav = document.querySelector(".mobile-nav");
const primaryNav = document.querySelector(".primary-nav");
const primaryNavItems = document.querySelectorAll(
  ".primary-nav ul *:not(:last-child)"
);

mobileNav.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? mobileNav.setAttribute("aria-expanded", false)
    : mobileNav.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryNavItems.forEach((primaryNavItem, index) => {
    primaryNavItem.style.animationDelay = `${index * 150}ms`;
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    primaryNav.removeAttribute("data-visible");
    mobileNav.setAttribute("aria-expanded", false);
  }
});

// underline on navigation

const firstSection = document.querySelector("main :first-child");

// carousel
const btns = document.querySelectorAll(".project-carousel-nav button");
const infos = document.querySelectorAll(".collection-info");
const arrows = document.querySelectorAll(".project-carousel-arrows button");

let counter = 0;

infos.forEach((info, index) => {
  const infoItems = info.querySelectorAll(".collection-desc *:not(br)");
  if (index === 0) {
    info.classList.add("visible");
    infoItems.forEach((infoItem, infoItemIndex) => {
      infoItem.style.transition = `
      filter 350ms ease, opacity 2500ms ease, transform 1100ms ease ${
        (infoItemIndex + 1) * 200
      }ms
      `;
    });
    btns.forEach((btn, index) => {
      if (index === 0) {
        btn.classList.add("active");
      }
    });
  }
});

btns.forEach((btn) => {
  btn.addEventListener("click", (currBtn) => {
    const currentBtn = currBtn.target;
    const currBtnIndex = Number(currentBtn.textContent.trim().slice(1));
    infos.forEach((info, index) => {
      const infoItems = info.querySelectorAll(".collection-desc *:not(br)");
      if (!(currBtnIndex - 1 === index)) {
        info.classList.remove("visible");
      } else {
        infoItems.forEach((infoItem, infoItemIndex) => {
          infoItem.style.transition = `
          filter 350ms ease, opacity 2500ms ease, transform 1100ms ease ${
            (infoItemIndex + 1) * 200
          }ms
          `;
        });
        info.classList.add("visible");
        btns.forEach((el) => {
          el.classList.remove("active");
        });
        currentBtn.classList.add("active");
      }
    });
  });
});

arrows.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    index === 0 ? counter-- : counter++;
    if (counter > infos.length - 1) {
      counter = 0;
    }
    if (counter < 0) {
      counter = infos.length - 1;
    }
    infos.forEach((info, infoIndex) => {
      const infoItems = info.querySelectorAll(".collection-desc *:not(br)");
      if (counter === infoIndex) {
        info.classList.add("visible");
        infoItems.forEach((infoItem, infoItemIndex) => {
          infoItem.style.transition = `
          filter 350ms ease, opacity 2500ms ease, transform 1100ms ease ${
            (infoItemIndex + 1) * 200
          }ms
          `;
        });
      } else {
        info.classList.remove("visible");
      }
    });
  });
});

// Setting up light/dark mode

const modeToggle = document.querySelector(".light-dark-toggle");
const toggler = document.querySelector(".toggler");
const darkModeEnabled = document.querySelector(".dark-mode-enabled");

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-enabled");
  if (document.body.classList.contains("dark-mode-enabled")) {
    toggler.style.left = "calc(100% - 2.5rem)";
    modeToggle.dataset.mode = "dark";
  } else {
    toggler.style.left = "0";
    modeToggle.dataset.mode = "light";
  }
  let mode = modeToggle.dataset.mode;
  addToLS(mode);

  modeToggle.setAttribute("aria-label", `${mode} mode`);
});

window.addEventListener("DOMContentLoaded", () => {
  const mode = getFromLS();

  if (mode === "dark") {
    document.body.classList.add("dark-mode-enabled");
    toggler.style.left = "calc(100% - 2.5rem)";
    modeToggle.dataset.mode = "dark";
    modeToggle.setAttribute("aria-label", `${mode} mode`);
  }
});

function addToLS(mode) {
  localStorage.setItem("mode", mode);
}

function getFromLS(mode) {
  return localStorage.getItem("mode");
}
