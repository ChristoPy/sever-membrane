const TYPE = { type: "application/javascript" }
let ID = 0
const WORKERS = new Map()
const ME = "const me = () => "

export function spawn(code, ...params) {
  try {
    const id = ID++
    const blob = new window.Blob(
      [ME, id, `;console.log((${code.toString()})(${[...params]}))`],
      TYPE
    )
    const url = window.URL.createObjectURL(blob)
    const worker = new window.Worker(url)

    WORKERS.set(id, worker)
    return id
  } catch ({ message }) {
    return -1
  }
}

export function alive(id) {
  return WORKERS.has(id)
}
