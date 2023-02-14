function take(num, arr) {
    // TODO: 여기에 코드를 작성합니다.
  
    if(num > arr.length){
      return arr
    }
    if(num === 0){
      return []
    }
    let head = [arr[0]]
    let tail = arr.slice(1)
    return [...head, ...take(--num,tail)]
  }