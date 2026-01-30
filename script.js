document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-article]");
  if (!link) return;

  e.preventDefault();

  const file = link.dataset.article;
  const content = document.getElementById("content");

  fetch(`./articles/${file}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("加载失败：" + res.status);
      }
      return res.text();
    })
    .then((html) => {
      content.innerHTML = html;
    })
    .catch((err) => {
      content.innerHTML = `<p class="text-red-500">${err}</p>`;
    });
});