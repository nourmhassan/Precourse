// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if(x>y){
  return x;
  }else if(y>x){
  return y;
  }else{
  return x;
  }
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  var text;
    switch(language) {
    case 'German':
        text = 'Guten Tag!';
        break;
    case 'English':
        text = 'Hello!';
        break;
    case 'Spanish':
        text = 'Hola!';
        break;
    default:
        text = 'Hello!';
}
return text;

}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
if(num == 5 || num == 10){
return true;
}else{
return false;
}
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  var result = Boolean(num<50 && num>20);
  return result;
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  var data = Number.isInteger(num);
  return data;
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  const fizz = 'fizz';
  const buzz = 'buzz';
  const fizbuzz = 'fizzbuzz';

  if(num%3 == 0 && num%5==0){
  return fizbuzz;
  }
  else if(num%5 == 0){
  return buzz;
  }
  else if(num%3==0){
  return fizz;
  }
  else{
  return num;
  }
  }

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;

}

function returnFirst(arr) {
  // return the first item from the array
  let firstitem = arr[0];
  return firstitem;
}

function returnLast(arr) {
  // return the last item of the array
  let lastitem = arr[arr.length - 1];
  return lastitem;
}

function getArrayLength(arr) {
  // return the length of the array
var result =  arr;
var result2=result.length;
return result2;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  var result = arr.map(a => a + 1);
  return result;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
var arrayitem = arr;
arrayitem.push(item);
return arrayitem;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
var arrayitem = arr;
arrayitem.unshift(item);
return arrayitem;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
   var sentence = ''; 
   for (var i = 0; i < words.length; i++) {
      sentence += ' ' + words[i]; 
   }
   return sentence.trim(); 

}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  var result = Boolean(arr.includes(item));
  return result;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  var result = numbers.reduce((a, b) => a + b, 0);
  return result;


}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  var thisTotal=0,thisAverage=0;
  for(var i=0;i<testScores.length;i++){
  thisTotal+=testScores[i];
  }
  thisAverage=(thisTotal/testScores.length);
  return thisAverage;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer

  var result = Math.max.apply(null, numbers);
  return result;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};