const photo = (path) => encodeURI(`assets/media/photos/${path}.jpg`);
const poster = (path) => encodeURI(`assets/media/posters/${path.replace(/\.[^.]+$/, "")}.jpg`);
const mediaFile = (path) => encodeURI(path);

const fixedSteps = [
  ["Presentación", "Qué se hizo y por qué forma parte del proyecto."],
  ["Tradición trabajada", "Patrimonio, repertorio, texto, baile o costumbre abordada."],
  ["Del pasado al presente", "Remix, rap, grabación, vídeo o interpretación actual."],
  ["Evidencias", "Fotos, vídeos, carteles, audios o materiales del alumnado."],
  ["Resultado", "Aprendizaje y valor cultural de la actividad."]
];

const pages = {
  "tradicion-extremena": {
    eyebrow: "Patrimonio cercano",
    title: "Tradición musical extremeña",
    lead: "Recorrido por canciones, fiestas, bailes e instrumentos que conectan el aula con la memoria cultural de Extremadura.",
    subsections: [
      {
        id: "navidad",
        title: "Navidad y tradición oral",
        summary: "Recuperación de repertorios navideños y canciones transmitidas por familias, mayores y comunidad.",
        tradition: "Villancicos, encuentros intergeneracionales y repertorio oral vinculado a la Navidad.",
        present: "El alumnado documenta, interpreta y graba la tradición para convertirla en memoria audiovisual.",
        result: "La actividad refuerza el vínculo entre generaciones y convierte la música popular en material vivo de aprendizaje.",
        tags: ["Tradición oral", "Familias", "Vídeo"],
        photos: [
          "Navidad/Residencia de ancianos/IMG_5033",
          "Navidad/Residencia de ancianos/IMG_5035",
          "Navidad/Residencia de ancianos/IMG_5038",
          "Navidad/Residencia de ancianos/IMG_5036",
          "Navidad/Residencia de ancianos/IMG_5051"
        ],
        videos: [
          "Navidad/IMG_3929.MOV",
          "Navidad/IMG_3930.MOV",
          "Navidad/IMG_3931.MOV",
          "Navidad/IMG_3933.MOV",
          "Navidad/IMG_3934.MOV",
          "Navidad/IMG_3935.MOV",
          "Navidad/IMG_3936.MOV",
          "Navidad/IMG_3937.MOV",
          "Navidad/Residencia de ancianos/IMG_5054.mov"
        ]
      },
      {
        id: "semana-santa",
        title: "Semana Santa",
        summary: "Espacio reservado para documentar músicas, sonidos procesionales y memoria sonora de la Semana Santa.",
        tradition: "Marchas, cantos, silencio ritual, percusión y paisaje sonoro de la celebración.",
        present: "La sección queda preparada para incorporar registros, entrevistas o piezas sonoras cuando se añadan al proyecto.",
        result: "Pendiente de evidencias en la carpeta correspondiente.",
        tags: ["Pendiente", "Paisaje sonoro"],
        photos: [],
        videos: []
      },
      {
        id: "romerias",
        title: "Romerías y fiestas populares",
        summary: "Fiestas, encuentros y celebraciones populares como espacio de música compartida y participación comunitaria.",
        tradition: "Romerías, celebraciones locales, carnaval y otras fiestas donde la música acompaña la vida social.",
        present: "Las evidencias audiovisuales permiten observar cómo se baila, se canta y se participa hoy en esas celebraciones.",
        result: "El alumnado identifica la tradición como una práctica viva, no como una pieza aislada del pasado.",
        tags: ["Fiesta popular", "Comunidad", "Cuerpo"],
        photos: [],
        videos: [
          "romerias/IMG_6235.MOV",
          "romerias/IMG_6236.MOV",
          "romerias/IMG_6237.MOV",
          "romerias/IMG_6239.MOV",
          "romerias/IMG_6312.MOV",
          "romerias/IMG_6893.MOV",
          "carnavales/IMG_5438.MOV",
          "carnavales/IMG_5439.MOV",
          "carnavales/IMG_5440.mov",
          "Halloween/IMG_3037.MOV"
        ]
      },
      {
        id: "bailes",
        title: "Bailes tradicionales: Tierra de Barros",
        summary: "Trabajo corporal y musical sobre bailes tradicionales del entorno, con atención al ritmo, el gesto y la transmisión.",
        tradition: "Bailes populares vinculados a Tierra de Barros y al patrimonio festivo extremeño.",
        present: "La danza se registra en vídeo y foto para analizar pasos, roles, energía colectiva y posibilidades de reinterpretación.",
        result: "El baile se convierte en una forma directa de comprender patrimonio, coordinación y convivencia.",
        tags: ["Danza", "Tierra de Barros", "Identidad"],
        photos: [
          "bailes tradicionales/IMG_7054",
          "bailes tradicionales/IMG_7055",
          "bailes tradicionales/IMG_7056",
          "bailes tradicionales/IMG_7057"
        ],
        videos: [
          "bailes tradicionales/IMG_7053.mov",
          "bailes tradicionales/IMG_7061.MOV"
        ]
      },
      {
        id: "instrumentos",
        title: "Exposición de instrumentos tradicionales extremeños",
        summary: "Muestra de instrumentos como objetos culturales, sonoros y educativos.",
        tradition: "Instrumentos tradicionales, pequeñas percusiones y recursos usados para acompañar canciones y bailes.",
        present: "La exposición se transforma en archivo visual para comparar timbres tradicionales con producción digital actual.",
        result: "El alumnado reconoce el instrumento como tecnología cultural: una herramienta para crear, acompañar y transmitir memoria.",
        tags: ["Instrumentos", "Timbre", "Exposición"],
        photos: [
          "Exposición de instrumentos tradicionales/IMG_7081",
          "Exposición de instrumentos tradicionales/IMG_7082",
          "Exposición de instrumentos tradicionales/IMG_7086"
        ],
        videos: [
          "Exposición de instrumentos tradicionales/IMG_7083.MOV",
          "Exposición de instrumentos tradicionales/IMG_7084.MOV"
        ]
      }
    ]
  },
  "palabra-remix": {
    eyebrow: "Lengua, ritmo y voz",
    title: "De la palabra tradicional al remix",
    lead: "La poesía, el recitado y la palabra popular se convierten en materia rítmica para trabajar rap, interpretación y creación sonora.",
    subsections: [
      {
        id: "poesia",
        title: "Poesía antigua llevada a lenguajes actuales",
        summary: "Trabajo de actualización de textos y formas orales mediante ritmo, voz, base musical y puesta en escena.",
        tradition: "Textos antiguos, romances, poemas y palabra transmitida desde la cultura oral o literaria.",
        present: "El alumnado explora cómo cambiar la métrica, la intención y el soporte transforma la recepción del texto.",
        result: "La tradición verbal se entiende como material creativo que puede dialogar con códigos actuales.",
        tags: ["Poesía", "Oralidad", "Actualización"],
        photos: [],
        videos: []
      },
      {
        id: "rap",
        title: "Rap recitado",
        summary: "Recitado rítmico y rap como puente entre patrimonio verbal y música urbana.",
        tradition: "Uso expresivo de la voz, la rima y la memoria oral.",
        present: "El rap permite reescribir, interpretar y grabar textos desde un lenguaje cercano al alumnado.",
        result: "La actividad favorece competencia lingüística, presencia escénica, creatividad y escucha crítica.",
        tags: ["Rap", "Rima", "Grabación"],
        photos: [],
        videos: ["rap y palabra/b1be4103-325e-48ed-8dab-ed54cb6b302d.MP4"]
      }
    ]
  },
  espana: {
    eyebrow: "Red nacional",
    title: "Burgos - Instituto Diego Porcelos",
    lead: "Colaboración nacional para comparar repertorios, danzas y formas de transmisión musical con el IES Conde Diego Porcelos de Burgos.",
    subsections: [
      {
        id: "burgos",
        title: "Burgos: IES Conde Diego Porcelos",
        summary: "Colaboración nacional para compartir repertorios como la Danza del Escarrete o cantos de vendimia.",
        tradition: "Patrimonio musical burgalés, danza, repertorio agrícola y memoria local.",
        present: "El intercambio permite comparar tradiciones y preparar reinterpretaciones desde una lógica colaborativa.",
        result: "Se refuerza la cooperación intercentros y la comprensión de la diversidad cultural española.",
        tags: ["Burgos", "Intercentros", "Pendiente"],
        photos: [],
        videos: []
      }
    ]
  },
  erasmus: {
    eyebrow: "Músicas que viajan",
    title: "Tradiciones que viajan: Erasmus y eTwinning",
    lead: "Erasmus y eTwinning abren el proyecto a una lectura internacional de la música, la identidad, el patrimonio compartido y el intercambio cultural.",
    subsections: [
      {
        id: "etwinning",
        title: "eTwinning: Cultural Echoes 2026",
        summary: "Proyecto eTwinning 2025-26 Cultural Echoes: Unseen Threads, Shared Heritage, centrado en descubrir vínculos culturales y patrimonio compartido.",
        tradition: "Patrimonio cultural, memoria, tradiciones locales y ecos comunes entre comunidades educativas internacionales.",
        present: "La colaboración digital permite compartir presentaciones, evidencias, certificados y materiales creados por el alumnado con una red de países: España, Italia, Grecia, Francia, Turquía y Jordania, con siete participaciones internacionales.",
        result: "El alumnado sitúa su tradición en diálogo con otras culturas y comprende que el patrimonio también se construye desde la colaboración online.",
        tags: ["eTwinning", "Cultural Echoes", "7 países"],
        photos: [
          "etwinning cultural echoes/PHOTO-2026-05-25-17-08-54",
          "etwinning cultural echoes/PHOTO-2026-05-25-17-08-54 2"
        ],
        videos: [],
        links: [
          {
            label: "Abrir Cultural Echoes 2026",
            href: "https://www.emaze.com/@ALFTTLQTR/cultural-echoes-2026"
          }
        ]
      },
      {
        id: "eslovenia",
        title: "Eslovenia: OŠ Ivana Cankarja Ljutomer",
        summary: "Registro de experiencias, repertorios y encuentros vinculados al intercambio Erasmus.",
        tradition: "Música, danza y cultura escolar compartida en el contexto esloveno.",
        present: "Las evidencias audiovisuales permiten trabajar comparación cultural, escucha y memoria del viaje.",
        result: "El alumnado entiende la tradición como algo situado, pero también transferible y compartible.",
        tags: ["Erasmus", "Eslovenia", "Interculturalidad"],
        photos: [
          "eslovenia/IMG_4494",
          "eslovenia/b4793a14-cc13-4010-b206-e6798295ae0a",
          "eslovenia/IMG_3960",
          "eslovenia/IMG_4164",
          "eslovenia/IMG_4241",
          "eslovenia/859c92f8-1571-4b48-a003-c873023654d6",
          "eslovenia/IMG_4112",
          "eslovenia/IMG_4165",
          "eslovenia/IMG_4170",
          "eslovenia/IMG_4244"
        ],
        videos: [
          "eslovenia/IMG_3929.MOV",
          "eslovenia/IMG_3930.MOV",
          "eslovenia/IMG_3931.MOV",
          "eslovenia/IMG_3933.MOV",
          "eslovenia/IMG_3934.MOV",
          "eslovenia/IMG_3935.MOV",
          "eslovenia/IMG_3936.MOV",
          "eslovenia/IMG_3937.MOV",
          "eslovenia/IMG_4101.MOV",
          "eslovenia/IMG_4102.MOV",
          "eslovenia/IMG_4104.MOV",
          "eslovenia/IMG_4109.MOV",
          "eslovenia/IMG_4110.MOV",
          "eslovenia/IMG_4793.MOV"
        ]
      },
      {
        id: "reunion",
        title: "Isla Reunión: Lycée Jean Joly",
        summary: "Material audiovisual de intercambio con el Lycée Jean Joly, dentro de la dimensión internacional del proyecto.",
        tradition: "Tradiciones musicales y culturales de un territorio marcado por la mezcla y la diversidad.",
        present: "El viaje se documenta para relacionar patrimonio, identidad y transformación cultural.",
        result: "La sección aporta una lectura global del proyecto: las músicas viajan, cambian y generan vínculos.",
        tags: ["Erasmus", "Isla Reunión", "Diversidad"],
        photos: [],
        videos: [
          "isla reunión/IMG_7172.MOV",
          "isla reunión/IMG_7181.MOV",
          "isla reunión/IMG_7182.MOV",
          "isla reunión/IMG_7187.MOV"
        ]
      },
      {
        id: "tahiti",
        title: "Tahití: Lycée Paul Gauguin",
        summary: "Archivo visual y audiovisual de la experiencia cultural vinculada al Lycée Paul Gauguin.",
        tradition: "Música, danza, identidad insular y patrimonio compartido en contexto educativo.",
        present: "Las imágenes y vídeos ayudan a comparar lenguajes tradicionales con formas contemporáneas de documentación.",
        result: "Tahití amplía la web como memoria visual de músicas y culturas en movimiento.",
        tags: ["Erasmus", "Tahití", "Viaje"],
        photos: [],
        videos: [
          "Tahití/IMG_7971.MOV",
          "Tahití/IMG_8255.MOV",
          "Tahití/IMG_8387.mov",
          "Tahití/IMG_8392.MOV",
          "Tahití/IMG_8755.mov",
          "Tahití/IMG_8804.MOV",
          "Tahití/IMG_8813.MOV",
          "Tahití/IMG_8952.MOV"
        ]
      }
    ]
  },
  soundlab: {
    eyebrow: "Creación digital",
    title: "SoundLab",
    lead: "Laboratorio de sonido, grabación, edición, herramientas digitales, micrófonos, luces, bases musicales y modernización de la tradición.",
    subsections: [
      {
        id: "laboratorio",
        title: "SoundLab Arroyo Harnina",
        summary: "Grupo de trabajo y laboratorio de aula para aprender producción sonora, grabación, podcast, mesa de mezclas, DAW y sonorización básica.",
        tradition: "Canciones, voces, instrumentos y repertorios trabajados en el proyecto, preparados para registrarse y transformarse con herramientas sonoras actuales.",
        present: "El aula se organiza como un pequeño estudio: microfonía, interfaz, mesa, Audacity, BandLab, REAPER, guías rápidas, plantillas de sesión y rúbricas competenciales.",
        result: "SoundLab da soporte técnico-pedagógico al proyecto, permite crear materiales reutilizables y reparte roles de sonido, interpretación, guion, edición y coordinación.",
        tags: ["SoundLab", "Podcast", "DAW", "REAPER"],
        photos: [
          "soundlabarroyoharnina/IMG_9258",
          "soundlabarroyoharnina/IMG_9260",
          "soundlabarroyoharnina/IMG_9612",
          "soundlabarroyoharnina/IMG_9614"
        ],
        videos: [
          "soundlabarroyoharnina/IMG_9481.MOV",
          "soundlabarroyoharnina/IMG_9483.MOV",
          "soundlabarroyoharnina/IMG_9485.MOV",
          "soundlabarroyoharnina/IMG_9613.MOV",
          "soundlabarroyoharnina/IMG_9615.MOV"
        ]
      }
    ]
  }
};

