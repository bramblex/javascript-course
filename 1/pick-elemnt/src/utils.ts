
// create css

export function css(code: string): HTMLElement {
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = code
  document.head.appendChild(style)
  return style
}

export function box(id: string): HTMLElement {
  const div = document.createElement('div')
  div.id = id
  document.body.appendChild(div)
  return div
}