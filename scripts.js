// Sarah Kessi - 20348702, Felicia Luu - 22334856, Marie Makarenkov 20342056, Kenza Hilali 20205908
function aggrandir(element) {
    element.style.transform = "scale(1.05)";
    element.style.transition = "transform 0.4s ease";
}

function retrecir(element) {
    element.style.transform = "scale(1)";
    element.style.transition = "transform 0.4s ease";
}

function afficherMenu() {
    document.querySelector(".header-subnav")?.classList.toggle("is-open");
}

