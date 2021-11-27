const headerButton = document.querySelector(".header__toggle-button");
const header = document.querySelector(".page-header");
const logoMob = document.querySelector(".page-header__logo-img--mob");
const siteNav = document.querySelector(".header__site-menu");
const headerUserNav = document.querySelector(".header__user-nav");
const headerContacts = document.querySelector(".header__contacts");
const headerSocials = document.querySelector(".header__socials");

headerButton.addEventListener("click", () => {
  header.classList.toggle("page-header--mobile-open");
  headerButton.style.backgroundImage = "url(../img/icon_menu_mobile_close.png)";
  logoMob.setAttribute("src", "img/logo/logo-mobile-menu-open.png");
  siteNav.classList.toggle("header__site-menu--open");
  headerUserNav.classList.toggle("header__user-nav--open");
  headerContacts.classList.toggle("header__contacts--open");
  headerSocials.classList.toggle("header__socials--open");
  if (headerButton.classList.contains("header__toggle-button--opened")) {
    logoMob.setAttribute("src", "img/logo/logo-mobile.png");
  }
  headerButton.classList.toggle("header__toggle-button--opened");
});
