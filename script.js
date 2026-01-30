const content = document.getElementById("content");
const navs = document.querySelectorAll(".nav");
const sidebar = document.getElementById("sidebar");

async function load(src, btn) {
  try {
    const r = await fetch(src);
    if (!r.ok) throw new Error("404");
    const html = await r.text();
    content.innerHTML = html;

    navs.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  } catch {
    content.innerHTML = "<p>加载失败</p>";
  }
}

navs.forEach(btn => {
  btn.onclick = () => load(btn.dataset.src, btn);
});

document.getElementById("btnToggle").onclick = () => {
  sidebar.classList.toggle("collapsed");
};

document.getElementById("btnTheme").onclick = () => {
  document.body.classList.toggle("dark");
};
