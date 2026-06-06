const photo = (path) => encodeURI(`assets/media/photos/${path}.jpg`);
const poster = (path) => encodeURI(`assets/media/posters/${path.replace(/\.[^.]+$/, "")}.jpg`);
const mediaFile = (path) => encodeURI(`assets/media/videos/${path.replace(/\.[^.]+$/, ".mp4")}`);
const audioFile = (path) => encodeURI(`assets/media/audio/${path}`);

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
    lead: "Canciones, fiestas, bailes e instrumentos que conectan el aula con la memoria cultural de Extremadura.",
    intro: [
      "Esta sección recoge el trabajo realizado en torno a la tradición musical extremeña como punto de partida del proyecto. A través de canciones, fiestas, bailes, instrumentos y celebraciones populares, el alumnado se ha acercado a un patrimonio cercano que forma parte de nuestra memoria cultural.",
      "Desde la Navidad hasta la Semana Santa, las romerías, los bailes tradicionales y la exposición de instrumentos, hemos trabajado la tradición no como algo cerrado o antiguo, sino como una materia viva que puede cantarse, escucharse, bailarse, compartirse y también transformarse desde lenguajes actuales."
    ],
    cover: photo("bailes tradicionales/IMG_7055"),
    subsections: [
      {
        id: "navidad",
        title: "Navidad y tradición oral",
        summary: "La Navidad nos ha permitido recuperar villancicos y canciones que forman parte de la memoria familiar y colectiva.",
        tradition: "Villancicos interpretados en el instituto, en residencias de mayores y durante experiencias Erasmus.",
        present: "La interpretación, la grabación y el intercambio convierten el repertorio tradicional en un puente entre generaciones, culturas y centros.",
        result: "La tradición navideña sale del aula y se convierte en una experiencia compartida y viva.",
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
        summary: "Trabajo completo sobre la marcha “Mi amargura”, desde su interpretación en directo hasta la grabación por pistas y la creación de un remix.",
        tradition: "La marcha procesional “Mi amargura” como parte del patrimonio musical de Semana Santa.",
        present: "Interpretación, concierto, grabación en vídeo, grabación individual por pistas, montaje con Audacity y experimentación con la mesa de mezclas junto a DJ UNNAM.",
        result: "El remix de “Mi amargura” resume la idea central del proyecto: interpretar una tradición, analizarla y abrirla a nuevas posibilidades mediante la producción sonora actual.",
        detailsTitle: "De la interpretación al remix de “Mi amargura”",
        details: [
          "En esta sección recogemos el trabajo realizado en torno a la música de Semana Santa, especialmente a través de la interpretación de la marcha “Mi amargura”. Esta pieza fue trabajada en el aula y presentada en un concierto en el instituto para el alumnado visitante del Lycée Jean Joly de Isla Reunión, convirtiéndose en una forma de compartir una parte importante de nuestro patrimonio musical.",
          "El proceso tuvo varias fases. Primero realizamos una grabación sencilla en vídeo, todavía sin utilizar los medios técnicos del SoundLab. Más adelante, realizamos una segunda grabación solo de audio, aplicando técnicas aprendidas en el laboratorio: grabación por pistas individuales, escucha, revisión y montaje posterior con Audacity.",
          "Además, contamos con la colaboración de un antiguo alumno, Manu, cuyo nombre artístico es DJ UNNAM. Durante su visita, mostró el funcionamiento de una mesa de mezclas, realizó una demostración práctica y permitió que el alumnado experimentara directamente con los controles. A partir de este trabajo preparó un remix de la marcha, uno de los resultados más esperados del curso.",
          "Esta actividad resume muy bien la idea de “De la tradición al Remix”: partir de una música tradicional, interpretarla, grabarla, analizarla y abrirla a nuevas posibilidades mediante herramientas digitales y técnicas actuales de producción sonora."
        ],
        evidenceNote: "Este vídeo recoge una de las primeras evidencias del trabajo realizado con “Mi amargura”, interpretada en concierto antes de iniciar el proceso más técnico de grabación y mezcla en el SoundLab. Sirve como punto de partida para observar la evolución posterior del proyecto: de la interpretación en directo a la grabación por pistas, el montaje digital y el remix.",
        tags: ["Mi amargura", "DJ UNNAM", "SoundLab"],
        photos: ["Semana santa/portada"],
        videos: [
          "Semana santa/VIDEO-2026-06-02-20-02-03.mp4",
          "Semana santa/IMG_9781.MOV",
          "Semana santa/IMG_9782.MOV"
        ],
        audios: [
          {
            path: "Semana santa/MI AMARGURA - AFRO HOUSE.mp3",
            title: "Mi Amargura · Afro House"
          }
        ]
      },
      {
        id: "romerias",
        title: "Romerías y fiestas populares",
        summary: "Trabajo en torno a La Gira, una de las canciones más populares y representativas de Almendralejo.",
        tradition: "La Gira, interpretada con instrumentos de aula y elementos vinculados a la tradición musical extremeña.",
        present: "Los ensayos, las grabaciones individuales y la producción con Ejel Estudio permiten aprender también de las pruebas y los errores.",
        result: "El proceso prepara un audio final compartible y acerca al alumnado a una música muy presente en su entorno.",
        detailsTitle: "Mix de “La Gira”",
        details: [
          "Como parte del trabajo sobre romerías y fiestas populares, hemos preparado también un mix de “La Gira”, una de las canciones más populares y representativas de Almendralejo. Esta pista forma parte del proceso de actualización de la tradición dentro de “De la tradición al Remix”.",
          "El objetivo es mostrar cómo una canción muy vinculada a nuestro entorno puede reinterpretarse mediante recursos actuales de grabación, edición y producción musical."
        ],
        tags: ["Fiesta popular", "Comunidad", "Cuerpo"],
        photos: [],
        videos: [
          "romerias/IMG_6235.MOV",
          "romerias/IMG_6236.MOV",
          "romerias/IMG_6237.MOV",
          "romerias/IMG_6239.MOV",
          "romerias/IMG_6312.MOV",
          "romerias/IMG_6893.MOV"
        ],
        audios: [
          {
            path: "romerias/Mix de La Gira.mp3",
            title: "Mix de “La Gira”"
          }
        ]
      },
      {
        id: "bailes",
        title: "Bailes tradicionales: ACF Tierra de Barros",
        summary: "La visita de ACF Tierra de Barros acercó al alumnado a una parte muy viva del folclore extremeño.",
        tradition: "Bailes, músicas e indumentaria tradicional vinculados al patrimonio cultural de Tierra de Barros.",
        present: "Varios alumnos forman parte de la asociación y asumieron un papel protagonista al compartir su tradición con el alumnado visitante de Isla Reunión.",
        result: "La actividad integró patrimonio, participación juvenil, acogida y diálogo cultural.",
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
        ],
        links: [
          {
            label: "Visitar ACF Tierra de Barros",
            href: "https://www.facebook.com/acftbalmendralejo/?locale=es_ES"
          }
        ]
      },
      {
        id: "instrumentos",
        title: "Exposición de instrumentos tradicionales extremeños",
        summary: "La exposición realizada por Luis Garrido, profesor de Música jubilado y fundador de ACF Tierra de Barros, acercó al alumnado a los sonidos y objetos de nuestra tradición.",
        tradition: "Instrumentos con cientos de años de historia, transmitidos de generación en generación.",
        present: "Conocer de dónde vienen nuestros sonidos permite comprenderlos antes de llevarlos a lenguajes actuales, digitales y creativos.",
        result: "El alumnado reconoce cada instrumento como patrimonio, tecnología cultural y memoria sonora.",
        tags: ["Instrumentos", "Timbre", "Exposición"],
        photos: [
          "Exposicion de instrumentos tradicionales/IMG_7081",
          "Exposicion de instrumentos tradicionales/IMG_7082",
          "Exposicion de instrumentos tradicionales/IMG_7086"
        ],
        videos: [
          "Exposicion de instrumentos tradicionales/IMG_7083.MOV",
          "Exposicion de instrumentos tradicionales/IMG_7084.MOV"
        ]
      }
    ]
  },
  "tradicion-internacional": {
    eyebrow: "Celebraciones que cambian",
    title: "Tradición internacional",
    lead: "Carnaval y Halloween muestran cómo las tradiciones viajan, cambian y se actualizan al llegar a nuevos contextos.",
    intro: [
      "En el proyecto “De la tradición al Remix” también hemos trabajado celebraciones internacionales cercanas al alumnado, como el Carnaval y Halloween.",
      "A través de la música, el movimiento, el inglés, la percusión, los materiales reciclados y la creación digital, el alumnado ha participado de forma activa en experiencias que unen tradición, creatividad y lenguajes actuales."
    ],
    cover: photo("Tradicion internacional/portada-nueva"),
    subsections: [
      {
        id: "carnaval",
        title: "Carnaval: percusión, creatividad y reciclaje",
        summary: "En Carnaval trabajamos la batucada y la percusión colectiva utilizando instrumentos reciclados creados por el propio alumnado.",
        tradition: "Carnaval, batucada y percusión compartida como celebración comunitaria.",
        present: "Cubos, chapas y otros materiales cotidianos se convierten en recursos sonoros para experimentar con el ritmo y la energía del grupo.",
        result: "La actividad une música, creatividad, sostenibilidad e inclusión, demostrando que cualquier objeto puede convertirse en instrumento.",
        tags: ["Carnaval", "Percusión", "Reciclaje"],
        photos: [],
        videos: [
          "carnavales/IMG_5438.MOV",
          "carnavales/IMG_5439.MOV",
          "carnavales/IMG_5440.mov"
        ]
      },
      {
        id: "halloween",
        title: "Halloween: música, inglés, danza y vídeo",
        summary: "Halloween se trabajó mediante una canción en inglés en colaboración con la sección bilingüe.",
        tradition: "Celebración internacional abordada desde la música, el movimiento y la lengua inglesa.",
        present: "La danza y la creación de un vídeo añaden una dimensión digital al proceso y convierten el trabajo del aula en una evidencia audiovisual compartida.",
        result: "El alumnado mejora pronunciación, expresión corporal, competencia lingüística y participación en grupo.",
        tags: ["Halloween", "Inglés", "Vídeo"],
        photos: [],
        videos: [
          "Halloween/IMG_3037.MOV",
          "Halloween/VIDEO-2026-06-02-19-21-41.mp4"
        ]
      }
    ]
  },
  "palabra-remix": {
    eyebrow: "Lengua, ritmo y voz",
    title: "De la palabra tradicional al remix",
    lead: "La poesía, el recitado y la palabra popular se convierten en materia rítmica para trabajar rap, interpretación y creación sonora.",
    intro: [
      "La palabra también forma parte del patrimonio. En esta sección, textos antiguos, poesía y oralidad dialogan con el rap, la creación musical y la voz del alumnado."
    ],
    cover: photo("rap y palabra/PORTADA"),
    subsections: [
      {
        id: "poesia",
        title: "Poesía antigua llevada a lenguajes actuales",
        summary: "A partir de “Negra sombra”, poema de Rosalía de Castro, trabajamos la poesía desde un lenguaje más cercano al alumnado actual.",
        tradition: "“Negra sombra”, de Rosalía de Castro, y varias rimas de Gustavo Adolfo Bécquer.",
        present: "La colaboración con La Tachi y la creación propia de Hugo y Javier acercan la poesía clásica a la voz, el rap, la grabación y la producción digital.",
        result: "La poesía clásica encuentra nuevas formas de expresión conectadas con la sensibilidad contemporánea.",
        detailsTitle: "Bécquer llevado a lenguajes actuales",
        details: [
          "Además del trabajo realizado con “Negra sombra”, esta sección incorpora una creación musical basada en varias rimas de Gustavo Adolfo Bécquer. La canción ha sido realizada por dos alumnos del instituto, Hugo y Javier, con producción y grabación propia.",
          "Esta propuesta muestra cómo la poesía clásica puede encontrar una nueva forma de expresión cuando se acerca a los lenguajes musicales actuales. A través de la voz, la grabación y la producción digital, el alumnado transforma textos literarios en una creación propia, conectando la tradición poética con la sensibilidad contemporánea."
        ],
        tags: ["Negra sombra", "Bécquer", "La Tachi"],
        photos: [],
        videos: [
          "rap y palabra/VIDEO-2026-06-02-18-21-05.mp4",
          "rap y palabra/VIDEO-2026-06-02-22-20-40.mp4"
        ]
      },
      {
        id: "rap",
        title: "Rap recitado",
        summary: "El alumnado ha trabajado el rap como forma actual de expresión oral y musical, creando canciones propias y explorando ritmo, palabra, rima e interpretación.",
        tradition: "La oralidad, la creatividad verbal y la creación musical compartida.",
        present: "La sección reúne experiencias desarrolladas con La Tachi y con la Asociación Batalla de Gallos, acercando al alumnado a formas actuales de creación verbal, rítmica y escénica.",
        result: "Aunque no parte directamente de una tradición concreta, conecta con el proyecto mediante la palabra, la creatividad y lenguajes cercanos al alumnado.",
        detailsTitle: "Rap recitado",
        details: [
          "En esta actividad, el alumnado ha trabajado el rap como forma actual de expresión oral y musical. A partir de varias propuestas de letras, los propios alumnos y alumnas han creado sus canciones, explorando el ritmo, la palabra, la rima y la interpretación.",
          "La sección recoge diferentes experiencias de creación vinculadas al rap. Una de ellas se ha desarrollado con la colaboración de La Tachi, y otra con la participación de la Asociación Batalla de Gallos, acercando al alumnado a formas actuales de creación verbal, rítmica y escénica.",
          "Aunque estas propuestas no parten directamente de una tradición concreta, sí conectan con el espíritu del proyecto: trabajar la oralidad, la creatividad, la palabra y la creación musical desde lenguajes cercanos al alumnado."
        ],
        tags: ["Rap", "La Tachi", "Batalla de Gallos"],
        photos: [],
        videos: [
          "rap y palabra/b1be4103-325e-48ed-8dab-ed54cb6b302d.MP4",
          "rap y palabra/VIDEO-2026-06-02-18-20-10.mp4"
        ]
      }
    ]
  },
  espana: {
    eyebrow: "Red nacional",
    title: "Tradiciones de otros territorios de España",
    lead: "Colaboración con el IES Conde Diego Porcelos de Burgos para conectar tradiciones musicales de distintos territorios.",
    intro: [
      "Esta línea de trabajo amplía el proyecto dentro de España y abre un espacio para compartir músicas, canciones, bailes y materiales entre centros."
    ],
    cover: photo("burgos/PHOTO-2026-06-02-18-32-19"),
    subsections: [
      {
        id: "burgos",
        title: "Burgos: IES Conde Diego Porcelos",
        summary: "Inicio de la colaboración con el IES Conde Diego Porcelos de Burgos y con su profesora María Corbí.",
        tradition: "Patrimonio musical burgalés y tradición musical extremeña como punto de encuentro entre centros.",
        present: "La colaboración seguirá desarrollándose el próximo curso mediante músicas, canciones, bailes y materiales compartidos.",
        result: "Se abre una línea de trabajo sobre tradición, identidad cultural y creación compartida entre centros.",
        tags: ["Burgos", "Intercentros", "Colaboración"],
        photos: ["burgos/PHOTO-2026-06-02-18-32-19"],
        videos: [
          "burgos/VIDEO-2026-06-02-18-32-19.mp4",
          "burgos/VIDEO-2026-06-02-18-32-19 2.mp4",
          "burgos/VIDEO-2026-06-02-18-32-19 3.mp4",
          "burgos/VIDEO-2026-06-02-18-32-19 4.mp4"
        ]
      }
    ]
  },
  "musicas-viajan": {
    eyebrow: "Músicas que viajan",
    title: "Músicas que viajan",
    lead: "Erasmus, eTwinning, acogidas y tradiciones compartidas.",
    intro: [
      "Esta sección recoge la dimensión internacional del proyecto. A través de Erasmus, eTwinning, movilidades y acogidas, nuestras músicas y tradiciones han salido del aula, pero también han llegado hasta nuestro centro gracias a la colaboración con alumnado y profesorado de otros países.",
      "Viajar no significa solo desplazarse: también significa acoger, escuchar, compartir y crear espacios de encuentro. Las canciones, los bailes y las celebraciones se convierten así en puentes entre culturas.",
      "Eslovenia, Isla Reunión, Tahití y los proyectos compartidos en eTwinning muestran que el patrimonio musical está vivo precisamente porque puede moverse, mezclarse, transformarse y dialogar con otras realidades."
    ],
    cover: photo("Musicas que viajan/portada"),
    subsections: [
      {
        id: "etwinning",
        title: "eTwinning: tradiciones que se comparten",
        summary: "Proyecto eTwinning 2025-26 Cultural Echoes: Unseen Threads, Shared Heritage, centrado en descubrir vínculos culturales y patrimonio compartido.",
        tradition: "Patrimonio cultural, memoria, tradiciones locales y ecos comunes entre comunidades educativas internacionales.",
        present: "La colaboración en red permite compartir músicas, vídeos, celebraciones, materiales y experiencias con otros centros, creando un espacio común donde las tradiciones dialogan y se transforman.",
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
          },
          {
            label: "Ver Cultural Echoes en Instagram",
            href: "https://www.instagram.com/cultural.echoes1?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw=="
          }
        ]
      },
      {
        id: "eslovenia",
        title: "Eslovenia: tradición navideña y modernidad",
        summary: "En la movilidad Erasmus a Eslovenia, 25 alumnos y los profesores Baltasar Arias y Clara Pascual compartieron parte de nuestra tradición navideña.",
        tradition: "Tradición navideña extremeña y músicas y celebraciones del centro OŠ Ivana Cankarja Ljutomer.",
        present: "La puesta en escena, las luces, los micrófonos y los recursos técnicos ayudan a presentar la tradición desde una mirada actual.",
        result: "Una tradición cercana viaja a otro contexto europeo y dialoga con otras formas de celebrar y entender la música.",
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
        ],
        links: [
          {
            label: "Ver movilidad a Eslovenia",
            href: "https://sites.google.com/iesarroyoharnina.es/villaharnilejoporeuropa/movilidades-25-26/eslovenia?authuser=0"
          },
          {
            label: "Abrir álbum de fotos",
            href: "https://photos.google.com/share/AF1QipMjQ845r-fr9jLNY21SRdGvHvEslVukcKuZE2cB-RSdD2d403bnx08rB1prLKGVIA?key=ZzhMN2hSRjk0OVZkR2pWRVJWUGZvclRtV0thT0N3"
          }
        ]
      },
      {
        id: "reunion",
        title: "Isla Reunión: músicas que llegan al Arroyo Harnina",
        summary: "La acogida del alumnado y profesorado del Lycée Jean Joly convirtió nuestro centro en un espacio de encuentro cultural.",
        tradition: "Músicas, bailes y tradiciones de Extremadura e Isla Reunión.",
        present: "La visita continuó una relación iniciada dos años antes y permitió recibir, escuchar y hacer sitio a otras culturas dentro del centro.",
        result: "La internacionalización se entiende también como acogida, convivencia y aprendizaje compartido.",
        tags: ["Erasmus", "Isla Reunión", "Diversidad"],
        photos: [],
        videos: [
          "isla reunion/IMG_7172.MOV",
          "isla reunion/IMG_7181.MOV",
          "isla reunion/IMG_7182.MOV",
          "isla reunion/IMG_7187.MOV"
        ],
        program: [
          ["Lunes 23 de marzo", "11:30 acogida y desayuno; 12:20 actividades físicas; 13:10 linograbado; comida en La Silera y visita guiada de Almendralejo a las 17:00."],
          ["Martes 24 de marzo", "Artes escénicas, actividades físicas, modelado en arcilla e instrumentos y danza regional con ACF Tierra de Barros. Por la tarde, Museo del Vino y visita a un convento."],
          ["Miércoles 25 de marzo", "Excursión cultural a Mérida, Elvas y Badajoz."],
          ["Jueves 26 de marzo", "9:00 ensayo; 10:00 concierto; 12:00 carrera solidaria. Por la tarde, Vinac y proyección de cine francés en el Teatro Carolina Coronado."]
        ]
      },
      {
        id: "tahiti",
        title: "Tahití: música, danza e identidad cultural",
        summary: "La movilidad docente de Clara Pascual al Lycée Paul Gauguin de Tahití amplió la mirada del proyecto hacia las músicas y tradiciones del Pacífico.",
        tradition: "Música, danza e identidad cultural polinesia.",
        present: "El contacto con otras comunidades muestra cómo mantienen vivo su patrimonio mediante transmisión, interpretación y actualización.",
        result: "La experiencia aporta nuevas ideas y lenguajes artísticos a “De la tradición al Remix”.",
        tags: ["Erasmus", "Tahití", "Viaje"],
        photos: [],
        videos: [
          "Tahiti/IMG_7971.MOV",
          "Tahiti/IMG_8255.MOV",
          "Tahiti/IMG_8387.mov",
          "Tahiti/IMG_8392.MOV",
          "Tahiti/IMG_8755.mov",
          "Tahiti/IMG_8804.MOV",
          "Tahiti/IMG_8813.MOV",
          "Tahiti/IMG_8952.MOV"
        ]
      }
    ]
  },
  soundlab: {
    eyebrow: "Creación digital",
    title: "SoundLab",
    lead: "Laboratorio de sonido, grabación, edición, herramientas digitales, micrófonos, luces, bases musicales y modernización de la tradición.",
    intro: [
      "El SoundLab nace como un grupo de trabajo impulsado desde el Departamento de Música para acompañar el desarrollo del proyecto “De la tradición al Remix”. Su objetivo ha sido ayudarnos a aprender a grabar, editar, utilizar herramientas digitales, trabajar con micrófonos, luces y recursos técnicos, y explorar nuevas formas de llevar la música tradicional a lenguajes actuales.",
      "Durante este curso hemos iniciado un camino de aprendizaje que todavía tiene mucho recorrido. El SoundLab ha abierto una línea de trabajo muy valiosa para el centro: convertir el aula de música en un espacio de experimentación, grabación, creatividad y futuro."
    ],
    cover: photo("soundlabarroyoharnina/IMG_9258"),
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
          <a class="button" href="#inicio/mapa-secciones">Explorar tradiciones</a>
          <a class="button button--light" href="#musicas-viajan">Ver músicas que viajan</a>
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
        </div>
        <div class="metrics" aria-label="Datos clave del proyecto">
          <div class="metric"><strong>10+</strong><span>canciones y repertorios a recopilar</span></div>
          <div class="metric"><strong>5</strong><span>creaciones reinterpretadas como objetivo</span></div>
          <div class="metric"><strong>100%</strong><span>participación del alumnado</span></div>
          <div class="metric"><strong>6</strong><span>líneas de actividad documentadas</span></div>
        </div>
      </div>
    </section>

    <section class="section-body" id="mapa-secciones">
      <div class="cards-grid">
        ${homeCard("tradicion-extremena", "Tradición musical extremeña", "Navidad, Semana Santa, romerías, bailes e instrumentos.", photo("bailes tradicionales/IMG_7055"))}
        ${homeCard("tradicion-internacional", "Tradición internacional", "Carnaval y Halloween.", photo("Tradicion internacional/portada-nueva"))}
        ${homeCard("palabra-remix", "Palabra y remix", "Poesía, rap recitado y voz contemporánea.", photo("rap y palabra/PORTADA"))}
        ${homeCard("espana", "Tradiciones de otros territorios de España", "Burgos e IES Conde Diego Porcelos.", photo("burgos/portada"))}
        ${homeCard("musicas-viajan", "Músicas que viajan", "Erasmus, eTwinning, acogidas y tradiciones compartidas.", photo("Musicas que viajan/portada"))}
        ${homeCard("soundlab", "SoundLab", "Grabación, edición, herramientas digitales y creación sonora.", photo("soundlabarroyoharnina/IMG_9258"))}
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
  const cover = page.cover || photo("Portada");
  const subsections = orderedSubsections(key, page.subsections);
  return `
    <section class="section-hero" style="--section-hero-image: url('${cover}')">
      <div class="section-hero__inner">
        <p class="eyebrow">${page.eyebrow}</p>
        <h1>${page.title}</h1>
        <p>${page.lead}</p>
      </div>
    </section>
    ${renderPageIntro(page)}
    <section class="section-body section-body--wide">
      <nav class="section-nav ${key === "musicas-viajan" ? "section-nav--featured" : ""}" aria-label="Apartados de ${page.title}">
        ${subsections.map((item) => `<a href="#${key}/${item.id}">${item.title}</a>`).join("")}
      </nav>
      ${subsections.map((item) => renderSubsection(item)).join("")}
    </section>
  `;
}

