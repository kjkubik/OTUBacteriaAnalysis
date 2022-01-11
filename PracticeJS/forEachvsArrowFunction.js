// using forEach vs. Arrow Function
let numbers = [13, 22, 36, 54, 55]
    // This is a good way to write this:
    //let evenNumber = []
    //
    // numbers.forEach(function(nmbr) {
    //     if (nmbr % 2 == 0) {
    //         evenNumber.push(nmbr)
    //     }
    // })
    // console.log(evenNumber)
    //
    // This is a better way to write
    // the same thing using arrow functions
    // let evenNumber = numbers.filter(nmbr => nmbr % 2 == 0)
    // console.log(evenNumber)

// var numbers = [1, 2, 3, 4, 5];

// var doubled = numbers.map(num => num * 2);
// console.log(doubled);


// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => a - b);
// console.log(sortedAge);

// you know what? THIS IS NOT HOW TO UTILIZE SORT!!!!
// var familyAge = [3, 2, 39, 37, 9];
// var sortedAge = familyAge.sort();
// console.log(sortedAge);

// I like this example because it shows your arguments into sort can be as random as you want. 
// And brings up the point it is importantly to name variables for readiblity
// var familyAge = [3, 2, 39, 37, 9];
// var sortedAge = familyAge.sort((anElement, anotherElement) => anElement -
//     anotherElement);
// console.log(sortedAge);

// // reverse order of array
// var familyAge = [3, 2, 39, 37, 9];
// sortedAge = familyAge.sort((a, b) => b - a);
// console.log(familyAge)
//
// OR REVERSE ORDER
// var familyAge = [3, 2, 39, 37, 9];
// sortedAge = familyAge.sort((a, b) => a - b).reverse();
// console.log(sortedAge)