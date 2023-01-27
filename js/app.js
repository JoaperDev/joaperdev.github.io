const menu = document.querySelector(".menu");
const btnAbrirMenu = document.querySelector(".abrirMenu");
const btnCerrarMenu = document.querySelector(".cerrarMenu");

function alternarMenu() {
    menu.classList.toggle("menuAbierto");
}

btnAbrirMenu.addEventListener("click", alternarMenu);
btnCerrarMenu.addEventListener("click", alternarMenu);

const linksMenu = document.querySelectorAll('.menu a[href^="#"]');

const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const linkMenu = document.querySelector(`.menu a[href="#${id}"]`);
        if (entry.isIntersecting) {
            document.querySelector(".menu a.seleccionado").classList.remove("seleccionado");
            linkMenu.classList.add("seleccionado");
        }
    });
}, {rootMargin: "-50% 0px -50% 0px"})

linksMenu.forEach(linkMenu => {
    linkMenu.addEventListener("click", function () {
        menu.classList.remove("menuAbierto");
    });
    const hash = linkMenu.getAttribute("href");
    const objetivo = document.querySelector(hash);
    if(objetivo){
        observador.observe(objetivo);
    }
})

