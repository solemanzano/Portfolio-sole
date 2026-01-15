/* ==========================================================
   1. BASE DE DATOS DE PROYECTOS
   ========================================================== */
const projectsData = [
  {
    id: 'Accessgrip',
    title: 'Accessgrip',
    year: '2025',
    cat: 'Producto',
    info: 'Fundación ONCE, Proyecto universitario, Septiembre 2025.', /* Info que sale en el homepage*/
    img: 'img/proyectos/Accessgrip/1.png', /* Foto para el homepage*/
    thumbHeight: '70px',
    gallery: [ /* Fotos dentro del proyecto*/
      'img/proyectos/Accessgrip/1.png', 
      'img/proyectos/Accessgrip/2.png', 
      'img/proyectos/Accessgrip/3.png', 
      'img/proyectos/Accessgrip/4.png' 
    ],
    /* Para que estén dentro del proyecto y asi para todas*/
    tools: 'Rhino 7 + Keyshot + Photoshop',
    projectDescription: 'Accessgrip es un proyecto colaborativo con la Fundación ONCE dónde se desarrolló un agarre para personas con discapacidad visual para ser guiados por el robot TEMI.'
  },
  {
    id: 'microKorg',
    title: 'microKorg',
    year: '2024',
    cat: 'Producto',
    info: 'UDIT, Proyecto universitario, Mayo 2024.',
    img: 'img/proyectos/microKorg/1.png',
    thumbHeight: '70px',
    gallery: [
       'img/proyectos/microKorg/1.png',
       'img/proyectos/microKorg/2.png'
    ],
    tools: 'Rhino 7 + Keyshot + Photoshop',
    projectDescription: 'MicroKorg fue un proyecto para un rediseño del clásico microKorg con ánimo de mejora y actualización. La propuesta se enfoca para aficionados nuevos, facilitando la experiencia de uso al ser más intuitiva y accesible.'
  },
  {
    id: 'ACT0',
    title: 'ACT0',
    year: '2023',
    cat: 'Producto',
    info: 'UDIT, Proyecto universitario, Dic 2023.',
    img: 'img/proyectos/ACT0/1.png',
    thumbHeight: '75px',
    gallery: [
        'img/proyectos/ACT0/1.png',
        'img/proyectos/ACT0/2.png',
        'img/proyectos/ACT0/3.png'
    ], 
    tools: 'Rhino 7 + Keyshot + Photoshop',
    projectDescription: 'ACT0 es un proyecto que tiene como objetivo interpretar una obra de arte contemporáneo a través del diseño de un frasco. La pieza reinterpretada es "The Artist Is Present", de Marina Abramović, trasladando su concepto y carga simbólica.'
  },
  {
    id: 'Neubau',
    title: 'Neubau lamp',
    year: '2024',
    cat: 'Producto',
    info: 'Sulion, Proyecto universitario, Mayo 2024.',
    img: 'img/proyectos/Neubau/1.png',
    thumbHeight: '70px',
    gallery: [
        'img/proyectos/Neubau/1.png',
        'img/proyectos/Neubau/2.png',
        'img/proyectos/Neubau/3.png',
    ], 
    tools: 'AutoCAD + Fusion 360 + SolidEdge + Keyshot',
    projectDescription: 'Neubau Lamp es un proyecto de iluminación para la marca Sulion, basado en una lámpara modular con proyección de luz directa hacia la pared.'
  },
  {
    id: 'lacorte',
    title: 'lacorte',
    year: '2025',
    cat: 'Producto',
    info: 'UDIT, Proyecto universitario colaborativo, Mayo 2025.',
    img: 'img/proyectos/lacorte/1.png',
    thumbHeight: '70px',
    gallery: [
        'img/proyectos/lacorte/1.png',
        'img/proyectos/lacorte/2.png',
        'img/proyectos/lacorte/3.png',
    ], 
    tools: 'Corte de chapa + arenado + plegado de chapa + corte de vinilo + impresión en 3D de PLA y resina.',
    projectDescription: 'Lacorte surge como un proyecto de rediseño de la guillotina de papel. Se propone un diseño contemporáneo en el que la pieza funcional también se integra como un elemento decorativo, pensado para un público más sibarita y exigente. Este proyecto fué realizado con Andrea Torralba y Amelia González.'
  },
  {
    id: 'Bitácora',
    title: 'Bitácora',
    year: '2025',
    cat: 'Gráfico',
    info: 'UDIT, Proyecto universitario, Mayo 2025.',
    img: 'img/proyectos/Bitácora/1.png',
    thumbHeight: '70px',
    gallery: [
         'img/proyectos/Bitácora/1.png',
    ], 
    tools: 'InDesign + Illustrator + Photoshop',
    projectDescription: 'Esta bitácora recopila todos los procesos técnicos de producción con el objetivo de servir como una guía completa de información.'
  },
  {
    id: 'Jim Morrison',
    title: 'Jim Morrison',
    year: '2024',
    cat: 'Gráfico',
    info: 'UDIT, Proyecto universitario, Oct 2024.',
    img: 'img/proyectos/Jim Morrison/1.png',
    thumbHeight: '90px',
    gallery: [
        'img/proyectos/Jim Morrison/1.png'
    ], 
    tools: 'ProCreate + InDesign + Illustrator',
    projectDescription: 'Diseño de una infografía biográfica sobre Jim Morrison.'
  },
  {
    id: 'STRIDE',
    title: 'STRIDE',
    year: '2024',
    cat: 'Gráfico',
    info: 'UDIT, Proyecto universitario, Oct 2024.',
    img: 'img/proyectos/STRIDE/1.png',
    thumbHeight: '70px',
    gallery: [
        'img/proyectos/STRIDE/2.png'
    ], 
    tools: 'InDesign + Illustrator',
    projectDescription: 'Diseño de interfaz UX para una aplicación de retos diarios orientada a fomentar la actividad física de los usuarios.'
  },
  {
    id: 'Muestra',
    title: 'Muestra',
    year: '2025',
    cat: 'Evento',
    info: 'Estudiantes, Evento universitario, 2024–2025.',
    img: 'img/proyectos/Muestra/2025/4.png',
    thumbHeight: '75px',
    gallery: [
        'img/proyectos/Muestra/2025/1.gif',
        'img/proyectos/Muestra/2025/2.jpg', 
        'img/proyectos/Muestra/2025/3.jpg', 
        'img/proyectos/Muestra/2024/1.png',
        'img/proyectos/Muestra/2024/3.jpg',
        'img/proyectos/Muestra/2024/2.jpg'
    ], 
    dividerText: 'Muestra 2024, la primera edición del evento.',
    tools: '',
    projectDescription: 'Muestra es un evento creado por estudiantes de diseño de producto para abrir un espacio vivo donde compartir procesos, prototipos e ideas, dando visibilidad tanto a proyectos universitarios como a iniciativas personales. En la segunda edición del evento se establece como un evento universitario anual, este año contamos con más presencia de estudiantes y con la participación de Curro Claret. ',
  }
];

