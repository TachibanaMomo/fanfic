const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const toggleBtn = document.getElementById("toggleSidebar");
const themeBtn = document.getElementById("themeToggle");
const links = document.querySelectorAll("[data-page]");

/* ===== 默认加载作者介绍 ===== */
loadPage("pages/about.html");

/* ===== 侧栏开关 ===== */
toggleBtn.onclick = () => {
  sidebar.classList.toggle("closed");
};

/* ===== 夜间模式（默认白天） ===== */
themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
};

/* ===== 页面加载 + 高亮 + 自动收起 ===== */
links.forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    const page = link.dataset.page;

    loadPage(page);

    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // 选完文章自动收起侧栏（尤其手机）
    sidebar.classList.add("closed");
  };
});

function loadPage(url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      content.innerHTML = html;
    })
    .catch(() => {
      content.innerHTML = "<p>加载失败</p>";
    });
}
