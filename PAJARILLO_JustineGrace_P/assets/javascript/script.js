document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 50);

  /* --- Mobile Menu Toggle --- */
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("fa-times");
      navbar.classList.toggle("active");
    });

    navbar.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuIcon.classList.remove("fa-times");
        navbar.classList.remove("active");
      });
    });

    window.addEventListener("scroll", () => {
      if (navbar.classList.contains("active")) {
        menuIcon.classList.remove("fa-times");
        navbar.classList.remove("active");
      }
    });
  }

  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  const skillSection = document.querySelector(".skills-container");
  if (skillSection) {
    const skillBars = document.querySelectorAll(".bar span");

    const animateSkills = () => {
      const sectionPos = skillSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 1.3;

      if (sectionPos < screenPos) {
        skillBars.forEach((bar) => {
          const targetWidth = bar.getAttribute("style").split(":")[1];
          bar.style.width = targetWidth;
        });
        window.removeEventListener("scroll", animateSkills);
      }
    };
    window.addEventListener("scroll", animateSkills);
  }

  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;
  const body = document.body;

  const isDark = body.classList.contains("dark-mode");
  if (isDark && themeIcon) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isDarkModeNow = body.classList.contains("dark-mode");

      localStorage.setItem("theme", isDarkModeNow ? "dark" : "light");

      if (themeIcon) {
        if (isDarkModeNow) {
          themeIcon.classList.replace("fa-moon", "fa-sun");
        } else {
          themeIcon.classList.replace("fa-sun", "fa-moon");
        }
      }
    });
  }
});
