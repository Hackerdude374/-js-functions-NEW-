//-----------forEach()
/*
Without using the native “Array.prototype.forEach” method of JavaScript, compose a function titled “myEach” that will take in an array of elements and executes any callback function (provided by you) on each of those elements.
*/


function myEach(arr, callback){
  for(let i = 0; i< arr.length; i++){
    callback(arr[i], i,arr); //parametersof forEach
  }
}
//callback

function print(element,index){
  console.log("Element: " + element + " Index: " + index);
}
console.log("---myEach--------");
let array1 = [1,2,3];
myEach(array1,print);

//----map()
/*Without using the native “Array.prototype.map” method of JavaScript, compose a function titled “myMap” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.*/
console.log("---myMap--------");
function myMap(arr, callback){
  let result =[];
  for(let i = 0; i < arr.length; i++){
    result[i] = callback(arr[i]);
  }
  return result;
}

function double(element){
  return element*2;
}

let array2=[1,2,3];
console.log(myMap(array2,double));

console.log("---filter--------");
/*
Without using the native “Array.prototype.filter” method of JavaScript, compose a function titled “myFilter” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.
*/
function filter(array, callback){
  let result =[];
  for(let i = 0;i< array.length; i++){
    if(callback(array[i])){
      result.push(array[i]);
    }
    
  }
  return result;
}
function isNegative(element){
  if(element<0){
    return true;
  }
  return false;
}
let array3 = [-1,-5,29];
console.log(filter(array3,isNegative));

console.log("---some-----------------");
/*Without using the native “Array.prototype.some” method of JavaScript, compose a function titled “mySome” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.
*/

function mySome(array, callback){
    for(let i = 0; i < array.length; i++){
    if(callback(array[i])){
      console.log("A negative element exists in this array");
      return true;
    }
  }
  console.log("there is no negative element in this list");
}

function aNegativeElementExists(element ){
  if(element < 0){
    return true;
  }
  return false;
}
console.log(mySome(array3, aNegativeElementExists));

console.log("-----every()-------------------------");
function every(array, callback){
  totalcount = 0;
  for(let i = 0; i< array.length; i++){
    if(callback(array[i])){
      totalcount++;
    }
  }

  if(totalcount == array.length){
    console.log("all has passed");
  }
  else
    console.log("one or element did not pass.");
}
function isNegative1(element){
  if(element<0){
    return true;
  }
  return false;
}

every(array3, isNegative1);
console.log("-----reduce()--------------------");

function reduce(array, callback){
  let result = [];
  for(let i = 0; i < array.length; i++){
    result.push(callback(array[i]));
  }
  return result;
}


function decrement(element){
  return element-1;
}
let array5 = [1,3,5];
console.log(reduce(array5, decrement));

console.log("-----induces()-------------------------");



function induces(array, callback, target){
  for(let i = 0; i<array.length; i++){
    if(callback(target, array[i])){
      console.log("target " + target + " found");
      return true;
    }
  }
  console.log("target " +target+ " not found.");
  return false;
}

function targetFound(target, arrayValue){
  if(target == arrayValue){
    return true;
  }
  return false;
}
console.log(induces(array5,targetFound,5));



console.log("-----indexOf()--------------------");

function MyIndexOf(array, callback,target){
  let targetfound =0;
  let targetIndex = 0;
  for(let i = 0; i < array.length; i++){
    if(callback(target,array[i])){
      targetfound = 1;
      targetIndex = i;
    }
  }
  if(targetfound == 1){
    console.log("target of " + target + " has been found at index " + targetIndex);
  }
  else
    console.log("target not found" );
    return -1;
}
//let array5 = [1,3,5];
console.log(MyIndexOf(array5, targetFound, 5));


console.log("-----push()---------------------");

function myPush(array, callback,element){
  array[array.length] = callback(element);
  console.log("element " + element + " appended.");
  return array;
}

function elementToAdd(element){
  return element;
}

console.log(myPush(array5, elementToAdd, 6));


console.log("-----lastIndexOf()--------------------------");

