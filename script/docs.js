const lightTheme = {
  "--primary-color": "#1dadf0",
  "--primary-text": "#212121",
  "--secondary-text": "#757575",
  "--divider-color": "#BDBDBD",
  "--background-primary": "#fcfcfc",
  "--background-secondary": "#fefefe",
  "--danger-color": "#f87171",
  "--success-color": "#34d399",
  "--warn-color": "#facc15",
};

const darkTheme = {
  "--primary-color": "#2a93c4",
  "--primary-text": "#e2e2e2",
  "--secondary-text": "#dddddd",
  "--divider-color": "#3b3b3b",
  "--background-primary": "#090909",
  "--background-secondary": "#050505",
  "--danger-color": "#c73232",
  "--success-color": "#1eb47d",
  "--warn-color": "#c9a410",
};

const toggleTheme = () => {
  if (themeBtn.classList.contains("fa-moon")) {
    sessionStorage.setItem("xTheme", "dark");
    themeBtn.classList.add("fa-sun")
    themeBtn.classList.remove("fa-moon")
    setTheme(darkTheme);
  } else {
    sessionStorage.setItem("xTheme", "light");
    themeBtn.classList.remove("fa-sun")
    themeBtn.classList.add("fa-moon")
    setTheme(lightTheme);
  }
};

const setTheme = (theme) => {
  const root = document.querySelector(":root");
  for (key in theme) {
    root.style.setProperty(key, theme[key]);
  }
};

function setActivePage(currentHash) {
  window.scrollTo(0, 0);
  if (currentHash === "") {
    history.go(-1);
    return;
  }
  const prevActive = document.querySelector(".sidebar-menu-item.active");
  prevActive && prevActive.classList.remove("active");
  const divs = document.querySelectorAll("main > div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
  }

  const currentActive = document.querySelector(`a[href="#${currentHash}"]`);
  document.getElementsByClassName("sidebar")[0].classList.remove("show");
  menuBtn.children[0].classList.remove("fa-times");
  currentActive.parentElement.classList.add("active");
  document.getElementById(currentHash).style.display = "block";
}

const themeBtn = document.querySelector(".theme-icon");
themeBtn.addEventListener("click", toggleTheme);
const menuBtn = document.querySelector(".nav-menu-resp");
menuBtn.addEventListener("click", () => {
  const sideNav = document.querySelector(".sidebar");
  sideNav.classList.toggle("show");
  menuBtn.children[0].classList.toggle("fa-times");
});

window.addEventListener("hashchange", (e) => {
  const currentHash = e.newURL.split("#")[1];
  setActivePage(currentHash);
});

if (sessionStorage.getItem("xTheme") === "light") {
  setTheme(lightTheme);
  themeBtn.classList.add("fa-moon")
  themeBtn.classList.remove("fa-sun")
}

if (window.location.pathname === "/docs.html") {
  if (window.location.hash) {
    currentHash = window.location.hash.slice(1);
    setActivePage(currentHash);
  } else {
    setActivePage("avatar");
  }
}