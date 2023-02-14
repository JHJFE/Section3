function arrLength(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let head = arr[0]
  
    if (head === undefined) {
      return 0
    } else {
      
      let tail = arr.slice(1)
      return 1 + arrLength(tail)
    }
  }