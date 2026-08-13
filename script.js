const grid = document.querySelector("#grid");
const search = document.querySelector("#search");
const cat = document.querySelector("#cat");
const all = document.querySelector("#all");

let limit = 8;

function render() {
  let q = search.value.toLowerCase();
  let c = cat.value;

  let list = products.filter(
    p =>
      (!q || p[0].toLowerCase().includes(q)) &&
      (c === "Semua" || p[1] === c)
  );

  grid.innerHTML = list
    .slice(0, limit)
    .map(
      p => `
      <article class="card">

        <div class="signbox">
          <div class="sign ${p[3]}">${p[2]}</div>
        </div>

        <h3>${p[0]}</h3>

        <p>
          Tanda keselamatan – ukuran dan material dapat disesuaikan.
        </p>

        <div class="actions">

          <!-- WHATSAPP -->
          <a
            href="https://wa.me/6285640971323"
            target="_blank"
            title="Chat WhatsApp"
          >◉</a>

          <!-- SHOPEE -->
          <a
            href="https://id.shp.ee/pbzR8VpF"
            target="_blank"
            title="Beli di Shopee"
          >▣</a>

          <!-- TIKTOK SHOP BY TOKOPEDIA -->
          <a
            href="https://vt.tiktok.com/ZSV1DRA7N/?page=Mall"
            target="_blank"
            title="Beli di TikTok Shop"
          >◉</a>

        </div>

      </article>
    `
    )
    .join("");

  all.style.display = list.length > limit ? "block" : "none";
}

document.querySelectorAll(".filters button").forEach(button => {
  button.onclick = () => {
    cat.value = button.dataset.c;
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