function renderHome() {
  return `
    <section class="hero" style="--hero-image: url('${photo("Portada")}')">
      <div class="hero__content">
        <p class="eyebrow">Proyecto de innovación educativa · 3º ESO</p>
        <h1>De la tradición al Remix</h1>
        <p class="hero__lead">Músicas que viajan y se transforman: una memoria visual y pedagógica para rescatar canciones, bailes y repertorios tradicionales y reinterpretarlos con lenguajes actuales.</p>
        <div class="hero__actions">
          <a class="button" href="#tradicion-extremena">Ver actividades</a>
          <a class="button button--ghost" href="#soundlab">Entrar al SoundLab</a>
        </div>
      </div>
    </section>

    <section class="intro-band" aria-labelledby="proyecto-title">
      <div class="intro-grid">
        <div>
          <p class="eyebrow">Contexto del proyecto</p>
          <h2 id="proyecto-title">Un puente entre memoria cultural y creatividad juvenil</h2>
          <p>El IES Arroyo Harnina propone acercar el patrimonio musical a las nuevas generaciones conectando tradición oral, folclore, danza y repertorios locales con rap, beatbox, electrónica, grabación y edición audiovisual.</p>
          <p>La web organiza cada actividad con su contexto, la tradición trabajada, su actualización, las evidencias y el aprendizaje final. Así, cada sección funciona como una memoria completa del proceso.</p>
          <div class="button-row">
            <a class="button" href="#erasmus">Ver Erasmus</a>
            <a class="button button--light" href="#palabra-remix">Palabra y rap</a>
          </div>
        </div>
        <div class="metrics" aria-label="Datos clave del proyecto">
          <div class="metric"><strong>10+</strong><span>canciones y repertorios a recopilar</span></div>
          <div class="metric"><strong>5</strong><span>creaciones reinterpretadas como objetivo</span></div>
          <div class="metric"><strong>80%</strong><span>participación prevista del alumnado</span></div>
          <div class="metric"><strong>6</strong><span>líneas de actividad documentadas</span></div>
        </div>
      </div>
    </section>

    <section class="section-body">
      <div class="cards-grid">
        ${homeCard("tradicion-extremena", "Tradición musical extremeña", "Navidad, romerías, bailes e instrumentos.", photo("bailes tradicionales/IMG_7055"))}
        ${homeCard("palabra-remix", "Palabra y remix", "Poesía, rap recitado y voz contemporánea.", photo("rap y palabra/PORTADA"))}
        ${homeCard("erasmus", "Tradiciones que viajan", "Eslovenia, Isla Reunión y Tahití.", photo("Tahití/Portada"))}
        ${homeCard("erasmus/etwinning", "eTwinning Cultural Echoes", "Patrimonio compartido y red internacional.", photo("etwinning cultural echoes/PHOTO-2026-05-25-17-08-54"))}
      </div>
    </section>

    <section class="intro-band">
      <div class="content-block">
        <p class="eyebrow">Cierre</p>
        <h2>La tradición no se conserva quieta: se aprende cuando vuelve a sonar.</h2>
        <p>Este proyecto convierte el aula en un espacio de investigación, interpretación y creación compartida. Las evidencias reunidas muestran cómo el alumnado puede cuidar el patrimonio y, al mismo tiempo, transformarlo con su propio lenguaje.</p>
      </div>
    </section>
  `;
}

