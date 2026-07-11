const thumbnail = "./assets/course-economic-news.png";

const icons = {
  grid: '<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/>',
  book: '<path d="M5 5h9a4 4 0 0 1 4 4v10H9a4 4 0 0 0-4 0V5Z"/><path d="M8 9h6"/><path d="M8 13h5"/>',
  chart: '<path d="M4 17h16"/><path d="M7 14v-4"/><path d="M12 14V6"/><path d="M17 14v-7"/>',
  support: '<path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z"/><path d="M8 11h8"/><path d="M12 7v8"/>',
  spark: '<path d="M12 4a8 8 0 0 0-8 8c0 4 3 7 8 8 5-1 8-4 8-8a8 8 0 0 0-8-8Z"/><path d="M9 12h6"/><path d="M12 9v6"/>',
  trend: '<path d="M5 17 10 12l3 3 6-7"/><path d="M15 8h4v4"/>',
  dumbbell: '<path d="M6 12h12"/><path d="M4 9v6"/><path d="M20 9v6"/>',
  clock: '<path d="M12 4a8 8 0 1 0 8 8"/><path d="M12 8v5l4 2"/>',
};

const topics = [
  ["book", "외국어"],
  ["chart", "경제"],
  ["trend", "재테크"],
  ["dumbbell", "운동"],
  ["spark", "자기계발"],
  ["clock", "교양"],
];

const shortcuts = [
  { href: "#all", icon: "grid", label: "전체" },
  { href: "#english", icon: "book", label: "영어" },
  { href: "#economy", icon: "chart", label: "경제" },
  { href: "#support", icon: "support", label: "지원사업" },
  { href: "#culture", icon: "spark", label: "자기계발" },
];

const sections = [
  {
    id: "all",
    title: "실시간 인기 콘텐츠",
    subtitle: "지금 사람들이 가장 많이 찾는",
    layout: "rail",
    cards: [
      { title: "오늘 제일 중요한<br />경제뉴스 5줄 요약", category: "경제 뉴스 요약", price: "38,700원", oldPrice: "55,000원", discount: "31% OFF", wide: true },
      { title: "진짜 자주 쓰는<br />영어 표현", category: "영어 한 문장", price: "29,900원", oldPrice: "59,000원", discount: "50% OFF", peek: true },
    ],
  },
  {
    title: "HOT 신규 콘텐츠",
    subtitle: "따끈따끈 신상 콘텐츠",
    layout: "rail",
    modifier: "hot",
    cards: [
      { title: "단기간 완성<br />하루 3분 발음 루틴", category: "영어발음 3분 발음 루틴(30일)", price: "39,900원", oldPrice: "69,000원", discount: "43% OFF", wide: true },
      { title: "2026 매일<br />AI 트렌드", category: "비즈니스 AI 요약", price: "39,900원", oldPrice: "69,000원", discount: "41% OFF", peek: true },
    ],
  },
  {
    id: "english",
    title: "영어 완전정복",
    subtitle: "영어공부 쉽게 카톡으로",
    layout: "grid",
    cards: [
      { title: "진짜 자주 쓰는<br />영어 표현들", category: "영어 한 문장", price: "38,700원", oldPrice: "55,000원", discount: "31% OFF" },
      { title: "영화 대사로 배우는<br />영어 패턴", category: "영화 속 영어 패턴", price: "29,900원", oldPrice: "59,900원", discount: "50% OFF" },
      { title: "이상한 나라의 앨리스<br />영어로 읽기", category: "영어원서", price: "29,900원", oldPrice: "60,000원", discount: "50% OFF" },
      { title: "하루 1분 99개<br />영어 왕초보 탈출", category: "왕초보 영어 단어 99", price: "19,900원", oldPrice: "59,900원", discount: "67% OFF" },
    ],
  },
  {
    id: "language",
    title: "제2 외국어",
    subtitle: "일본어, 중국어도 카톡으로",
    layout: "grid",
    cards: [
      { title: "일본어 단어<br />하루 딱 3개씩", category: "일본어 단어", price: "38,700원", oldPrice: "55,000원", discount: "31% OFF" },
      { title: "패턴만 알면<br />일본어가 보인다", category: "일본어 패턴", price: "29,900원", oldPrice: "59,800원", discount: "50% OFF" },
      { title: "중국어 단어<br />하루 딱 3개씩", category: "중국어 단어", price: "38,700원", oldPrice: "55,000원", discount: "31% OFF" },
    ],
  },
  {
    id: "economy",
    title: "경제 BEST",
    subtitle: "돈의 흐름이 보이는",
    layout: "grid",
    cards: [
      { title: "오늘 제일 중요한<br />경제뉴스 5줄 요약", category: "경제 뉴스 요약", price: "38,700원", oldPrice: "55,000원", discount: "31% OFF" },
      { title: "비트코인은 왜<br />4년마다 움직일까?", category: "최소한의 경제상식", price: "29,900원", oldPrice: "55,900원", discount: "47% OFF" },
      { title: "재테크가 처음이라면", category: "재테크 입문", price: "29,900원", oldPrice: "55,900원", discount: "47% OFF" },
    ],
  },
  {
    id: "support",
    title: "지원사업·공공정보",
    subtitle: "놓치기 쉬운 공고를 매일 선별",
    layout: "grid",
    cards: [
      { title: "오늘 마감 임박<br />정부지원사업 공고", category: "지원사업 공고", price: "29,900원", oldPrice: "55,900원", discount: "47% OFF" },
      { title: "우리 지역 행사와<br />공공정보 한눈에", category: "지역 공공정보", price: "19,900원", oldPrice: "39,900원", discount: "50% OFF" },
      { title: "관심 산업 뉴스<br />하루 5줄 브리핑", category: "산업 뉴스 요약", price: "29,900원", oldPrice: "55,900원", discount: "47% OFF" },
    ],
  },
  {
    id: "culture",
    title: "교양 BEST",
    subtitle: "어른들의 지적 출근길",
    layout: "rail",
    cards: [
      { title: "미술 작품<br />어떻게 감상해야 할까?", category: "미술 작품 해설", price: "29,900원", oldPrice: "55,900원", discount: "47% OFF" },
      { title: "클래식 누구나<br />들릴 수 있도록", category: "클래식 입문", price: "29,900원", oldPrice: "55,900원", discount: "47% OFF" },
      { title: "우주가 궁금한<br />출근길 3분", category: "우주 과학", price: "29,900원", oldPrice: "55,900원", discount: "47% OFF" },
    ],
  },
];

