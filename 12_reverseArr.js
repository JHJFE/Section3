function reverseArr(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let tail = arr[arr.length-1]
    if(arr.length === 0){
      return []
    }
    let rest = arr.slice(0,-1)
    return [...[tail], ...reverseArr(rest)]
  }