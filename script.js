const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");
const themeBtn = document.getElementById("themeToggle");
const iframe = document.getElementById("contentFrame");
const navItems = document.querySelectorAll(".nav-item");

// 侧栏开关
toggleBtn.onclick = () => {
  sidebar.classList.toggle("collapsed");
};

// 切换内容
navItems.forEach(item => {
  item.onclick = e => {
    e.preventDefault();
    iframe.src = item.dataset.page;

    navItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  };
});

// 日 / 夜模式（默认夜）
themeBtn.onclick = () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    document.body.style.background = "#f5f5f5";
    document.body.style.color = "#222";
    themeBtn.textContent = "🌞";
  } else {
    document.body.style.background = "#111";
    document.body.style.color = "#ddd";
    themeBtn.textContent = "🌙";
  }
};
