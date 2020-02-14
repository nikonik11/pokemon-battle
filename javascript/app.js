

//je crée une constante pour mes 2 pages 
const premiere = document.querySelector("#main");
const deuxieme = document.querySelector("#select");

const pokemons = document.getElementsByClassName("avatar");

const escroco = document.querySelector("#escroco");
const dracaufeu = document.querySelector("#dracaufeu");
const machopeur = document.querySelector("#machopeur");
const saquedeneu = document.querySelector("#saquedeneu");

let escrocoName = pokemons[0].dataset.name;
let escrocoLife = pokemons[0].dataset.life;
let escrocoAtak = pokemons[0].dataset.atak;

let dracaufeuName = pokemons[1].dataset.name;
let dracaufeuLife = pokemons[1].dataset.life;
let dracaufeuAtak = pokemons[1].dataset.atak;

let machopeurName = pokemons[2].dataset.name;
let machopeurLife = pokemons[2].dataset.life;
let machopeurAtak = pokemons[2].dataset.atak;

let saquedeneuName = pokemons[3].dataset.name;
let saquedeneuLife = pokemons[3].dataset.life;
let saquedeneuAtak = pokemons[3].dataset.atak;



//je fait disparaitre ma deuxieme page 
document.getElementById("select").style.display = "none";
//je crée une fonction qui me permettra de l'afficher a nouveau
function next(){
    document.body.replaceChild(deuxieme,premiere);
    document.getElementById("select").style.display = "block";  
}


//je crée ma boucle qui me permet de les choisir un par un
for (let i = 0 ; i < (pokemons.length) ; i++) {
    pokemons[i].addEventListener('click',function() {
        
        let pok = pokemons[i];
        console.log(pok.dataset.name);
        pok.classList.add('chx');  
    })
}

for(let i = 0 ; i < (pokemons.length) ; i++){
    pokemons[i].addEventListener("click", function(event) {
      
      event.target.classList.add("clicked");
      let clicked = document.getElementsByClassName("clicked");
      //console.log(clicked)
      
      if (clicked.length == 2) {
      document.querySelector(".avatar:not(.clicked)").hidden = true;
        
      }
     
});
}

// var images = document.getElementsByTagName('img');
// console.log(images);
// for (let i = 0; i < (images.length) ; i++){
//     let ima = images[i];
//     // console.log(images[i]);
//     if (ima === 2 ){
        
//     }
// }


alert (images[0].dataset.name);

// if (escrocoName === true){

//     machopeur.style.display= "none";
// }


// lifee = escroco.dataset.life;

// console.log();

// for (let i = 0; i < (pokemons.length); i++) {
//     pokemons[i].addEventListener('click',function(){
//         let pok = pokemons[i];
//         if (pok > 2 )
//         pok.classList.add('vid');
//     })
// }

// const escroco = document.querySelector("#escroco");
//console.log(escroco);
// escroco.onclick = function(){
//     escroco.classList.add('chx')
// }

// var choix = document.querySelectorAll('avatar');
// for (var i = 0; i < choix.length; i++ ){
//     choix.addEventListener('click', function() {
//         this.classlist.add('ch')
//     })
// }

// var poki = document.querySelectorAll(".avatar");
// console.log(poki);

// const ava = document.getElementsByClassName(".avatar");
// console.log(ava)
//var image = document.querySelectorAll(".avatar");

/*
function page2() {
    document.getElementById("main").style.display = "none";
    document.getElementById("image").style.width = "300px";
    document.getElementById("bold").style.display = "none";
    let elem = document.getElementById('elem');
    elem.style.display = 'block';
}
let button = document.getElementById("bold");
button.addEventListener("click",change);


// const laun = document.querySelector("#main");
// const ladeux = document.querySelector(".la");

/*planifier une fonction qui va ajouter des elements, ici on va 
ajouter des <li> dans une <ul>
le <ul> est crée dans le html evidemment
function planifierRepas(heure, tache){
    const repas = document.createElement("li");
    repas.innerHTML = `<h3>${heure}</h3><p>${tache}</p>`;
    document.querySelector("ul").appendChild(repas);
}
planifierRepas('08h00','ptidej');
planifierRepas('12h00','repas');
planifierRepas('17h00','gouter');
planifierRepas('20h00','souper');
*/

/* permet de creer et d'ajouter un element 
const kikou = document.createElement("div");//je crée la const
kikou.classList.add("kikou");//je l'ajoute
kikou.textContent = "voila lalala";// je lui donne du texte 
document.body.appendChild(kikou);// je lui indique que je veut que 
ce soit un child de mon body ,donc un frere de mes autres div
*/

/*permet de supprimer un element
const laun = document.querySelector("#main");
const ladeux = document.querySelector(".la");
laun.remove(); ATTENTION , ne marche pas sur tout les brower
sinon essayer avec ladeux.parentelement.removechild(ladeux)
*/

/* permet de remplacer un element par un autre
const laun = document.querySelector("#main");
const ladeux = document.querySelector(".la");
document.body.replaceChild(ladeux,laun);
*/

/* permet de mettre un element avant l'autre
//const block1 = document.querySelector(".row");
//const block2 = document.querySelector(".row1");
//document.body.insertBefore(block1,block2)
*/

/* permet d'inserer un element dans un autre
//const block1 = document.querySelector(".row");
//const block2 = document.querySelector(".row1");
//document.body.appendChild(block1,block2)
*/

/* permet de modifier des elements
//document.getElementById("main").style.backgroundColor = 0"red";
//document.getElementById("block2").style.border = "10px solid green";
*/

/*
function page2() {
    document.getElementById("main").style.display = "none";
    document.getElementById("image").style.width = "300px";
    document.getElementById("bold").style.display = "none";
    let elem = document.getElementById('elem');
    elem.style.display = 'block';
}
let button = document.getElementById("bold");
button.addEventListener("click",change)   */
//document.title = "mon titre nouveau";
//console.log(document.title);
//console.log(document.body);
//console.log(document.body.children[5]);