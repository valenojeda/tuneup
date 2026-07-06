const thumbnails = document.querySelectorAll('.thumbnails img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const images = Array.from(thumbnails);

function showImage(index) {
  lightboxImg.src = images[index].src;
  currentIndex = index;
  lightbox.style.display = 'block';
}

// Abrir imagen al hacer clic en miniatura
thumbnails.forEach((img, index) => {
  img.addEventListener('click', () => showImage(index));
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
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Botón siguiente
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});