const svg = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;

const renderTopicPills = () => {
  const target = document.querySelector("#topic-pills");
  target.innerHTML = topics.map(([icon, label]) => `<span>${svg(icon)}${label}</span>`).join("");
};

const renderShortcuts = () => {
  const target = document.querySelector("#shortcut");
  target.innerHTML = shortcuts
    .map((item) => `<a href="${item.href}"><span>${svg(item.icon)}</span>${item.label}</a>`)
    .join("");
};

const CourseCard = (card) => `
  <article class="course-card${card.peek ? " peek" : ""}${card.wide ? " wide" : ""}">
    <a class="cover" href="#plans">
      <img src="${thumbnail}" alt="" loading="lazy" />
      <span class="discount">${card.discount}</span>
      <strong>${card.title}</strong>
    </a>
    <div class="course-body">
      <p>${card.category}</p>
      <del>${card.oldPrice}</del>
      <b>${card.price}</b>
    </div>
  </article>
`;

const ContentSection = (section, index) => {
  const railId = `card-rail-${section.id || index}`;
  return `
  <section class="content-section ${section.modifier || ""}"${section.id ? ` id="${section.id}"` : ""}>
    <div class="section-head">
      <h2>${section.title}</h2>
      <p>${section.subtitle}</p>
    </div>
    <div class="carousel-shell">
      <button class="carousel-btn prev" type="button" data-rail="${railId}" data-dir="-1" aria-label="${section.title} 이전 카드">‹</button>
      <div class="carousel ${section.layout}" id="${railId}" tabindex="0">
      ${section.cards.map(CourseCard).join("")}
      </div>
      <button class="carousel-btn next" type="button" data-rail="${railId}" data-dir="1" aria-label="${section.title} 다음 카드">›</button>
    </div>
  </section>
`;
};

const renderCatalog = () => {
  document.querySelector("#content-catalog").innerHTML = sections.map(ContentSection).join("");
};

const setupCarouselControls = () => {
  document.querySelectorAll("[data-rail]").forEach((button) => {
    button.addEventListener("click", () => {
      const rail = document.getElementById(button.dataset.rail);
      const direction = Number(button.dataset.dir);
      const distance = Math.max(rail.clientWidth * 0.78, 180);
      rail.scrollBy({ left: distance * direction, behavior: "smooth" });
    });
  });
};

const setupDrawer = () => {
  const drawer = document.querySelector("#site-menu");
  const menuButton = document.querySelector(".menu");
  const closeButton = document.querySelector(".drawer-close");
  const setOpen = (open) => {
    drawer.classList.toggle("open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    menuButton.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("drawer-open", open);
  };

  menuButton.addEventListener("click", () => setOpen(true));
  closeButton.addEventListener("click", () => setOpen(false));
  drawer.addEventListener("click", (event) => {
    if (event.target === drawer || event.target.closest(".drawer-links a")) {
      setOpen(false);
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
};

const setupFeatureTabs = () => {
  const tabs = document.querySelectorAll("[data-feature-tab]");
  const pages = document.querySelectorAll("[data-feature-page]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.featureTab;
      tabs.forEach((item) => item.classList.toggle("active", item === tab));
      pages.forEach((page) => page.classList.toggle("active", page.dataset.featurePage === key));
    });
  });
};

renderTopicPills();
renderShortcuts();
renderCatalog();
setupCarouselControls();
setupDrawer();
setupFeatureTabs();
