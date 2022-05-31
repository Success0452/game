/* import the cookie package */
import Cookies from 'js-cookie'

/* function to randomlize array*/
const Random = (value) => {
 return Math.floor(Math.random() * value.length);
}

  /* prompt message to welcome the user to the game */
prompt(`welcome to the predicting game, press enter to continue`)

  /* prompt to collect username of the user */
const username = prompt ("enter your username")

  /* storing username to cookie */
Cookies.set('username', username)

/* function to set range of number*/
function numberRange (start, end) {
  return new Array(end - start).fill().map((d, i) => i + start);
}
 
const game = () => {
  
  /* variable to track number of range */
  let increase = 3;
  
  /* variable to track each stage of the game */ 
  let stage = 1;

  /* variable to track each user point */
  let point = 0;

  /* prompt message to welcome user to each stage */
prompt(`welcome to stage ${stage} with ${point} point, press enter to continue`)

  /* passing in desired range of number into the function range */
let r = numberRange(1,increase)

  /* passing in the array of range into the random function */ 
  let random = Random(r)

  /* getting the particular randomlized number in the array */
  let n = r[random]

  /* just for testing purpose */
console.log(`hint: ${n}`)

  /* prompt to get the predicted number from the user */
let choosenNumber = prompt(`enter predicted number between 1 and ${r.length} `)

  /*while loop to continue the game when user guess correctly*/
while (choosenNumber == n){
  /* increase the number of stage */
stage++
  /* increase the number of range for prediction*/
increase++
  /* increase the number of point the user has*/
point++
  /* storing the user point into cookie */
  Cookies.set('point', point)

  /* update the user about their progress */
  console.log(`Correct!!, ${username} is Up to stage ${stage} with ${point} point`)

/* updating desired range of number into the function range */
  r = numberRange(1, increase)

  /* updating the array of range into the random function */
  random = Random(r)

  /* updating the particular randomlized number in the array*/
  n = r[random]

  // just for testing purpose
  console.log(`hint: ${n}`)

  /* update the user predicted number to continue running the loop*/
  choosenNumber = prompt(`enter predicted between 1 and ${r.length}`)
  
}

  /* message to display when user gets the prediction wrong */
console.log(`Oops!!, wrong number, Game Over! total point earned is ${point}`)
}


/* calling the game function for execution */
game()

/* lets further increase user experience to continue the game without terminating*/
let decide = prompt("press 1 to play again? and any key to stop playing")

/* loop to run the function again if the user decides to */
while(decide == 1){

  /* calling the game function for execution */
  game()

  /* updating user decision */
decide = prompt("press 1 to play again? and any key to stop playing")
}

/* print message to user when user ends the game*/
console.log("Game ended")