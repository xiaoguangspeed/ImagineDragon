function shadowCopy(obj){
    var dist = {};
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            dist[key] = obj[key]
        }
    }
    return dist;
}

function extend(target,source,deep){
    for (var key in source){
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            // source[key] 是对象，而 target[key] 不是对象， 则 target[key] = {} 初始化一下，否则递归会出错的
            if (isPlainObject(source[key]) && !isPlainObject(target[key]))
                target[key] = {}

            // source[key] 是数组，而 target[key] 不是数组，则 target[key] = [] 初始化一下，否则递归会出错的
            if (isArray(source[key]) && !isArray(target[key]))
                target[key] = []
            // 执行递归
            extend(target[key], source[key], deep)
        }
        // 不满足以上条件，说明 source[key] 是一般的值类型，直接赋值给 target 就是了
        else if (source[key] !== undefined) target[key] = source[key]

    }
}