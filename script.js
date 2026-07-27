const WHATSAPP_BASE = "https://wa.me/5563992226382?text=";

const IMG = {
  mouraAuto: "Imagens/produtos/moura-automotiva.webp",
  mouraMoto: "Imagens/produtos/moura-moto.webp",
  mouraPesada: "Imagens/produtos/moura-pesada.webp",
  mouraEfb: "Imagens/produtos/moura-efb.webp",
  mouraAgm: "Imagens/produtos/moura-agm.webp",
  heliarAuto: "Imagens/produtos/heliar-auto.png",
  heliarMoto: "Imagens/produtos/heliar-moto.png",
  heliarFrota: "Imagens/produtos/heliar-frota.png",
  capBateria: "Imagens/produtos/cap-bateria.png",
};

const products = [
  {
    id: "moura-60",
    category: "automotiva",
    brand: "Moura",
    name: "Moura",
    tag: "Mais pedida",
    desc: "Ideal para carros de passeio e utilitários leves. Partida firme e boa vida útil.",
    image: IMG.mouraAuto,
    specs: {
      Capacidade: "60 Ah",
      Tecnologia: "SLI / Chumbo-ácido",
      Aplicação: "Veículos leves",
      Garantia: "Até 18 meses*",
    },
  },
  {
    id: "moura-70",
    category: "automotiva",
    brand: "Moura",
    name: "Moura Extra",
    tag: "Carros médios",
    desc: "Mais reserva de energia para veículos com mais acessórios elétricos.",
    image: IMG.mouraEfb,
    specs: {
      Capacidade: "70 Ah",
      Tecnologia: "SLI / Chumbo-ácido",
      Aplicação: "Leves e médios",
      Garantia: "Até 18 meses*",
    },
  },
  {
    id: "heliar-60",
    category: "automotiva",
    brand: "Heliar",
    name: "Heliar",
    tag: "Custo-benefício",
    desc: "Boa relação custo e desempenho para o dia a dia em Palmas.",
    image: IMG.heliarAuto,
    specs: {
      Capacidade: "60 Ah",
      Tecnologia: "Chumbo-ácido",
      Aplicação: "Veículos leves",
      Garantia: "Até 12 meses*",
    },
  },
  {
    id: "zetta-60",
    category: "automotiva",
    brand: "Zetta",
    name: "Zetta",
    tag: "Pronta entrega",
    desc: "Opção econômica com qualidade comprovada para uso urbano.",
    image: IMG.capBateria,
    specs: {
      Capacidade: "60 Ah",
      Tecnologia: "Chumbo-ácido",
      Aplicação: "Veículos leves",
      Garantia: "Até 12 meses*",
    },
  },
  {
    id: "cral-75",
    category: "automotiva",
    brand: "Cral",
    name: "Cral",
    tag: "SUV / Pick-up",
    desc: "Indicado para utilitários e veículos que pedem mais amperagem.",
    image: IMG.heliarFrota,
    specs: {
      Capacidade: "75 Ah",
      Tecnologia: "Chumbo-ácido",
      Aplicação: "Médios e utilitários",
      Garantia: "Até 12 meses*",
    },
  },
  {
    id: "moto-5ah",
    category: "moto",
    brand: "Moura / Heliar",
    name: "Bateria de moto",
    tag: "Motos",
    desc: "Modelos para motos e ciclomotores — consulte o encaixe do seu modelo.",
    image: IMG.mouraMoto,
    specs: {
      Capacidade: "4–8 Ah",
      Tecnologia: "Selada / AGM",
      Aplicação: "Motocicletas",
      Garantia: "Conforme marca*",
    },
  },
  {
    id: "estacionaria-45",
    category: "estacionaria",
    brand: "Linha estacionária",
    name: "Estacionária",
    tag: "Nobreak / Solar",
    desc: "Para nobreak, sistemas solares e backup de energia residencial.",
    image: IMG.mouraAgm,
    specs: {
      Capacidade: "45 Ah",
      Tecnologia: "Ciclo profundo",
      Aplicação: "Nobreak / solar",
      Garantia: "Conforme marca*",
    },
  },
  {
    id: "estacionaria-100",
    category: "estacionaria",
    brand: "Linha estacionária",
    name: "Estacionária Plus",
    tag: "Alta autonomia",
    desc: "Maior reserva para sistemas que ficam mais tempo em uso.",
    image: IMG.mouraPesada,
    specs: {
      Capacidade: "100 Ah",
      Tecnologia: "Ciclo profundo",
      Aplicação: "Solar / backup",
      Garantia: "Conforme marca*",
    },
  },
  {
    id: "nautica-105",
    category: "nautica",
    brand: "Linha náutica",
    name: "Náutica",
    tag: "Embarcações",
    desc: "Para barcos e usos náuticos que exigem robustez e ciclos intensos.",
    image: IMG.heliarFrota,
    specs: {
      Capacidade: "105 Ah",
      Tecnologia: "Ciclo profundo",
      Aplicação: "Náutica",
      Garantia: "Conforme marca*",
    },
  },
];

