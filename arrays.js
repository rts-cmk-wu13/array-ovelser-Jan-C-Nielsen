document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 
    let newNumbers = numbersArray.filter(x => { if(x > 20) { return x; }});
    console.log("Opgave 1", newNumbers)

    catsArray.push("Sniffles");
    console.log("Opgave 2", catsArray);

    console.log("Opgave 3a", dogsArray.includes("Trixie"));

    console.log("Opgave 3b", dogsArray.includes("Baxter"));

    console.log("Opgave 4a", catsArray.includes("Bagheera"));

    console.log("Opgave 4b", catsArray.includes("Salem"));

    let numbersArray3 = numbersArray.map(x => x*3);
    console.log("Opgave 5", numbersArray3);

    console.log("Opgave 6", dogsArray.join(""));

    console.log("Opgave 7a", fruitsArray.findIndex(x => x==="Mango"));

    console.log("Opgave 7b", fruitsArray.findIndex(x => x==="Blåbær"));

    console.log("Opgave 8", dogsArray.filter(x => x!=="Polly"));
}) // ends DOMContentLoaded