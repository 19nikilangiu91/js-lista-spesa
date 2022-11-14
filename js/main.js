// Andiamo a creare il nostro "arrayList"
let arrayList = [ "Insalata", "Pomodori", "Cetrioli", "Zucchine", "Melanzana"];

console.log(arrayList);
// Andiamo a creare il nostro "containerList".

let containerList = document.createElement("div");

// Andiamo a creare la "ul".

let ulList = document.createElement("ul");

// Andiamo ad aggiungerli nella pagine

document.getElementsByTagName('body')[0].appendChild(containerList);
containerList.appendChild(ulList);


    // Creo un ciclo "for".
    
    for (let i = 0; i < arrayList.length; i++){
    
    // Andiamo a creare la varibile "element".
    
    let elementI = arrayList[i];
    console.log(elementI);
    
    // Andiamo a creare i "li".
    
    let liElement = document.createElement("li");
    liElement.append(elementI);
    
    // Andiamo ad inserire i "li" a "ul".
    ulList.append(liElement);
    
    // console.log("sull'interazione " + i + " risulta l'elemento " + elementI);
 }





