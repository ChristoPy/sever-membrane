# Sever

Sever aims to create an Elixir like API to spawn and manage processes in JavaScript.

## Install

```shell
npm install sever
```

## Usage

Note: Sever works on Browsers only.

```
import { spawn, alive, me } from "sever"
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
