let numbers = [1, 3, 5, 7, 2];
let largest = Math.max(...numbers);
console.log("Largest number is:", largest); 

let numberss = [1, 3, 5, 7, 2];
let smallest = Math.min(...numberss);
console.log("smallest number is:", smallest); 

let ReverseNumbers = [1, 2, 3, 4, 5];
let reversed = ReverseNumbers.reverse();
console.log("Reversed:",ReverseNumbers);

// let Numbers = [1 ,2 ,3 ,4,5];

// for (let i = Numbers.length - 1; i >= 0; i--){
//     document.write(Numbers [i] + "</br>");
// }

let Numberstosum = [1, 2, 3, 4, 5]; 
let sum = Numberstosum.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of the numbers:", sum); 

let FirstN = [1, 2, 3, 4]; 
let SecondN = [3, 4, 5, 6]; 
let similarNumbers = FirstN.filter(num => SecondN.includes(num));
console.log("Similar numbers:", similarNumbers); 


function display(price, secondfunc) {
    let message = secondfunc(price); 
    console.log(message); 
}

function summary(price) {
    if (price > 50) { 
        return "The item is expensive.";
    } else if (price >= 20 && price <= 50) { 
        return "The item is medium-priced.";
    } else { 
        return "The item is cheap.";
    }
}

display(55, summary); 
display(30, summary);
display(15, summary);
