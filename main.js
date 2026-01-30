document.addEventListener("click", e => {
  const link = e.target.closest("[data-article]");
  if (!link) return;

  e.preventDefault();

  const file = link.dataset.article;
  const content = document.getElementById("content");

  fetch(`articles/${file}`)
    .then(res => {
      if (!res.ok) throw new Error(res.status);
      return res.text();
    })
    .then(html => {
      content.innerHTML = html;
    })
    .catch(err => {
      console.error(err);
      content.innerHTML = "<p>加载失败</p>";
    });
});