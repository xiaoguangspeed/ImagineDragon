var data = {
  name: 'luna',
  parent: {
    name: 'jun'
  }
}
observe (data)
data.name = 'ryder'
data.parent.name = 'ying'
function observe(data) {
  if(!data || typeof data !== 'object') {
    return
  }
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key])
  })
}

function defineReactive(data, key, val) {
  observe(val)
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get: function () {
      return val
    },
    set: function (newVal) {
      console.log('监听到数据变化，', val, '--->', newVal)
      val = newVal;
    }
  })
}