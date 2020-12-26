﻿const d = document;
export default function digitalClok(clock, btnPlay, btnStop) {
    let clockTiempo;
    d.addEventListener("click", (e) => {
        if (e.target.matches(btnPlay)) {
            clockTiempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3> ${clockHour}</h3>`;

            }, 1000);
            e.target.disabled = true;
        }
        if (e.target.matches(btnStop)) {
            clearInterval(clockTiempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    });
   



}