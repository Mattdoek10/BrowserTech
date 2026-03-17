
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

    div2A.insertBefore(kloon, templating2A);
}

let autoScroll = document.querySelectorAll("input[type='radio']");
autoScroll.forEach(radio => {
    radio.addEventListener("change", autoScrollFunctie);
})

function autoScrollFunctie() {
    // setTimeout((this.closest("label").nextElementSibling.scrollIntoView({ behavior: "smooth" })), 100)

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
