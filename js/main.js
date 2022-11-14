// Andiamo a creare il nostro "arrayList"
let arrayList = [ "Insalata", "Pomodori", "Cetrioli", "Zucchine", "Melanzana"];

console.log(arrayList);

// Andiamo a creare il ciclo "for"

// for (let i = 0; i < arrayList.length; i++){

//     // Andiamo a creare la varibile "element".

//     let elementI = arrayList[i];
//     // console.log(elementI);

//     // Colleghiamo la nostra lista "ul"

//     let ulList = document.getElementById("ul-list");

//     // Andiamo a creare i "li".

//     let liElement = document.createElement("li");
//     liElement.append(elementI);

//     // Andiamo ad inserire i "li" a "ul".
//     ulList.append(liElement);

//     console.log("sull'interazione " + i + " risulta l'elemento " + elementI);

// }

// Andiamo a creare il ciclo "while".

    let i = 0;

    while(i < arrayList.length){

        let elementI = arrayList[i];
        // console.log(elementI);

        // Colleghia la nostra lista "ul"

        let ulList = document.getElementById("ul-list");

        // Andiamo a creare i "li".
        let liElement = document.createElement("li");
        liElement.append(elementI);
        
        // Andiamo ad inserire i "li" a "ul".
        ulList.append(liElement);
        
        console.log("sull'interazione " + i + " risulta l'elemento " + elementI);

        i++
    }


        





