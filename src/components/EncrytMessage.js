"use strict";

//You and your friends are all fans of the hit TV show ThroneWorld and like to discuss it on social media. Unfortunately, some of your friends don't watch every new episode the minute it comes out. Out of consideration for them you would like to obfuscate your status updates so as to keep them spoiler-free.
// You settle on a route cipher, which is a type of transposition cipher. Given a message and integers r and c, to compute the route encryption of the message:
// Write out the message row-wise in a grid with r rows and c columns
// then read the message column-wise.
// You are guaranteed that r * c == len(message).
// Your task is to write a function that, given a message, r, and c, returns the route encryption of the message.
// message = "One does not simply walk into Mordor", r = 6, c = 6
// O n e   d o 
// e s   n o t
//   s i m p l
// y   w a l k
//   i n t o  
// M o r d o r 
// One does not simply walk into Mordor
// -> "Oe y Mnss ioe iwnr nmatddoploootlk r"


// message = "1.21 gigawatts!", r = 5, c = 3
// 1 . 2
// 1   g
// i g a
// w a t
// t s !
// -> "11iwt. gas2gat!"

// message = "1.21 gigawatts!", r = 3, c = 5 
// 1 . 2 1 
// g i g a w
// a t t s !
// -> "1ga.it2gt1as w!"

function encryptMessage(message, row, column){
  let array = message.split("")
  let rows = []
  let result = []
  for(let i = 0; i < row; i++){
    let newArr = []
    arr.push(array.splice(0, column)) // [...column(n)] Creates a new array containning the value (passed to column) elements in it
    rows.push(newArr) // [[...row(n)]] pushes the newly created arrays into the rows array until it reaches the value (passed to row)
  }
  for(let i = 0; i < column; i++){
    for(let j = 0; j < rows.length; j++){
      result.push(rows[j][0].shift()) // pushing the destructively removed first element of each array in the result array
    }
  }
  return result.join("") // Joining the result to return a single email
}


console.log(encryptMessage("1.21 gigawatts!", 3, 5 ))
// "1ga.it2gt1as w!"

console.log(encryptMessage("1.21 gigawatts!", 5, 3 ))
// "11iwt. gas2gat!"

console.log(encryptMessage("One does not simply walk into Mordor", 6, 6))
// "Oe y Mnss ioe iwnr nmatddoploootlk r"