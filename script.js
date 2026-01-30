const content = document.getElementById("content");
const navItems = document.querySelectorAll(".nav-item");
const sidebar = document.getElementById("sidebar");

/* 加载页面 */
async function loadPage(src, button) {
  try {
    const res = await fetch(src);
    const html = await res.text();
    content.innerHTML = html;

    navItems.forEach(b => b.classList.remove("active"));
    if (button) button.classList.add("active");

  } catch {
    content.innerHTML = "<p>加载失败</p>";
  }
}

/* 绑定点击 */
navItems.forEach(btn => {
  btn.addEventListener("click", () => {
    loadPage(btn.dataset.src, btn);
  });
});

/* 侧边栏收起 */
document.getElementById("toggleSidebar")
  .addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });

/* 夜间模式 */
const themeBtn = document.getElementById("toggleTheme");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});
