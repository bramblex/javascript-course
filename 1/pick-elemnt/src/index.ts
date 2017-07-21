'use strict'

type ElementPath = [string, number[]]

function getChildElementIndex(element: HTMLElement): number {
  const { parentElement } = element
  if (!parentElement) {
    throw new Error('Has not parent')
  }
  const { children } = parentElement
  for (let i = 0, l = children.length; i < l; i++) {
    if (children[i] === element) return i
  }
  throw new Error('impossable')
}

function getElementPathTo(_element: HTMLElement): ElementPath {
  let head: string = 'body'
  let path: number[] = []
  const body = document.body
  const html = body.parentElement

  let element = _element

  while (true) {
    const { parentElement, id } = element
    if (element === body) { break }
    if (element === html) { head = 'html'; break }
    if (id && id !== '') { head = '#' + id; break }
    path.push(getChildElementIndex(element))
    if (!parentElement) { throw new Error('impossable') }
    element = parentElement
  }

  path = path.reverse()
  return [head, path]
}

function getElementFromPath(element_path: ElementPath): HTMLElement {
  const [head, path] = element_path
  let element

  if (head === 'body') {
    element = document.body
  } else if (head === 'html') {
    element = document.body.parentElement
  } else {
    element = document.getElementById(head.replace('#', ''))
  }

  for (let i of path) {
    element = element.children[i]
    if (!element) {
      throw new Error('Cannot find Element from path: ' + JSON.stringify(element_path))
    }
  }

  return element
}

async function pickElementByClick() {
  const _onclick = document.onclick
  const _onmouseover = document.onmouseover
  const _onmouseout = document.onmouseout

  let _backgroundColor: string | null = null
  const promise: Promise<HTMLElement> = new Promise(resolve => {
    document.onclick =
      event => {
        event.stopPropagation()
        event.preventDefault()
        const element = event.target as HTMLElement
        element.style.backgroundColor = _backgroundColor
        resolve(event.target as HTMLElement)
      }
  })

  document.onmouseover = event => {
    const element = event.target as HTMLElement
    _backgroundColor = element.style.backgroundColor
    element.style.backgroundColor = "yellow"
  }
  document.onmouseout = event => {
    const element = event.target as HTMLElement
    element.style.backgroundColor = _backgroundColor
  }

  const element = await promise

  document.onclick = _onclick
  document.onmouseover = _onmouseover
  document.onmouseout = _onmouseout
  return getElementPathTo(element)
}

async function test() {
  const path = await pickElementByClick()
  console.log(JSON.stringify(path))
  console.log(getElementFromPath(path))
}

// function createUi() {
//   const div = document.createElement('div')
//   div.id = ""
//   div.innerHTML = `
//   `
//   document.body.appendChild(div)
// }

// function render(data){
// }