// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears.

// The maximum number of consecutive characters in a row is 9

// If final result is not shorter (such as "bb" => "b2" ),
// return the original string.

function stringEncode(str) {
  let result = ""
  let counter = 1
  for (let i=0; i<str.length; i++){
    if (str[i+1] == str[i]){
      counter++
    }else{
      result+= str[i] + counter
      counter =1
    }
  }
  return result
}

// console.log(stringEncode("aaaabbcdddbbb"))

const str1 = "aaaabbcdddbbb";
const expected1 = "a4b2c1d3b3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";


// String Decode

function stringDecode(str) {
  var result = "";
  for (let i = 0; i < str.length; i++) {
      if (isNaN(str[i])) {
          result += str[i]
      } else {
          for (let j = 1; j < parseInt(str[i]); j++) {
              result += str[i-1];
          }
      }
  }
  return result;
}

function stringDecode2(str) {
  let result = ""
  for(let i=0; i<str.length; i++){
    if(isNaN(str[i])){
      result+=str[i].repeat(str[i+1])
    }
  }
  return result
}

console.log(stringDecode2("a3b2c1d3"))

function stringDecode3(str) {
  let result = ""
  let num = 0
  for(let i=0; i<str.length; i++){
    if(isNaN(str[i])){
      num = parseInt(str[i+1])
      result+=Array(num+1).join(str[i])
    }
  }
  return result
}

// const str1 = "a3b2c1d3";
// const expected1 = "aaabbcddd";

