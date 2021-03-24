/*
  ADD HONORIFIC

  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format

  Return a new array of strings in this format: "Honorific FirstName LastName"

  Bonus: avoid built in methods besides simple ones like .push

  // avoid  .split() as a bonus

*/

// Inputs
const honorific1 = "Mr.";
const names1 = [];
// Output: []

// Inputs
const honorific2 = "Sir";
const names2 = ["John, Elton", "Mckellen, Ian"];
// Output: ["Sir Elton John", "Sir Ian Mckellen"]

// Inputs
const honorific3 = "Dr.";
const names3 = ["Wright, Jane"];
// Output: ["Dr. Jane Wright"]

function addHonorific(str, arr){
  if (arr.length<1){
    return []
  }
  let result = []
  let firstname = ""
  let lastname = ""
  let index = 0
  for (let i=0; i<arr.length; i++){
    for(let j = 0; j < arr[i].length; j++) {
      if ("," == arr[i][j]) {
        index = j
        continue;
      } else if(index!=0){
        firstname = firstname + arr[i][j]
      } else {
        lastname = lastname + arr[i][j]
      }
    }
    result.push(str + firstname + " " + lastname);
    firstname="";
    lastname="";
    index=0;
  }
  return result
}

console.log(addHonorific(honorific2,names2))


// LONGEST NONREPEATING SUBSTRING

// Given a string, find the length of the longest substring without repeating characters.
// bonus: O(n)

// str = "abc"
// => 3

// str = "bbb"
// => 1

// str = "cabc"
// => 3

// str = "aabbc"
// => 2


// str = "dvadf"
// => 4

// O(n)

function longestSub(str){
  let obj = {};
  let longestCount = 0;
  let currentCount = 0;
  let strArr = [...str];
  for (let i = 0; i<str.length; i++){
    if (obj.hasOwnProperty(strArr[i])){
      currentCount = 0;
      i = obj[strArr[i]]
      obj = {}
    }else{
      currentCount++
      if(currentCount>longestCount){
        longestCount=currentCount
      }
      obj[strArr[i]] = i
    }
  }
  return longestCount
}

console.log(longestSub("abcabcdabcde "))