/* ==========================================================
   2. FILTROS DEL POST IT 
   ========================================================== */
let filters = { 
  foto: false, 
  sobremi: false, 
  infoPro: false, 
  contacto: false, 
  year: 'all', 
  cat: 'all' 
};

/* ==========================================================
   3. RUTAS Y NAVEGACIÓN
   ========================================================== */
const router = {
  /* Vista Principal (Home)*/
  home: function () {
    const container = document.getElementById('view-container');
    
    /* Elegir elementos del filtro*/
    document.getElementById('popup-header').innerText = '// homepage.sys';
    document.getElementById('filtros-home').classList.remove('hidden');
    document.getElementById('contacto-fijo-proyecto').classList.add('hidden');

    container.innerHTML = `
      <div class="info-container" style="display: flex; gap: 60px; align-items: flex-start;"> 
        <div id="info-sobremi" class="sobremi-box ${filters.sobremi ? '' : 'hidden'}" style="max-width: 700px;">
          <p class="proyecto-descripcion-texto">
            Tengo 21 años, soy de Sevilla (Andalucía, España) y actualmente estudio Diseño de Producto en UDIT - Universidad de Diseño y Tecnología en Madrid. Me gusta el diseño que se enfoca en el usuario, lo cotidiano y la mejora social.
          </p>
          <p class="proyecto-descripcion-texto" style="margin-top: 15px;"> 
            Mi objetivo como diseñadora es enfocar mi trabajo a lo cultural, social y emocional, utilizando el diseño como puente para ello.
          </p>
        </div>
        <div id="info-contacto" class="contacto-box ${filters.contacto ? '' : 'hidden'}">
          <p class="proyecto-descripcion-texto">
            <a href="mailto:solemanzanopaez@gmail.com" class="contacto-link" style="text-decoration: none; color: inherit; transition: color 0.2s;">Email</a><br>
            <a href="https://www.instagram.com/solee.archive?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="contacto-link" style="text-decoration: none; color: inherit; transition: color 0.2s;">Instagram</a><br>
            <a href="https://www.linkedin.com/in/soledad-manzano-paez-5865232b2" target="_blank" class="contacto-link" style="text-decoration: none; color: inherit; transition: color 0.2s;">LinkedIn</a><br>
            + 34 644 90 80 16
          </p>
        </div>
      </div>
      <nav id="project-list"></nav>
    `;
    renderProjects();
  },

  /* Para pryecto individual*/
  project: function (id) {
    const p = projectsData.find(item => item.id === id);
    const container = document.getElementById('view-container');
    if (!p) return;

    /* Post it dentro del proyecto*/
    document.getElementById('popup-header').innerText = '// contacto.sys';
    document.getElementById('filtros-home').classList.add('hidden');
    document.getElementById('contacto-fijo-proyecto').classList.remove('hidden');

    container.innerHTML = `
      <div class="project-page">
        <div class="project-header-inline"> 
          <h2 class="nombre-proyecto">${p.title}</h2>
          <span class="subtitulo-proyecto">${p.info}</span>
        </div>

        <div class="project-info-grid">
          <div class="info-column">
            <h3 class="col-title">Proyecto</h3>
            <p class="proyecto-descripcion-texto">${p.projectDescription || ''}</p>
          </div>
          
          <div class="info-column">
            ${p.tools ? `
              <h3 class="col-title">Herramientas</h3>
              <p class="herramientas-texto">${p.tools}</p>
            ` : ''}
          </div>
        </div>
        
        ${renderGallery(p)}
      </div>
    `;
    window.scrollTo(0, 0);
  }
};

