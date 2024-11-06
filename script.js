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

