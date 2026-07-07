// Función para mostrar la sala seleccionada con fade
function mostrarSala(tipo) {
  document.querySelectorAll('.sala').forEach(s => {
    s.classList.add('oculto');
    s.classList.remove('show');
  });

  const sala = document.getElementById('sala-' + tipo);
  sala.classList.remove('oculto');
  sala.classList.add('show');
  sala.scrollIntoView({ behavior: 'smooth' });
}

function volverAtras() {
  document.querySelectorAll('.sala').forEach(s => s.classList.add('oculto'));
  document.getElementById('precios').scrollIntoView({ behavior: 'smooth' });
}

// Lightbox
const thumbnails = document.querySelectorAll('.thumbnails img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let images = [];

function actualizarImagenes() {
  images = Array.from(document.querySelectorAll('.sala:not(.oculto) .thumbnails img'));
}

function showImage(index) {
  if (images.length > 0) {
    lightboxImg.src = images[index].src;
    currentIndex = index;
    lightbox.style.display = 'block';
  }
}

document.addEventListener('click', (e) => {
  if (e.target.closest('.thumbnails img')) {
    actualizarImagenes();
    const img = e.target;
    const index = images.indexOf(img);
    showImage(index);
  }
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

prevBtn.addEventListener('click', () => {
  if (images.length > 0) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
});

nextBtn.addEventListener('click', () => {
  if (images.length > 0) {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = 'none';
  }
});

// Mostrar videos con fade
function mostrarVideos() {
  document.querySelectorAll('.sala').forEach(s => {
    s.classList.add('oculto');
    s.classList.remove('show');
  });

  const videos = document.getElementById('videos');
  videos.classList.remove('oculto');
  videos.classList.add('show');
  videos.scrollIntoView({ behavior: 'smooth' });
}

function volverVideos() {
  document.getElementById('videos').classList.add('oculto');
  document.getElementById('precios').scrollIntoView({ behavior: 'smooth' });
}

// --- Menú responsive ---
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
  // Cambiar ícono ☰ ↔ X
  if (menu.classList.contains('show')) {
    menuToggle.textContent = '✖';
  } else {
    menuToggle.textContent = '☰';
  }
});

// Cerrar menú al hacer clic en un enlace
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
    menuToggle.textContent = '☰'; // volver al ícono hamburguesa
  });
});
