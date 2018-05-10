/**
 * @fileOverview
 * Promise对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值。
 * executor是带有 resolve 和 reject 两个参数的函数 。Promise构造函数执行
 * 时立即调用executor 函数， resolve 和 reject 两个函数作为参数传递给executor
 *（executor 函数在Promise构造函数返回新建对象前被调用）。resolve 和 reject 函数被调用时，
 * 分别将promise的状态改为fulfilled（完成）或rejected（失败）。executor 内部通常会执行一些异步操作，一旦完成，
 * 可以调用resolve函数来将promise状态改成fulfilled，或者在发生错误时将它的状态改为rejected。
 * 如果在executor函数中抛出一个错误，那么该promise 状态为rejected。executor函数的返回值被忽略。
 */

// Promise 对象是一个代理对象（代理一个值），被代理的值在Promise对象创建时可能是未知的。它允许你为异步操作的成功和失败分别绑定相应的处理方法（handlers）。 这让异步方法可以像同步方法那样返回值，但并不是立即返回最终执行结果，而是一个能代表未来出现的结果的promise对象

// 一个 Promise有以下几种状态:

// pending: 初始状态，既不是成功，也不是失败状态。
// fulfilled: 意味着操作成功完成。
// rejected: 意味着操作失败。

// new Promise( function(resolve, reject) {...} /* executor */  );

console.log(typeof Promise);
console.log(Promise.length); //1 构造函数参数的数目