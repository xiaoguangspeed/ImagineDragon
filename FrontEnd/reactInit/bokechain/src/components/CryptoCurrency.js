import React from 'react';
import cc from '../data/cryptoCurrency.json';
// 我们同样推荐在 JSX 代码的外面扩上一个小括号，这样可以防止 分号自动插入 的 bug。
// 编译后，jsx -> 普通的js对象
// ccList 是一个react元素，元素是构成 React 应用的最小单位，元素用来描述你在屏幕上看到的内容。
// 与浏览器的 DOM 元素不同，React 当中的元素事实上是[普通的对象]，React DOM 可以确保 浏览器 DOM 的数据内容与 React 元素保持一致。
// React 元素都是immutable 不可变的。
// 有状态组件
// React 只会更新必要的部分
// 组件从概念上看就像是函数，它可以接收任意的输入值（称之为“props”），并返回一个需要在页面上展示的React元素。
// “纯函数”，它没有改变它自己的输入值，当传入的值相同时，总是会返回相同的结果。
const listItems = cc.map(ele =>
  <span key={ele.id}>{ele.name}</span>
)

function CryptoCurrency(props) {
  return (
    <div>
      {listItems}
    </div>
  );
};

export default CryptoCurrency;
