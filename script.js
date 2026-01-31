document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");
  const toggleSidebar = document.getElementById("toggleSidebar");
  const toggleTheme = document.getElementById("toggleTheme");

  // 默认加载作者介绍
  loadPage("pages/about.html");

  // 侧栏开关
  toggleSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
  });

  // 夜间模式
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  // 侧栏链接点击
  sidebar.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      const page = e.target.dataset.page;
      if (page) loadPage(page);
    }
  });

  function loadPage(url) {
    fetch(url)
      .then(res => res.text())
      .then(html => {
        content.innerHTML = html;
      })
      .catch(() => {
        content.innerHTML = "<p>加载失败。</p>";
      });
  }
});
