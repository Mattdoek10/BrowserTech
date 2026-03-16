// let templating2A = document.querySelector(".verkijgerToevoegenKnop");
// let formulier = document.querySelector("form");
// templating2A.addEventListener("click", toonVolgendeTemplate);

// function toonVolgendeTemplate() {
//     formulier.insertAdjacentHTML("beforeend", ` 
//                 <div class="divVan2a">
//                 <fieldset class="_2a-1">
//                     <legend class="legend2a">2a</legend>

//                     <h2>Zijn er verkrijgers voor wie u geen aangifte doet?</h2>
//                     <label>
//                             Nee
//                             <input type="radio" name="verkijgers" value="nee" required />
//                         </label>

//                         <label>
//                             Ja. Vul hieronder de gegevens in van de verkrijgers waarvoor u geen aangifte doet. Gaat het om een instelling? Vul dan de naam van deinstelling in bij 'achternaam'. Het invullen van een bsn is niet verplicht, maar wel handig voor ons.
//                             <input type="radio" name="verkijgers"  value="ja" required />
//                         </label>
//                 </fieldset>

//                 <fieldset class="_2a-2">
//                     <legend>Gegevens verkrijger 1</legend>

//                     <label for="bsnVerkrijger1">BSN/RSIN</label>
//                     <input type="number" id="bsnVerkrijger1" minlength="9" maxlength="9" size="9">

//                     <label for="voorLettersVerkrijger1">Voorletter(s)</label>
//                     <input type="text" id="voorLettersVerkrijger1" pattern="[A-Za-z.]+" title="Vul alleen letters en punten in">

//                     <label for="tussenVoegselsVerkrijger1">Tussenvoegsel(s)</label>
//                     <input type="text" id="tussenVoegselsVerkrijger1" pattern="[a-zA-Z ]+" title="Vul alleen letters in">

//                     <label for="achterNaamVerkrijger1">Achternaam</label>
//                     <input type="text" id="achterNaamVerkrijger1" pattern="[a-zA-Z\s\-]+" title="Vul alleen letters in">

//                     <fieldset class="_2a-2-1">
//                         <legend>Krijgt deze verkrijger waarvoor u geen aangifte doet het hele vermogen?</legend>

//                         <label>
//                             Nee.
//                             <input type="radio" name="verkrijgerVermogen" value="nee" required />
//                         </label>

//                         <label>
//                             Ja
//                             <input type="radio" name="verkrijgerVermogen" value="ja" required />
//                         </label>
//                     </fieldset>

//                     <fieldset class="_2a-2-2">
//                         <legend>Doet deze verkrijger een beroep op diens legitieme portie (wettelijke erfdeel)?</legend>

//                         <label>
//                             Nee.
//                             <input type="radio" name="legitiemePortie" value="nee" required />
//                         </label>

//                         <label>
//                             Ja
//                             <input type="radio" name="legitiemePortie" value="ja" required />
//                         </label>
//                     </fieldset>

//                 </fieldset>

//                 <button class="verkijgerToevoegenKnop" type="button">Voeg nog een verkrijger toe</button>


//             </div>
//     `);
// }


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
