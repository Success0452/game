import Cookies from 'js-cookie'

const Random = (value) => {
 return Math.floor(Math.random() * value.length);
}

function numberRange (start, end) {
  return new Array(end - start).fill().map((d, i) => i + start);
}

const game = () => {
  let increase = 3;
  let stage = 1;
  let point = 1;

prompt(`welcome to the predicting game, press enter to continue`)
const username = prompt ("enter username")

Cookies.set('username', username)
prompt(`welcome to stage ${stage}, press enter to continue`)
  
let r = numberRange(1,increase)
  let random = Random(r)
  let n = r[random]
console.log(`hint: ${n}`)

let choosenNumber = prompt(`enter predicted number between 1 and ${r.length} `)

while (choosenNumber == n){
stage++
  Cookies.set('point', point)
  console.log(`Hurray!!, ${username} Up to stage ${stage} with ${point} point`)
  increase++
  point++
  r = numberRange(1, increase)
  random = Random(r)
  n = r[random]
  console.log(`hint: ${n}`)
  choosenNumber = prompt(`enter predicted between 1 and ${r.length}`)
}

console.log("Oops!!, wrong number, try again")
}

game()

let decide = prompt("press 1 to play again?")
while(decide == 1){
  game()
decide = prompt("press 1 to play again")
}

console.log("Game ended")