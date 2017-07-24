'use strict'

import {wait} from './utils'


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

export function getElementPathTo(_element: HTMLElement): string {
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
  return [head, ...path].join('/')
}

export function getElementFromPath(element_path: string): HTMLElement {
  const [head, ...path] = element_path.split('/')
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

export async function pickElementByClick() {
  const _onclick = document.onclick
  const _onmousedown = document.onmousedown
  const _onmouseover = document.onmouseover
  const _onmouseout = document.onmouseout

  let _backgroundColor: string | null = null
  const promise: Promise<HTMLElement> = new Promise(resolve => {
    document.onclick =
      async event => {
        event.stopPropagation()
        event.preventDefault()
      }
    document.onmousedown =
      async event => {
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
  await wait(100) // 延迟事件

  document.onclick = _onclick
  document.onmouseover = _onmouseover
  document.onmouseout = _onmouseout
  return getElementPathTo(element)
}