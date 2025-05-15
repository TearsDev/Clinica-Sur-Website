import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

// Inicializar AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  once: false,
  mirror: true,
  offset: 120,
  easing: 'ease-in-out'
});

// Animación del header con GSAP al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  // Animar encabezado
  gsap.from("header", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
  
  // Animar hero section
  gsap.from(".hero-animation", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
  });
  
  // Animación de secciones específicas de cada página
  initPageSpecificAnimations();
  
  // Contador animado para cifras
  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2;
      
      gsap.to(counter, {
        innerHTML: target,
        duration: duration,
        ease: "power2.inOut",
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: counter,
          start: "top 80%"
        }
      });
    });
  }
});

// Función para inicializar animaciones específicas de cada página
function initPageSpecificAnimations() {
  // Detectar qué página está activa
  const path = window.location.pathname;
  
  if (path.includes('index') || path === '/' || path === '') {
    initHomeAnimations();
  } else if (path.includes('institucional')) {
    initInstitucionalAnimations();
  } else if (path.includes('servicios')) {
    initServiciosAnimations();
  } else if (path.includes('medicina-laboral')) {
    initMedicinaLaboralAnimations();
  } else if (path.includes('contacto')) {
    initContactoAnimations();
  }
}

// Animaciones específicas para cada página
function initHomeAnimations() {
  // Animaciones para la página de inicio
  const serviceTiles = document.querySelectorAll('.service-tile');
  gsap.from(serviceTiles, {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: serviceTiles[0],
      start: "top 80%"
    }
  });
}

function initInstitucionalAnimations() {
  // Animación para línea de tiempo
  const timelineItems = document.querySelectorAll('.timeline-item');
  gsap.from(timelineItems, {
    x: function(i) { return i % 2 === 0 ? -100 : 100 },
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: timelineItems[0],
      start: "top 80%"
    }
  });
}

function initServiciosAnimations() {
  // Animaciones para servicios
  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 85%"
      }
    });
  });
}

function initMedicinaLaboralAnimations() {
  // Animaciones para medicina laboral
  const examCards = document.querySelectorAll('.exam-card');
  gsap.from(examCards, {
    y: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    scrollTrigger: {
      trigger: examCards[0],
      start: "top 80%"
    }
  });
}

function initContactoAnimations() {
  // Animaciones para contacto
  gsap.from('.contact-info-item', {
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.contact-info-item',
      start: "top 80%"
    }
  });
  
  gsap.from('.contact-form', {
    x: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    scrollTrigger: {
      trigger: '.contact-form',
      start: "top 80%"
    }
  });
}

// Inicializar Swiper para carruseles
if (document.querySelector('.swiper')) {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}
