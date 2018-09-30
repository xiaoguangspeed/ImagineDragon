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


var dOffsetWidth = divObj.offsetWidth;//返回元素的宽度（包括元素宽度、内边距和边框，不包括外边距）
var $dOffsetWidth = $(divObj).outerWidth(false);//参数为true，包括外边距

var dOffsetHeight = divObj.offsetHeight;//返回元素的高度（包括元素高度、内边距和边框，不包括外边距）
var $dOffsetHeight = $(divObj).outerHeight(false);//参数为true，包括外边距


var dClientWidth = divObj.clientWidth;//返回元素的宽度（包括元素宽度、内边距，不包括边框和外边距）
var $dClientWidth = $(divObj).innerWidth();

var dClientHeight = divObj.clientHeight;//返回元素的高度（包括元素高度、内边距，不包括边框和外边距）
var $dClientHeight = $(divObj).innerHeight();

var dWidth = divObj.style.width;//返回元素的宽度（包括元素宽度，不包括内边距、边框和外边距）
var $dWidth = $(divObj).width();//width(val)设置宽

var dHeight = divObj.style.height;//返回元素的高度（包括元素高度，不包括内边距、边框和外边距）
var $dHeight = $(divObj).height();//height(val)设置高

var dscrollWidth = divObj.scrollWidth;//返回元素的宽度（包括元素宽度、内边距和溢出尺寸，不包括边框和外边距），无溢出的情况，与clientWidth相同
var dscrollHeight = divObj.scrollHeight;//返回元素的高度（包括元素高度、内边距和溢出尺寸，不包括边框和外边距），无溢出的情况，与clientHeight相同