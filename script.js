function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburguer-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function copyText(){
    let textCopy = document.getElementById("emailCopy").innerText

    navigator.clipboard.writeText(textCopy).then(()=>{
        alert("Link copiado para a área de transferência!")
    })
    .catch(err=> {
        console.error("Erro ao copiar o texto: ", err)
    })
}

// SECTION SKILLS 

const images = document.querySelectorAll('.tech-image');
let currentIndex = 0;

function highlightImage() {
  images.forEach((img, index) => {
    img.classList.remove('active');
    if (index === currentIndex) {
      img.classList.add('active');
    }
  });
  currentIndex = (currentIndex + 1) % images.length; // Cicla para a próxima imagem
}

// Inicia a animação com intervalo de 2 segundos
setInterval(highlightImage, 1500);

// Chama imediatamente para destacar a primeira imagem
highlightImage();
