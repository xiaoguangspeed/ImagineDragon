function Node(){
    this.data = null
    this.leftChild = null
    this.rightChild = null
}

function binaryTree(){
    this.root = null
}

binaryTree.prototype = {
    constructor: Node,
    insertNode: function(data){
        if(this.root === null){
            this.root = {}
            this.root.data = data
        }else{
            insertNode(this.root, data)
        }
    }
}

//插入结点，这里构造的是一颗二叉搜索树
function insertNode(node,data){
    if(node.data < data){
        if(node.leftChild === null){
            node.leftChild = { data }
        }else{
            insertNode(node.leftChild, data)
        }
    }else{
        if(node.rightChild === null){
            node.rightChild = { data }
        }else{
            insertNode(node.rightChild, data)
        }
    }
}