function lastIndexOf(array, callback,target){
  let targetfound = 0;
  let targetindex = 0;
  for(let i = array.length; i > 0; i--){ //just search in the back of the array.
    if(callback(target,array[i])){
      targetfound =1;
    targetIndex = i;
  }
  }
  
  if(targetfound == 1){
    console.log("target of " + target + " has been found at the last index " + targetIndex);
  }
  else
    console.log("target not found" );
    return -1;
}

let arr12 = [1,2,3,2,4,1,2,7];
console.log(lastIndexOf(arr12, targetFound, 1));

console.log("-----OBbject.keys---------------------");
/*
Without using the native “Object.keys()” method of JavaScript, compose a function titled “grabKeys” that will take in an object and return all of the keys of the key:value pairs of that object. Modify the Object class, appending a static method to the Object class., appending a static method to the Object class. Leverage the “for...in” loop*/

Object.grabKeys = function(object){
  let result =[];
  for(let key in object){
    result.push(key);
  }
  return result;
}
let Person = {
  name: "max payne",
  job: "NYPD",
  city: "new YOrk"
}
console.log(Object.grabKeys(Person));
console.log("-----Object.values()-------------------------");


Object.grabValues = function(object){
  let result = [];
  for(let key in object){
    result.push(object[key]);
  }
  return result;
 
}
  console.log(Object.grabValues(Person));
/*
Miscellaneous Problems (1)

1: Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

function moveZeros (nums) {

}


Example:


Input: [0,1,0,3,12]
Output: [1,3,12,0,0]


Note:


You must do this in-place without making a copy of the array.
*/

//my solution:
//make a new array. push anything that is not zero into it
//if it hits a zero, increment zero count by 1
//then loop by zerocount to push remaining 0s.

let theArray = [0,1,0,3,12];

function sortie(array, callback){
  let result = []; //new array
  let zerocount = 0; //zero count to be incremented
  for(let i = 0; i < array.length; i++ ) {
    if(callback(array[i])){
      zerocount++;
    }
    else
      result.push(array[i]);
  }
  //add remaining zeros
  for(let i = 0; i < zerocount; i++){
    result.push(0);
  }
  return result;
}

function isAZero(element){
  if(element == 0){
    return true;
  }
  return false;
}

console.log(sortie(theArray, isAZero));
console.log("4 miscellaneous problems");
/*
Sum of a Range
Reversing an Array
A List
Deep Comparison
*/
console.log("-----------SUm of a range--------------");
/*Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].*/


function makeRange(start, end, interval){
  let result = [];
  let block = end / interval;
let element = start;
  let sum = 0;
  for(let i= 0; i < block; i++){
    result.push(element);
    sum = sum+element;
    element = element+interval;
    
  }
  console.log("the total sum is " + sum);
  return result;
}


console.log(makeRange(1,10,2));
console.log("-----------------reverse array---------------");

function reverseArray(array){
  let result = [];
  for(i = array.length-1; i>-1; i--){
    result.push(array[i]);
  }
  return result;
}


let fefeewwef=[1,2,3];
console.log(reverseArray(fefeewwef));

console.log("-----------------A List--------------------")

function ArrayToList(array){
 let list = null;
  for (let i = array.length - 1; i > -1; i--) {
    list ={ 
      value: array[i],
      rest: list
      };
  }
  return list;

}

function ListToArray(array){
  let result = [];
  for (let node = list; node; node = node.rest) { //nodes are part of  a list and are not referred to by indexes like i.
    result.push(node.value);
  }
  return result;
}


function prependList(list1, element) {
  if (!list1) { //if list has no elements, the element becomes the first.
    return element;
  } 
  
    return { 
      value: list1.value, 
      rest: prependList(list1.rest, element) 
    };
  
}

function nth(list, position) {
  if (!list) { //no list exists, return undefined (no element found)
    return undefined;
  } 
  else if (position === 0) { //only one element so simply return the element
    return list.value;
  } 
  else {
    return nth(list.rest, position - 1); //iterate backwards until position found.
  }
}

console.log("-------------------DEEP COMPARISON-----------");

function deepEqual(e1,e2) {
  if (e1 === e2) { //base 
    return true;
  }
  //compare list size by keys if not equal then false
  let keys1 = Object.keys(e1);
  let keys2 = Object.keys(e2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  //
  if (typeof e1 !== "object" || typeof e1!== "object") {
    return false;
  }

  return true;
}