function homeCard(hash, title, text, image) {
  return `
    <a class="link-card" href="#${hash}" style="--card-image: url('${image}')">
      <strong>${title}</strong>
      <span>${text}</span>
    </a>
  `;
}

function renderPage(key) {
  const page = pages[key] || pages["tradicion-extremena"];
  return `
    <section class="section-hero">
      <div class="section-hero__inner">
        <p class="eyebrow">${page.eyebrow}</p>
        <h1>${page.title}</h1>
        <p>${page.lead}</p>
      </div>
    </section>
    <section class="section-body section-body--wide">
      <nav class="section-nav" aria-label="Apartados de ${page.title}">
        ${page.subsections.map((item) => `<a href="#${key}/${item.id}">${item.title}</a>`).join("")}
      </nav>
      ${page.subsections.map((item) => renderSubsection(item)).join("")}
    </section>
  `;
}

function renderSubsection(item) {
  const total = item.photos.length + item.videos.length;
  return `
    <article class="subsection" id="${item.id}">
      <div class="subsection__header">
        <div>
          <p class="eyebrow">Actividad</p>
          <h2>${item.title}</h2>
          <p>${item.summary}</p>
          <div class="subsection__meta">
            ${item.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
            <span class="pill">${total ? `${total} evidencias` : "Sin archivos aún"}</span>
          </div>
        </div>
        <div>
          <div class="activity-grid">
            ${fixedSteps.map(([name, text]) => `<div class="activity-step"><strong>${name}</strong><span>${stepText(name, item, text)}</span></div>`).join("")}
          </div>
        </div>
      </div>
      ${renderLinks(item)}
      ${renderGallery(item)}
    </article>
  `;
}

