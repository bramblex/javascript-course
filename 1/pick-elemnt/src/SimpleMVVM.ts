

export class SimpleMVVM {
  private el: HTMLElement
  private data: any
  private _render: (data) => string

  constructor(id: string, data: any, render: (data) => string) {
    const el = document.getElementById(id)
    if (!el) { throw new Error('Cannot find element by id ' + id) }
    this.data = data
    this._render = render
  }

  setData(cb: (data) => void): void { cb(this.data); this.render() }
  getData(): any { return this.data }
  render() { this.el.innerHTML = this._render(this.data) }

}