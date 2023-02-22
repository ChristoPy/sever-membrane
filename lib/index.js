const TYPE = { type: "application/javascript" }
let ID = 0
const WORKERS = new Map()
const ME = "const me = () => self.name;"
const HEADER = `
let waiting = false;
const terminate = () => {
  postMessage({ type: 'terminate' });
  self.close();
};
const receive = (callback) => {
  waiting = true;
  self.onmessage = (e) => {
    callback(e.data)
  }
};
`
const TERMINATION = `(() => !waiting && terminate())();`

export function spawn(code, ...params) {
  try {
    const id = ID++
    const blob = new window.Blob(
      [ME, HEADER, `\n(${code.toString()})(${[...params]});\n\n`, TERMINATION],
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

export function send(id, data) {
  if (alive(id)) {
    WORKERS.get(id).postMessage(data)
  }
}

export function receive(_) { }
export function me() { }
