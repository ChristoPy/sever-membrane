# Sever Membrane

Sever Membrane aims to create an Elixir like API to spawn and manage processes in JavaScript.

> Sever Membrane works on Browsers only.

## Install

```shell
npm install sever
```

## Usage


```js
import { spawn, alive, me } from "sever-membrane"
```

## Spawn a process

```js
// spawn(fn -> 1 + 2 end)
spawn(() => 1 + 2);
```

## Get process id

```js
// pid = spawn(fn -> 1 + 2 end)
const id = spawn(() => 1 + 2);
```

## Use process id

```js
// spawn(fn -> self() == 1 end)
spawn(() => me() === 1);
```

## Check if process is alive

```js
// pid = spawn(fn -> 1 + 2 end)
const id = spawn(() => 1 + 2);

if (alive(id)) {
  // do somenthing...
}
```

## Send message to a process
```js
// pid = spawn(fn -> receive do msg -> IO.puts "Received: #{msg}" end end)
const id id = spawn(() => {
    receive((data) => {
        console.log(me(), "received", data)
    })
})

send(id, "hello")
// send(pid, "hello")
```
