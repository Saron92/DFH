// ==============================
// SMOOTH SCROLL
// ==============================
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target){
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ==============================
// STICKY NAV LINK HIGHLIGHT
// ==============================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

// ==============================
// GALLERY MODAL
// ==============================
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const galleryImages = document.querySelectorAll(".gallery-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