function waLink(productName) {
  const msg = `Olá Palmas Bateria! Quero orçamento da ${productName}. Pode me passar disponibilidade e valor?`;
  return WHATSAPP_BASE + encodeURIComponent(msg);
}

function renderProducts(filter = "all") {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = products
    .map((product, index) => {
      const hidden = filter !== "all" && product.category !== filter;
      const specs = Object.entries(product.specs)
        .map(
          ([label, value]) =>
            `<li><span>${label}</span><strong>${value}</strong></li>`
        )
        .join("");

      return `
        <article
          class="product reveal ${hidden ? "is-hidden" : ""}"
          data-category="${product.category}"
          style="--delay: ${(index % 6) * 0.06}s"
        >
          <div class="product__media">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="product__body">
            <div>
              <div class="product__top">
                <p class="product__brand">${product.brand}</p>
                <span class="product__tag">${product.tag}</span>
              </div>
              <h3>${product.name}</h3>
              <p class="product__desc">${product.desc}</p>
            </div>
            <ul class="product__specs">${specs}</ul>
            <div class="product__footer">
              <div class="product__quote">
                <small>Sem preço fixo</small>
                <strong>Solicite orçamento</strong>
              </div>
              <a class="btn btn--whatsapp btn--sm" href="${waLink(product.name)}" target="_blank" rel="noopener noreferrer">
                Pedir orçamento
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  observeReveals();
  setupTilt();
}

function setupFilters() {
  const buttons = document.querySelectorAll(".filter");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("is-active"));
      button.classList.add("is-active");
      renderProducts(button.dataset.filter || "all");
    });
  });

  document.querySelectorAll("[data-filter-jump]").forEach((link) => {
    link.addEventListener("click", () => {
      const value = link.getAttribute("data-filter-jump");
      const target = document.querySelector(`.filter[data-filter="${value}"]`);
      if (target) target.click();
    });
  });
}

function observeReveals() {
  const nodes = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  nodes.forEach((el) => observer.observe(el));
}

function setupHeader() {
  const header = document.querySelector(".site-header");
  const progress = document.querySelector(".scroll-progress span");
  const hero = document.querySelector(".hero");
  if (!header) return;

  const onScroll = () => {
    const y = window.scrollY;
    const heroH = hero ? hero.offsetHeight : 480;
    const switchAt = Math.max(80, heroH * 0.18);
    header.classList.toggle("is-scrolled", y > switchAt);

    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(100, (y / max) * 100) : 0;
      progress.style.width = `${ratio}%`;
    }
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
}

function splitBrand() {
  const brand = document.querySelector("[data-split]");
  if (!brand) return;
  const text = brand.textContent.trim();
  brand.textContent = "";
  [...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.className = "char";
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${0.12 + i * 0.045}s`;
    brand.appendChild(span);
  });
}

function setupTilt() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  document.querySelectorAll(".product").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-6px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function staggerFeatures() {
  document.querySelectorAll(".feature, .category, .brands__list li, .gallery__item, .feedback").forEach((el, i) => {
    el.style.setProperty("--delay", `${(i % 5) * 0.08}s`);
  });
}

function setupMobileNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const backdrop = document.querySelector(".nav-backdrop");
  if (!header || !toggle || !nav) return;

  const setOpen = (open) => {
    header.classList.toggle("nav-open", open);
    document.body.classList.toggle("nav-locked", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    if (backdrop) {
      backdrop.hidden = !open;
      backdrop.classList.toggle("is-visible", open);
    }
  };

  toggle.addEventListener("click", () => {
    setOpen(!header.classList.contains("nav-open"));
  });

  backdrop?.addEventListener("click", () => setOpen(false));

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth >= 720) setOpen(false);
    },
    { passive: true }
  );
}

document.getElementById("year").textContent = String(new Date().getFullYear());
splitBrand();
setupHeader();
setupMobileNav();
setupFilters();
staggerFeatures();
renderProducts("all");
observeReveals();
