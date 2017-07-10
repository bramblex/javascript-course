'use strict'

// const target = parser.parse(source)

// 开始画画。
// 对于n从1到3，顺时针旋转60度并向前移动100像素。

const toR = a => a * 0.017453293

class Logo {
  constructor (img_id, canvas_id) {
    this.canvas = new fabric.StaticCanvas(canvas_id)
    this.img_el = document.getElementById(img_id)
    this.lines = []
    this.is_draw = false
    this.status = { left: 0, top: 0, angle: 0 }
    this.turtle = new fabric.Image(this.img_el, {originX: 'center', originY: 'center'})
    this.canvas.add(this.turtle)
    this.reset()
  }

  _setStatus_(new_status){
    Object.assign(this.status, new_status)
    let {angle} = this.status
    while (angle < 0 || angle >= 360) {
      if (angle >= 360) angle  = angle - 360
      else if (angle < 0) angle = angle + 360
    }
    this.status.angle = angle
    this.turtle.set(this.status)
    this.canvas.renderAll()
  }

  reset(){
    for (const line of this.lines) line.remove()
    this.goOrigin()
    this.canvas.renderAll()
  }

  drawStart(){ this.is_draw = true }

  drawEnd(){ this.is_draw = false }

  clockwise(n) {
    const {angle} = this.status
    this._setStatus_({angle: angle + n})
  }

  anticlockwise(n) {
    const {angle} = this.status
    this._setStatus_({angle: angle - n})
  }

  goAhead(n) {
    const {left, top, angle} = this.status
    const x = n * Math.sin(toR(angle))
    const y = n * Math.cos(toR(angle))
    const _left = left + x
    const _top = top - y
    this._setStatus_({ left: _left, top: _top })
    if (this.is_draw) {
      const line = new fabric.Line([left, top, _left, _top], {stroke: 'green', strokeWidth: 0.9})
      this.lines.push(line)
      this.canvas.add(line)
    }
  }

  goOrigin() {
    this._setStatus_({ left: this.canvas.width / 2, top: this.canvas.height / 2, angle: 0 })
  }

}

const logo = new Logo('logo', 'logo-canvas')

document.getElementById('run').onclick = () => {
  const source = document.getElementById('source-code').value
  let target
  try {
    target = parser.parse(source)
  } catch (err) {
    alert(err)
  }
  const func = new Function('logo', target)
  func(logo)
}

document.getElementById('reset').onclick = () => {
  logo.reset()
}