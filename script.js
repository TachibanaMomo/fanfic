const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");
const themeBtn = document.getElementById("themeToggle");
const iframe = document.getElementById("contentFrame");
const navItems = document.querySelectorAll(".nav-item");

// 侧栏开关
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

// 页面切换
navItems.forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    const page = item.dataset.page;

    iframe.src = page;

    navItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    if (window.innerWidth <= 900) {
      sidebar.classList.add("collapsed");
    }
  });
});

// 日 / 夜切换
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");

  themeBtn.textContent =
    document.body.classList.contains("light") ? "🌞" : "🌙";
});
