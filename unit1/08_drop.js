function drop(num, arr) {
    // TODO: 여기에 코드를 작성합니다.
    if(num > arr.length){
      return []
    }
    if(num === 0){
      return arr
    }
  
    let tail = arr.slice(1)
    return drop(--num,tail)
  }
  