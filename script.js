/* =========================
FILE: script.js
========================= */

/* =========================
STICKY HEADER
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 200){
    header.classList.add("show");
  }else{
    header.classList.remove("show");
  }

});

/* =========================
MOBILE MENU
========================= */

const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

/* =========================
CAROUSEL
========================= */

const images = [
  "./assets/hero.jpg",
  "./assets/thumb1.jpg",
  "./assets/thumb2.jpg",
  "./assets/thumb3.jpg"
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const thumbs = document.querySelectorAll(".thumb");

function updateCarousel(index){

  mainImage.src = images[index];

  thumbs.forEach((thumb,i)=>{
    thumb.classList.toggle("active",i===index);
  });

}

nextBtn.addEventListener("click",()=>{

  currentIndex++;

  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  updateCarousel(currentIndex);

});

prevBtn.addEventListener("click",()=>{

  currentIndex--;

  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }

  updateCarousel(currentIndex);

});

thumbs.forEach((thumb,index)=>{

  thumb.addEventListener("click",()=>{

    currentIndex = index;
    updateCarousel(index);

  });

});

/* =========================
ZOOM EFFECT
========================= */

const zoomPreview = document.getElementById("zoomPreview");

mainImage.addEventListener("mousemove",(e)=>{

  const rect = mainImage.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  zoomPreview.style.backgroundImage = `url(${mainImage.src})`;

  zoomPreview.style.backgroundPosition =
    `${xPercent}% ${yPercent}%`;

});

mainImage.addEventListener("mouseenter",()=>{

  zoomPreview.style.display = "block";

});

mainImage.addEventListener("mouseleave",()=>{

  zoomPreview.style.display = "none";

});

/* =========================
FAQ ACCORDION
========================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click",()=>{

    item.classList.toggle("active");

  });

});