function bubbleSort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-1-i;j++){
            if(arr[j] > arr[j+1]){
                var tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }

    return arr;
}

var arr = [3,2,5,1,7,6]
console.log(bubbleSort(arr))