/* ==========================================================
   4. FUNCIONES DE RENDERIZADO (PARA QUE VAYA MEJOR)
   ========================================================== */

function renderProjects() {
  const listContainer = document.getElementById('project-list');
  if(!listContainer) return;

  const filtered = projectsData.filter(p => 
    (filters.year === 'all' || p.year === filters.year) && 
    (filters.cat === 'all' || p.cat === filters.cat)
  );

  listContainer.innerHTML = filtered.map(p => `
    <div class="project-item" onclick="router.project('${p.id}')">
      <span class="nombre-proyecto">${p.title}</span>
      <img src="${p.img}" 
           class="mini-thumb ${filters.foto ? '' : 'hidden'}" 
           style="height: ${p.thumbHeight || '70px'};"> 
      <span class="subtitulo-proyecto ${filters.infoPro ? '' : 'hidden'}">${p.info}</span>
    </div>
  `).join('');
}

function renderGallery(p) {
  if (!p.gallery) return '';
  
  return `
    <section class="project-gallery-vertical">
      ${p.gallery.map((src, index) => {
        let html = '';
        // Caso especial Muestra porque no tienes herramientas
        if (p.id === 'Muestra' && index === 3 && p.dividerText) {
          html += `
            <div class="project-description-centered" style="margin: 60px 0 20px 0;">
              <p class="proyecto-descripcion-texto">${p.dividerText}</p>
            </div>`;
        }
        html += `
          <div class="gallery-item-full item-${index}">
            <img src="${src}" class="gallery-img-full img-${p.id.replace(/\s+/g, '-')}-${index}">
          </div>`;
        return html;
      }).join('')}
    </section>`;
}

