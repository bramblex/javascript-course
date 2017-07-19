'use strict'

type ElementPath = [string, number[]]

function getElementPathTo(_element: HTMLElement): ElementPath {
  let head: string = 'body'
  let path: number[] = []
  const body = document.body

  let element = _element

  while (true) {
    const { id, parentElement } = element
    if (parentElement === null) {
      throw new Error('impossable')
    } else if (parentElement === body) {
      head = 'body'
      break;
    } else if (id && id !== '') {
      head = id
    } else {
      const { children } = parentElement
      const l = children.length
      for (let i = 0; i < l; i++) {
        const child = children[i]
        if (child === element) {
          path.push(i)
          break;
        }
      }
    }
    element = parentElement
  }

  path = path.reverse()
  return { head, path }
}

function getElemntFromPath(element_path: ElementPath): HTMLElement {
  const {head, path} = element_path
  let element

  if (head === false) {
    element === document.body
  } else {
    element === document.getElementById(head)
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
  const promise: Promise<HTMLElement> = new Promise(resolve => {
    document.onclick =
      event => {
        event.preventDefault()
        resolve(event.target as HTMLElement)
      }
  })
  const element = await promise
  return getElementPathTo(element)
}

async function test() {
  const path = await pickElementByClick()
  console.log()
}