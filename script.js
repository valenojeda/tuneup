// Función para mostrar la sala seleccionada con fade
function mostrarSala(tipo) {
  // Ocultar todas las salas
  document.querySelectorAll('.sala').forEach(s => {
    s.classList.add('oculto');
    s.classList.remove('show');
  });

  // Mostrar la sala elegida con animación
  const sala = document.getElementById('sala-' + tipo);
  sala.classList.remove('oculto');
  sala.classList.add('show');
  sala.scrollIntoView({ behavior: 'smooth' });
}

// Función para volver atrás
function volverAtras() {
  // Ocultar todas las salas
  document.querySelectorAll('.sala').forEach(s => s.classList.add('oculto'));

  // Scroll hacia la sección de precios
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

// Actualizar lista de imágenes cada vez que se muestra una sala
function actualizarImagenes() {
  images = Array.from(document.querySelectorAll('.sala:not(.oculto) .thumbnails img'));
}

// Mostrar imagen en el lightbox
function showImage(index) {
  if (images.length > 0) {
    lightboxImg.src = images[index].src;
    currentIndex = index;
    lightbox.style.display = 'block';
  }
}

// Delegar evento de clic en miniaturas
document.addEventListener('click', (e) => {
  if (e.target.closest('.thumbnails img')) {
    actualizarImagenes();
    const img = e.target;
    const index = images.indexOf(img);
    showImage(index);
  }
});

// Cerrar con botón "X"
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Cerrar si se hace clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// Botón anterior
prevBtn.addEventListener('click', () => {
  if (images.length > 0) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
});

// Botón siguiente
nextBtn.addEventListener('click', () => {
  if (images.length > 0) {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
});

// Cerrar lightbox con tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = 'none';
  }
});

// Mostrar videos con fade
function mostrarVideos() {
  // Ocultar todas las salas
  document.querySelectorAll('.sala').forEach(s => {
    s.classList.add('oculto');
    s.classList.remove('show');
  });

  // Mostrar la sección de videos con animación
  const videos = document.getElementById('videos');
  videos.classList.remove('oculto');
  videos.classList.add('show');
  videos.scrollIntoView({ behavior: 'smooth' });
}
