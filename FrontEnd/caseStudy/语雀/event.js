(function(){
  document.body.addEventListener('click',function(e){
    const canvas = document.getElementById('canvas');
    console.dir(e)
    canvas.fillRect(10,10,50);
    canvas.setAttribute('style',`position:absolute;border:1px solid orange;top:${e.clientY}px;left:${e.clientX}px`)
  })
})()

// MouseEvent.clientX 是只读属性， 它提供事件发生时的应用客户端区域的水平坐标 (与页面坐标不同)。
// 例如，不论页面是否有水平滚动，当你点击客户端区域的左上角时，鼠标事件的 clientX 值都将为 0 


// pageX 是一个由MouseEvent接口返回的相对于整个文档的x（水平）坐标以像素为单位的只读属性。

// 这个属性将基于文档的边缘，考虑任何页面的水平方向上的滚动。

// screenX 是只读属性，他提供了鼠标相对于屏幕坐标系的水平偏移量。

// 其中offsetX, offsetY是指相对于触发事件元素的左上角的偏移。
