'use strict'

import { SimpleVM } from './simple-vm'
import { getElementFromPath, pickElementByClick} from './element-picker'
import { box, css } from './utils'

async function test() {
}

const id = 'element-picker-box'
const ui = box(id)

const style = css(`
#${id} {
  position: fixed;
  right: 0;
  / *top: ${window.innerHeight / 2}px; */
  z-index: 10000;
  bottom: 20px;
}

#${id} .button {
  line-height: 0.8em;
  color: #FFF;
  height: 1em;
  width: 1em;
  background-color: red;
  position: absolute;
  right: 0;
  text-align: center;
  border-radius: 0.3em;
}

#${id} .content {
  padding: 0.5em 1em;
  background-color: #EFEFEF;
}

#${id} .hidden {
  display: none;
}
`)

// init UI

export const vm = new SimpleVM({
  el: ui,
  data: {
    title: '元素捕获器',
    list: [],
    mini_size: true
  },
  funcs: {
    toggle: (vm) => {
      vm.modify(data => {
        if (data.mini_size) {
          data.mini_size = false
        } else {
          data.mini_size = true
        }
      })
    },
    pickElement: async (vm) => {
      vm.modify(data => {
        data.mini_size = true
      })
      const path = await pickElementByClick()
      vm.modify(data => {
        data.list.push(path)
        data.mini_size = false
      })
    }
  },
  template: data => `
    <div class="button" data-on-click="toggle">${data.mini_size ? '+' : '-'}</div>
    <div class="content ${data.mini_size ? 'hidden' : ''}">
      <h2>${data.title}</h2>
        <button data-on-click="pickElement">捕获元素</button>
      <ul>
        ${data.list.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `
})