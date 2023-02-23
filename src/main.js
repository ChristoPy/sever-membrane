import "./style.css"
import { spawn, alive, receive, send, me } from "../lib"

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

console.log(alive(id))

id = spawn(() => {
    receive((data) => {
        console.log(me(), "received", data)
    })
})

send(id, "hello")
