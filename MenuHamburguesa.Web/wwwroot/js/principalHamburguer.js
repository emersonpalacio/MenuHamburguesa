import hamburguerMenu from "./hamburguerMenu.js";
import digitalClok from "./Reloj.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel");
    digitalClok("#reloj", "#activar-reloj","#desactivar-reloj");

});

d.addEventListener("DOMContentLoaded", (e) => {

});

