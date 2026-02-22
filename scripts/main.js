const data = getSiteData();
ensureScheduledPostsPublished(data);
saveSiteData(data);

const headerMenu = document.getElementById("header-menu");
const hamburgerMenu = document.getElementById("hamburger-menu");
const carousel = document.getElementById("carousel");
const categoryGrid = document.getElementById("category-grid");
const postGrid = document.getElementById("post-grid");
const searchPanel = document.getElementById("search-panel");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

let selectedType = new URLSearchParams(window.location.search).get("type") || data.defaultType;

function renderHeader() {
  headerMenu.innerHTML = data.headerTypes
    .map((item) => `<a class="menu-item ${item === selectedType ? "active" : ""}" href="?type=${encodeURIComponent(item)}">${item}</a>`)
    .join("");

  hamburgerMenu.innerHTML = data.hamburgerItems
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");
}

function renderCarousel() {
  carousel.innerHTML = data.carousel
    .map((slide) => `<a class="slide" href="${slide.href}"><img src="${slide.image}" alt="Carousel image" /></a>`)
    .join("");
}

function renderAds() {
  document.querySelector('[data-ad-slot="top"]').textContent = data.ads.top;
  document.querySelector('[data-ad-slot="middle"]').textContent = data.ads.middle;
  document.querySelector('[data-ad-slot="bottom"]').textContent = data.ads.bottom;
  document.getElementById("left-side-ad").textContent = data.ads.left;
  document.getElementById("right-side-ad").textContent = data.ads.right;
}

function renderCategories() {
  categoryGrid.innerHTML = data.categories
    .map((cat) => `
      <a class="card" href="category.html?id=${cat.id}">
        <img src="${cat.image}" alt="${cat.name}" />
        <h3>${cat.name}</h3>
      </a>
    `)
    .join("");
}

function renderPosts() {
  const visiblePosts = data.posts.filter((post) => post.status === "published" && (!selectedType || post.type === selectedType));
  postGrid.innerHTML = visiblePosts
    .map((post) => {
      const category = data.categories.find((cat) => cat.id === post.categoryId);
      return `
      <a class="card" href="post.html?id=${post.id}">
        <img src="${post.image}" alt="${post.title}" />
        <h3>${post.title}</h3>
        <p>${category?.name || "General"} • ${post.type}</p>
      </a>
    `;
    })
    .join("");
}

function setupActions() {
  document.getElementById("search-toggle").addEventListener("click", () => searchPanel.classList.toggle("hidden"));
  document.getElementById("hamburger-toggle").addEventListener("click", () => hamburgerMenu.classList.toggle("hidden"));

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) {
      searchResults.innerHTML = "";
      return;
    }
    const matches = data.posts.filter((post) => [post.title, post.excerpt, post.content].join(" ").toLowerCase().includes(q));
    searchResults.innerHTML = matches.map((post) => `<a href="post.html?id=${post.id}">${post.title}</a>`).join("") || "<p>No results found</p>";
  });
}

renderHeader();
renderCarousel();
renderAds();
renderCategories();
renderPosts();
setupActions();
