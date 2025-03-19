document.addEventListener("DOMContentLoaded", function() {
  var acc = document.getElementsByClassName("accordion");
  for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      });
  }
});

let index = 0;

function showSlide(n) {
    let slides = document.querySelector('.slider');
    let total = document.querySelectorAll('.slider img').length;
    index = (n + total) % total; // Evita valores fora do intervalo
    slides.style.transform = `translateX(${-index * 100}%)`; // Ajuste para 100% por imagem
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

// Remova ou comente a linha abaixo para desativar o slider automático
// setInterval(nextSlide, 3000);

// Modal para expandir imagem
function openModal(img) {
    document.getElementById("modalImage").src = img.src;
    document.getElementById("imageModal").style.display = "flex";

    // Oculta os botões de navegação
    document.querySelector('.prev').style.display = "none";
    document.querySelector('.next').style.display = "none";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";

    // Exibe os botões de navegação novamente
    document.querySelector('.prev').style.display = "block";
    document.querySelector('.next').style.display = "block";
}