const TYPE = { type: "application/javascript" }
let ID = 0
const WORKERS = new Map()
const ME = "const me = () => `#<self.name>`;"
const terminate = `const terminate = () => {
  postMessage({ type: 'terminate' });
  self.close();
};`

export function spawn(code, ...params) {
  try {
    const id = ID++
    const blob = new window.Blob(
      [ME, terminate, `(${code.toString()})(${[...params]});`, 'terminate();'],
      TYPE
    )
    const url = window.URL.createObjectURL(blob)
    const worker = new window.Worker(url, { name: `#<${id}>` })

    worker.onmessage = (e) => {
      if (e.data.type === "terminate") {
        WORKERS.delete(id)
      }
    }

    WORKERS.set(id, worker)
    return id
  } catch (_) {
    return -1
  }
}

export function alive(id) {
  return WORKERS.has(id)
}
