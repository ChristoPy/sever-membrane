import "./style.css"
import { spawn, alive } from "./process"

// spawn(fn -> 1 + 2 end)
// pid = spawn(fn -> 1 + 2 end)
let id = spawn((max) => {
  const primeNumbers = []
  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false
    return num > 1
  }
  let i = 0
  while (i < max) {
    if (isPrime(i)) {
      primeNumbers.push(i)
    }
    i++
  }
  return primeNumbers
}, 10000)

id = spawn(() => 1 + 2)
spawn(() => { })
id = spawn(() => me() === 1)

// alive?(id)
console.log(alive(id))
