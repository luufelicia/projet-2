// Sarah Kessi - 20348702, Felicia Luu - 22334856, Marie Makarenkov 20342056, Kenza Hilali 20205908
console.log("Titre de la page: ", document.title);
console.log("URL de la page: ", window.location.href);

const now = new Date();
console.log("Date de l'analyse :", now.toISOString());

console.log("Largeur de la fenêtre: ", window.innerWidth, "px");
console.log("Hauteur de la fenêtre: ", window.innerHeight, "px");

console.log("Nombre de headers: ", document.querySelectorAll("header").length);
console.log("Nombre de groupes de liens navigation: ", document.querySelectorAll("nav").length);
console.log("Nombre de sections: ", document.querySelectorAll("section").length);
console.log("Nombre de paragraphes: ", document.querySelectorAll("p").length);
console.log("Nombre de boutons: ", document.querySelectorAll("button").length);
console.log("Nombre de footer: ", document.querySelectorAll("footer").length);

// Images
const images = document.querySelectorAll("img");
let altVide = 0;
let altNonVide = 0;

images.forEach(img => {
    if (img.hasAttribute("alt")) {
        altNonVide++;
    } else {
        altNonVide++;
    }
});

console.log("Nombre d'images: ", images.length);
console.log("Nombre d'images avec alt non vide: ", altNonVide);
console.log("Nombre d'images avec alt vide: ", altVide);


// Liens externes et internes
const liens = document.querySelectorAll("a[href]");
const domaine = window.location.hostname;

let internes = 0;
let externes = 0;

liens.forEach(lien => {
    const url = new URL(lien.href);
    if (url.hostname === domaine) {
        internes++;
    } else {
        externes++;
    }
    
});

console.log("Nombre total de liens:", liens.length);
console.log("Liens internes:", internes);
console.log("Liens externes:", externes);


// Nombre d'éléments utilisant flex
const elements = document.querySelectorAll("*");
let flex = 0;

elements.forEach(element => {
  const style = window.getComputedStyle(element);

  if (style.display === "flex" || style.display === "inline-flex") {
    flex++;
  }

});

console.log("Éléments utilisant flex:", flex);




