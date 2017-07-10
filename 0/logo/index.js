'use strict'

// const fs = require('fs')
// const path = require('path')
// const parser = require('./parser')

// const source = fs.readFileSync(path.join(__dirname, 'test.logo'), 'utf-8')

// const target = parser.parse(source)

// console.log(source)
// console.log('=================')
// console.log(target)

// eval(target)

const canvas = new fabric.Canvas('logo-cavans')

class Logo {
  constructor (img_id, canvas_id) {
    this.canvas = new fabric.Canvas(canvas_id)
    this.img_el = document.getElementById('logo')
    this.lines = []

    this.is_draw = false

    this._initLogoStatus_()

  }

  _initLogoStatus_() {
    this.status = {
      left: this.canvas.width / 2,
      top: this.canvas.height / 2,
      angle: 0
    }
  }
}

// const logo_status = { left: 250, top: 250, angle: 0, is_draw: false }
// const logo_tt = new fabric.Image(, Object.assign({
//   originX: 'center',
//   originY: 'center',
// }, logo_status))
// canvas.add(logo_tt)

// const lines = []

// const reset = () => {
//   logo_status = { left: 250, top: 250, angle: 0 }
//   log.set(logo_status)
//   for (let line of lines)  line.remove()
//   lines = []
// }

// const inner_func = {
//   'drawStart': () => { 
//     logo_status.is_draw = true 
//     logo_tt.set(logo_status)
//   },
//   'drawEnd': () => { logo_status.is_draw = false },
//   'clockwiseRotation': (d) => { logo_status.angle += d },
//   'anticlockwiseRotation': (d) => { logo_status.angle -= d },
// }