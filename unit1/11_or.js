function or(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let head  = arr[0]
    if(head === undefined){
      return false;
    }
    let tail = arr.slice(1)
    return head || or(tail)
  }