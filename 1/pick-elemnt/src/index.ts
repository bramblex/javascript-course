'use strict'

import { SimpleVM } from './simple-vm'
import { ElementPath, getElementFromPath, pickElementByClick} from './element-picker'
import { box, css } from './utils'

async function test() {
  const path = await pickElementByClick()
  console.log(JSON.stringify(path))
  console.log(getElementFromPath(path))
}

const id = 'element-picker-box'
const ui = box(id)

const style = css(`
#${id} {
  position: fixed;
  right: 0;
  top: 0;
  padding: 0.5em 1em;
  background-color: #EFEFEF;
}
`)

// init UI

export const vm = new SimpleVM({
  el: ui,
  data: {
    msg: 'hello',
    _item: '',
    list: []
  },
  funcs: {
    change: (vm, target, event) => {
      vm.modify(data => {
        const _target = (<HTMLInputElement>target)
        data._item = _target.value
      })
    },
    submit: (vm, target, event) => {
      vm.modify(data => {
        data.list.push(data._item)
        data._item = ''
      })
    }
  },
  template: data => `
    <div>
      <h2>${data.msg}</h2>
      <input data-on-change="change" value="${data._item}"></input><button data-on-click="submit">提交</button>
      <ul>
        ${data.list.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `
})