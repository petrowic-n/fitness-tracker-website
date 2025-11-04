const mobileNav = () => {
  const headerBtn = document.querySelector(".hamburger-menu");
  const closeBtn = document.querySelector(".close-icon");
  const mobileNav = document.querySelector(".mobile__nav");
  const mobileLinks = document.querySelectorAll(".mobile__links");

  // State
  let isMobileNavOpen = false;

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.top = "0";
    }
  });

  closeBtn.addEventListener("click", () => {
    mobileNav.style.top = "-100%";
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobileNav.style.top = "-100%";
    });
  });
};

export default mobileNav;
