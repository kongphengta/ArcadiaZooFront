import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/animaux", "Animaux", "/pages/animaux.html"),
    new Route("/habitats", "Habitats", "/pages/habitats.html"),
    new Route("/panda", "Panda", "/pages/panda.html"),
    new Route("/signin", "Connexion", "/pages/signin.html"),
    new Route("/signup", "Inscription", "/pages/signup.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadie Zoo";