function orderedSubsections(key, subsections) {
  if (key !== "musicas-viajan") return subsections;
  const order = ["eslovenia", "reunion", "tahiti", "etwinning"];
  return [...subsections].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
}

function renderPageIntro(page) {
  if (!page.intro?.length) return "";
  return `
    <section class="page-intro">
      <div class="content-block">
        <p class="eyebrow">Sentido educativo</p>
        <h2>${page.title}</h2>
        ${page.intro.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
    </section>
  `;
}

function renderSubsection(item) {
  const total = item.photos.length + item.videos.length + (item.audios?.length || 0);
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
      ${renderDetails(item)}
      ${renderLinks(item)}
      ${renderProgram(item)}
      ${item.evidenceNote ? `<aside class="evidence-note"><strong>Primera evidencia del proceso</strong><p>${item.evidenceNote}</p></aside>` : ""}
      ${renderGallery(item)}
    </article>
  `;
}

function renderDetails(item) {
  if (!item.details?.length) return "";
  return `
    <div class="activity-story">
      ${item.detailsTitle ? `<h3>${item.detailsTitle}</h3>` : ""}
      ${item.details.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </div>
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

function renderProgram(item) {
  if (!item.program?.length) return "";
  return `
    <section class="program" aria-label="Programa de acogida de Isla Reunión">
      <div class="program__heading">
        <p class="eyebrow">Programa de acogida</p>
        <h3>Music and Wellbeing · marzo de 2026</h3>
      </div>
      <div class="program__grid">
        ${item.program.map(([day, details]) => `<div class="program__item"><strong>${day}</strong><span>${details}</span></div>`).join("")}
      </div>
    </section>
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
  if (!item.photos.length && !item.videos.length && !item.audios?.length) {
    return `<div class="empty-state">Sección preparada para incorporar fotos, vídeos, audios o materiales del alumnado cuando estén disponibles.</div>`;
  }

  return `
    <div class="media-grid" aria-label="Evidencias de ${item.title}">
      ${item.photos.map((path, index) => photoCard(path, `${item.title} · foto ${index + 1}`)).join("")}
      ${item.videos.map((path, index) => videoCard(path, `${item.title} · vídeo ${index + 1}`)).join("")}
      ${(item.audios || []).map((audio, index) => audioCard(audio, `${item.title} · audio ${index + 1}`)).join("")}
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

function audioCard(audio, label) {
  return `
    <figure class="media-card media-card--audio">
      <div class="audio-card__visual">
        <span>Audio</span>
        <strong>${audio.title}</strong>
      </div>
      <audio controls preload="none" aria-label="${label}">
        <source src="${audioFile(audio.path)}" type="audio/mpeg">
      </audio>
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
  let [pageKey, anchor] = raw.split("/");
  if (pageKey === "erasmus") pageKey = "musicas-viajan";
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
  document.querySelectorAll(".nav-item.is-open").forEach((item) => item.classList.remove("is-open"));
  document.querySelectorAll(".submenu-toggle").forEach((button) => button.setAttribute("aria-expanded", "false"));
  document.querySelector(".nav-toggle")?.setAttribute("aria-expanded", "false");
}

document.querySelector(".nav-toggle")?.addEventListener("click", () => {
  const nav = document.querySelector(".main-nav");
  const isOpen = nav.classList.toggle("is-open");
  document.querySelector(".nav-toggle").setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".submenu-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".nav-item");
    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
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
  if (!["VIDEO", "AUDIO"].includes(event.target.tagName)) return;
  document.querySelectorAll("video, audio").forEach((media) => {
    if (media !== event.target) media.pause();
  });
}, true);

window.addEventListener("hashchange", render);
render();