function renderLinks(item) {
  if (!item.links?.length) return "";
  return `
    <div class="resource-links">
      ${item.links.map((link) => `<a class="button" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
    </div>
  `;
}

function stepText(name, item, fallback) {
  if (name === "Presentación") return item.summary;
  if (name === "Tradición trabajada") return item.tradition;
  if (name === "Del pasado al presente") return item.present;
  if (name === "Resultado") return item.result;
  return fallback;
}

function renderGallery(item) {
  if (!item.photos.length && !item.videos.length) {
    return `<div class="empty-state">Sección preparada para incorporar fotos, vídeos, audios o materiales del alumnado cuando estén disponibles.</div>`;
  }

  return `
    <div class="media-grid" aria-label="Evidencias de ${item.title}">
      ${item.photos.map((path, index) => photoCard(path, `${item.title} · foto ${index + 1}`)).join("")}
      ${item.videos.map((path, index) => videoCard(path, `${item.title} · vídeo ${index + 1}`)).join("")}
    </div>
  `;
}

function photoCard(path, label) {
  const src = photo(path);
  return `
    <figure class="media-card media-card--photo">
      <a class="media-card__frame" href="${src}" data-lightbox-src="${src}" data-lightbox-label="${label}">
        <img src="${src}" alt="${label}" loading="lazy">
      </a>
      <figcaption class="media-card__body">
        <strong>Foto</strong>
        <a href="${src}" data-lightbox-src="${src}" data-lightbox-label="${label}">Ver grande</a>
      </figcaption>
    </figure>
  `;
}

function videoCard(path, label) {
  return `
    <figure class="media-card media-card--video">
      <div class="media-card__frame">
        <video controls preload="none" poster="${poster(path)}" aria-label="${label}">
          <source src="${mediaFile(path)}">
        </video>
      </div>
    </figure>
  `;
}

function ensureLightbox() {
  let lightbox = document.querySelector(".lightbox");
  if (lightbox) return lightbox;

  document.body.insertAdjacentHTML("beforeend", `
    <div class="lightbox" role="dialog" aria-modal="true" aria-label="Imagen ampliada" hidden>
      <button class="lightbox__close" type="button" aria-label="Cerrar imagen ampliada">Cerrar</button>
      <img class="lightbox__image" alt="">
    </div>
  `);
  return document.querySelector(".lightbox");
}

function openLightbox(src, label) {
  const lightbox = ensureLightbox();
  const image = lightbox.querySelector(".lightbox__image");
  image.src = src;
  image.alt = label || "Imagen ampliada";
  lightbox.hidden = false;
  document.body.classList.add("is-lightbox-open");
  lightbox.querySelector(".lightbox__close").focus();
}

function closeLightbox() {
  const lightbox = document.querySelector(".lightbox");
  if (!lightbox || lightbox.hidden) return;
  lightbox.hidden = true;
  lightbox.querySelector(".lightbox__image").removeAttribute("src");
  document.body.classList.remove("is-lightbox-open");
}

function enterVideoFullscreen(video) {
  if (!video) return;
  if (video.webkitEnterFullscreen) {
    video.webkitEnterFullscreen();
    return;
  }
  const target = video.closest(".media-card__frame") || video;
  target.requestFullscreen?.();
}

function currentRoute() {
  const raw = decodeURIComponent(location.hash.replace(/^#/, "")) || "inicio";
  const [pageKey, anchor] = raw.split("/");
  return { pageKey, anchor };
}

function render() {
  const { pageKey, anchor } = currentRoute();
  const app = document.querySelector("#app");
  app.innerHTML = pageKey === "inicio" ? renderHome() : renderPage(pageKey);
  updateActiveNav(pageKey);
  closeMenu();

  if (anchor) {
    requestAnimationFrame(() => {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  } else {
    window.scrollTo(0, 0);
  }
}

function updateActiveNav(pageKey) {
  document.querySelectorAll(".main-nav a").forEach((link) => {
    const isActive = link.getAttribute("href") === `#${pageKey}`;
    link.classList.toggle("is-active", isActive);
  });
}

function closeMenu() {
  document.querySelector(".main-nav")?.classList.remove("is-open");
  document.querySelector(".nav-toggle")?.setAttribute("aria-expanded", "false");
}

document.querySelector(".nav-toggle")?.addEventListener("click", () => {
  const nav = document.querySelector(".main-nav");
  const isOpen = nav.classList.toggle("is-open");
  document.querySelector(".nav-toggle").setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  const lightboxLink = event.target.closest("[data-lightbox-src]");
  if (lightboxLink) {
    event.preventDefault();
    openLightbox(lightboxLink.dataset.lightboxSrc, lightboxLink.dataset.lightboxLabel);
    return;
  }

  if (event.target.closest(".lightbox__close") || event.target.classList.contains("lightbox")) {
    closeLightbox();
    return;
  }

});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

document.addEventListener("play", (event) => {
  if (event.target.tagName !== "VIDEO") return;
  document.querySelectorAll("video").forEach((video) => {
    if (video !== event.target) video.pause();
  });
}, true);

window.addEventListener("hashchange", render);
render();
