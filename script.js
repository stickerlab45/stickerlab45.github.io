const grid = document.querySelector("#grid"),
search = document.querySelector("#search"),
cat = document.querySelector("#cat"),
all = document.querySelector("#all");

let limit = 8;

const images = {
  "Jalur Evakuasi Kiri": "images/jalurevakuasikiri.jpg",
  "Jalur Evakuasi Bawah": "images/jalurevakuasibawah.jpg",
  "EXIT": "images/exit.jpg",
  "FIRE EXIT": "images/fire exit.jpg",
  "EXIT Kanan": "images/exit kanan.jpg",
  "EXIT Kiri": "images/exit kiri.jpg",
  "EXIT Atas": "images/exit atas atas kanan.jpg",
  "EXIT Bawah": "images/exit bawah kanan.jpg",
  "Titik Kumpul": "images/titikkumpul.jpg"
};

function render() {
  let q = search.value.toLowerCase();
  let c = cat.value;

  let list = products.filter(p =>
    (!q || p[0].toLowerCase().includes(q)) &&
    (c === "Semua" || p[1] === c)
  );

  grid.innerHTML = list.slice(0, limit).map(p => {
    const image = images[p[0]];

    return `
      <article class="card">
        <div class="signbox">
          ${
            image
              ? `<img src="${image}" alt="${p[0]}" style="width:100%;height:100%;object-fit:contain;">`
              : `<div class="sign ${p[3]}">${p[2]}</div>`
          }
        </div>

        <h3>${p[0]}</h3>

        <p>Tanda keselamatan – ukuran dan material dapat disesuaikan.</p>

        <div class="actions">
          <a href="https://wa.me/6282321000304">◉</a>
          <a href="#">▣</a>
          <a href="#">◉</a>
        </div>
      </article>
    `;
  }).join("");

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
