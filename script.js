const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const navs = document.querySelectorAll(".nav");

document.getElementById("toggle").onclick = () => {
  sidebar.classList.toggle("collapsed");
};

document.getElementById("theme").onclick = () => {
  document.body.classList.toggle("dark");
};

async function load(src, btn) {
  try {
    const r = await fetch(src);
    if (!r.ok) throw new Error();
    content.innerHTML = await r.text();

    navs.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  } catch {
    content.innerHTML = "<p>加载失败</p>";
  }
}

navs.forEach(btn => {
  btn.onclick = () => load(btn.dataset.src, btn);
});
