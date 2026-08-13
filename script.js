const grid = document.querySelector("#grid"),
search = document.querySelector("#search"),
cat = document.querySelector("#cat"),
all = document.querySelector("#all");

let limit = 8;

function render() {
  let q = search.value.toLowerCase();
  let c = cat.value;

  let list = products.filter(p =>
    (!q || p[0].toLowerCase().includes(q)) &&
    (c === "Semua" || p[1] === c)
  );

  grid.innerHTML = list.slice(0, limit).map(p => `
    <article class="card">

      <div class="signbox">
        ${p[4]
          ? `<img src="${p[4]}" alt="${p[0]}" class="product-image">`
          : `<div class="sign ${p[3]}">${p[2]}</div>`
        }
      </div>

      <h3>${p[0]}</h3>

      <p>Tanda keselamatan – ukuran dan material dapat disesuaikan.</p>

      <div class="actions">
        <a href="https://wa.me/6285640971323">◉</a>
        <a href="https://id.shp.ee/pbzR8VpF">▣</a>
        <a href="https://vt.tiktok.com/ZSV1DRA7N/?page=Mall">◉</a>
      </div>

    </article>
  `).join("");

  all.style.display = list.length > limit ? "block" : "none";
}

document.querySelectorAll(".filters button").forEach(b => {
  b.onclick = () => {
    cat.value = b.dataset.c;
    limit = 8;
    render();
  };
});

search.oninput = render;

cat.onchange = () => {
  limit = 8;
  render();
};

all.onclick = () => {
  limit = products.length;
  render();
};

render();
