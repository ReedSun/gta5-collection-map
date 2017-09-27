var rate = 1
var base = {
  height: 1200,
  width: 800
}
var ua = navigator.userAgent

function render (rate) {
  document.getElementById('map-box').setAttribute('width', base.width * rate)
  document.getElementById('map-box').setAttribute('height', base.height * rate)
}

if (ua.indexOf('Android') === -1 && ua.indexOf('iPhone') === -1) {
  document.getElementById('control-size-wrapper').setAttribute('style', 'display: flex;')
}

document.getElementById('size-up').addEventListener('click', function () {
  rate += 1
  render(rate)
})

document.getElementById('size-down').addEventListener('click', function () {
  if (rate === 1) {
    return alert('不能继续缩小惹 - -！')
  }
  rate -= 1
  render(rate)
})
