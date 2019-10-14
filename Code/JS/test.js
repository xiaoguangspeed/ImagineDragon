const arr = [1,2,3,4,5]

arr.forEach((item, index) => {
  if(item === 2) {
    return
  }
  console.log(item)
})
