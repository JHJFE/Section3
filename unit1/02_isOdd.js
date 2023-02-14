function isOdd(num) {
    // TODO: 여기에 코드를 작성합니다.
    if(num <0){
      num = Math.abs(num)
    }
    if(num === 1){
      return true
    }else if (num === 0){
      return false
    }
    return isOdd(num - 2)
  }
  