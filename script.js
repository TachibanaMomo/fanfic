const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");
const iframe = document.getElementById("contentFrame");
const navItems = document.querySelectorAll(".nav-item");

// 收起 / 展开侧边栏
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

// 点击切换内容
navItems.forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();

    const page = item.dataset.page;
    iframe.src = page;

    // 高亮当前项
    navItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    // 手机端自动收起
    if (window.innerWidth <= 900) {
      sidebar.classList.add("collapsed");
    }
  });
});
