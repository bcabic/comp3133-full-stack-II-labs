/* Write a function compareNumToTen that takes a number as an argument 
and returns a Promise that tests and rejects if the value is less than 
or resolves if greater than the value 10.*/


//var a = function(){}

//var a = () => {}

const compareNumToTen = (number) => new Promise((resolve, reject) => {
    if (number < 10) reject(`${number} is less than 10, failure!`);
    resolve(`${number} is greater than 10, success!`);
});


compareNumToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));

/* Write two functions that use Promises that you can chain! The first function, makeUpperCase(), 
will take in an array of words and capitalize them, and then the second function, sortWords(), 
will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error. */

const makeUpperCase = (words) => new Promise((resolve, reject) => {
    let newWordArray = [];
    for (var word of words){
        if (!typeof word === 'string'){
            newWordArray
        }
        // if (!typeof word === 'string'){
        //     reject('Error: Not all items in the array are strings!');
        // }
    }
})

var mixedArray = ['A', 'G', 'asdfasfd', 1];
makeUpperCase(mixedArray)
    .then((result => console.log(result)))
    .catch(error => console.log(error))