MyPlugin.install = function (Vue, options) {
  // 1.添加全局的属性和方法
  Vue.myGlobalMethod = function (params) {
    
  }
  // 2.添加全局的资源
  Vue.directive('my-directive', {
    bind(el,binding,vnode,oldValue) {

    }
  })
  // 3. 注入组件选项
  Vue.mixin({
    created: function (params) {
      
    }
  })
  // 4.添加实例方法
  Vue.prototype.$myMethod = function (params) {
    
  }
}