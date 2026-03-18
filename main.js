
// bron info https://www.w3schools.com/tags/tag_template.asp
let templating2A = document.querySelector(".verkijgerToevoegenKnop");
let template = document.getElementById("verkrijgerTemplate");
let div2A = document.querySelector(".divVan2a")
templating2A.addEventListener("click", volgendeVerkrijger);


function volgendeVerkrijger() {
    const kloon = template.content.cloneNode(true);
    const aantalVerkijrgers = div2A.querySelectorAll(".divVan2a").length + 2;
    kloon.querySelector(".legend2a").textContent = `Over verkrijger ${aantalVerkijrgers}`;
    kloon.querySelector(".legend2a-2").textContent = `Gegevens verkrijger ${aantalVerkijrgers}`;

    // ik heb dit laat ontdekt dus heb met ai snel in orde gemaakt; prompt: uk wil dat de name= van de template veranderd met een 1 erachter en dan 2 etc. zodat het een unieke name= heeft anders werkt me radiobutton niet goed
    kloon.querySelectorAll("input[type='radio']").forEach(radio => {
        radio.name = `${radio.name}_${aantalVerkijrgers}`;
    });

    div2A.insertBefore(kloon, templating2A);
}

let autoScroll = document.querySelectorAll("input[type='radio']");
autoScroll.forEach(radio => {
    radio.addEventListener("change", autoScrollFunctie);
})

// ik heb de functie met Ai goed laten werken, want ik had eerst een fout dat als je op nee klikte dat hij dan naar de volgende fieldset ging, maar dat is nu opgelost. De functie kijkt nu of je op ja of nee klikt en scrollt dan naar de juiste plek.
// de prompt die ik gebruikte: ik wil dat als ik op ja klik dat hij naar de volgende fieldset scrollt en als ik op nee klik dat hij naar de volgende div scrollt, want daar staat de volgende vraag.
function autoScrollFunctie() {

    setTimeout(() => {
        const volgendFieldset = this.closest("fieldset").nextElementSibling;
        
        if (this.value === "ja" && volgendFieldset) {
            volgendFieldset.scrollIntoView({ behavior: "smooth" });
        } 
        else {
            const huidigDiv = this.closest("[class^='divVan']");
            huidigDiv?.nextElementSibling?.scrollIntoView({ behavior: "smooth" });
        }
    }, 100);
}
