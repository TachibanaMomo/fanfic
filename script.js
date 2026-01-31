const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const toggleBtn = document.getElementById("toggleSidebar");
const themeBtn = document.getElementById("themeToggle");

function bindLinks() {
  document.querySelectorAll("[data-page]").forEach(link => {
    link.onclick = e => {
      e.preventDefault();
      const url = link.dataset.page;
      loadPage(url);

      document.querySelectorAll(".active")
        .forEach(a => a.classList.remove("active"));
      link.classList.add("active");

      sidebar.classList.add("closed");
    };
  });
}

function loadPage(url) {
  fetch(url)
    .then(r => r.text())
    .then(html => content.innerHTML = html)
    .catch(() => content.innerHTML = "<p>加载失败</p>");
}

/* 初始加载作者介绍 */
loadPage("pages/about.html");

document
  .querySelector('[data-page="pages/about.html"]')
  .classList.add("active");

/* 绑定事件 */
bindLinks();

toggleBtn.onclick = () => {
  sidebar.classList.toggle("closed");
};

themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
};
