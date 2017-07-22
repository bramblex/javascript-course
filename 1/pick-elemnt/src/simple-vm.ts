'use strict'

export const event_map = {
  click: 'mouseup',
  change: 'focusout'
}

export type CallbackFunc = (vm: SimpleVM, el: HTMLElement, event: Event) => void

export interface VMOpts {
  el: string | HTMLElement
  data: any
  template: (data: any) => string
  funcs: { [propNames: string]: CallbackFunc }
}

export class SimpleVM {
  private el: HTMLElement
  private data: any
  private funcs: { [propNames: string]: CallbackFunc }
  private template: (data) => string

  constructor({ el: _el, data, template, funcs }: VMOpts) {
    const vm = this

    if (typeof _el === 'string') {
      const el = document.getElementById(_el)
      if (el) { this.el = el } else { throw new Error('Cannot find element by id:' + _el) }
    } else {
      this.el = _el
    }

    const el = this.el

    for (const alias_event_name in event_map) {
      const event_name = event_map[alias_event_name]

      el.addEventListener(event_name, function (event) {
        let target: HTMLElement | null = <HTMLElement>event.target

        while (target && target !== el) {
          const dataset_name = 'on' + alias_event_name.slice(0, 1).toUpperCase() + alias_event_name.slice(1)
          const func_name = target.dataset[dataset_name]
          if (func_name && vm.funcs[func_name]) {
            const func = vm.funcs[func_name]
            func(vm, target, event)
          }
          target = target.parentElement
        }
      })

    }

    this.data = data
    this.template = template
    this.funcs = funcs
    this.render()
  }

  render() { this.el.innerHTML = this.template(this.data) }
  modify(cb: (data) => void): void { cb(this.data); this.render() }
}