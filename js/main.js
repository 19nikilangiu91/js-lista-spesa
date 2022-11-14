// Andiamo a creare il nostro "arrayList"
let arrayList = [ "Insalata", "Pomodori", "Cetrioli", "Zucchine", "Melanzana"];

// Colleghiamo la nostra lista "ul"
let ulList = document.getElementById("ul-list");


console.log(arrayList);

// Andiamo a creare il ciclo "for"

    // for (let i = 0; i < arrayList.length; i++){

    //     // Andiamo a creare la varibile "element".
    //     let elementI = arrayList[i];
    //     // console.log(elementI);

    //     // Andiamo ad inserire e stampare i "li" dentro la lista "ul".
    //     ulList.innerHTML += `<li>${elementI}</li>`;

    //     console.log("sull'interazione " + i + " risulta l'elemento " + elementI);

    // };

// Andiamo a creare il ciclo "while".

    let i = 0;

    while(i < arrayList.length){

        // Andiamo a creare una variabile per inserire la nostra "arrayList".
        let elementI = arrayList[i];
        // console.log(elementI);
        
        // Andiamo ad inserire e stampare i "li" dentro la lista "ul".
        ulList.innerHTML += `<li>${elementI}</li>`;
        
        i++;
    };