/* ==========================================================
   5. SISTEMA DE MOVIMIENTO DE POST OIT Y QUE SE QUEDE EN CUALQUIER LADO
   ========================================================== */

function initDraggable() {
  const popup = document.getElementById('tool-popup');
  const header = document.getElementById('popup-header');
  let dragging = false, offset = { x: 0, y: 0 };

  header.onmousedown = (e) => { 
    dragging = true; 
    offset.x = e.clientX - popup.offsetLeft; 
    offset.y = e.clientY - popup.offsetTop; 
  };

  document.onmousemove = (e) => { 
    if (!dragging) return; 
    const x = e.clientX - offset.x;
    const y = e.clientY - offset.y;
    popup.style.left = x + 'px'; 
    popup.style.top = y + 'px'; 
    popup.style.right = 'auto'; 
    createTrail(x, y); 
  };

  document.onmouseup = () => dragging = false;
}
 // Para la estela
function createTrail(x, y) { 
  const trail = document.createElement('div');
  trail.className = 'trail';
  trail.style.left = x + 'px';
  trail.style.top = y + 'px';
  document.body.appendChild(trail);
  setTimeout(() => { 
    trail.style.opacity = '0'; 
    trail.style.transform = 'scale(0.9)'; 
  }, 50);
  setTimeout(() => { trail.remove(); }, 700);
}

/* ==========================================================
   6. CONTROLADORES DE EVENTOS (Listeners)
   ========================================================== */

function initPopupListeners() {
  // Filtros de chekear los checkboxes
  document.getElementById('check-foto').onclick = (e) => { filters.foto = e.target.checked; renderProjects(); };
  document.getElementById('check-info-pro').onclick = (e) => { filters.infoPro = e.target.checked; renderProjects(); };
  
   // Filtros de chekear sobre mi
  document.getElementById('check-sobremi').onclick = (e) => { 
    filters.sobremi = e.target.checked; 
    document.getElementById('info-sobremi')?.classList.toggle('hidden', !filters.sobremi); 
  };
  
   // Filtros de chekear los contacto
  document.getElementById('check-contacto').onclick = (e) => { 
    filters.contacto = e.target.checked; 
    document.getElementById('info-contacto')?.classList.toggle('hidden', !filters.contacto); 
  };

  // Menús desplegables
  document.getElementById('check-years').onclick = (e) => { 
    document.getElementById('sub-years').classList.toggle('hidden', !e.target.checked); 
    if (!e.target.checked) { filters.year = 'all'; renderProjects(); }
  };
  
   // Filtros de agrupar
  document.getElementById('check-agrupar').onclick = (e) => { 
    document.getElementById('sub-agrupar').classList.toggle('hidden', !e.target.checked); 
    if (!e.target.checked) { filters.cat = 'all'; renderProjects(); }
  };

  // Botones de filtrado por años para enseñar en pantalla
  document.querySelectorAll('input[name="year"]').forEach(r => {
    r.onchange = (e) => { filters.year = e.target.value; renderProjects(); };
  });
  
  document.querySelectorAll('input[name="cat"]').forEach(r => {
    r.onchange = (e) => { filters.cat = e.target.value; renderProjects(); };
  });
}

/* ==========================================================
   7. INICIALIZACIÓN DE SISTEMA DE PÁGINA (se enciende cada vez que se abre página)
   ========================================================== */
window.onload = () => { 
  initPopupListeners(); 
  initDraggable(); 
  router.home(); 
};