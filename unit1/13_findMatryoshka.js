function findMatryoshka(matryoshka, size) {
    // TODO: 여기에 코드를 작성합니다.
    if(matryoshka.size === size){
      return true
    }else if(matryoshka.matryoshka === null || Object.keys(matryoshka).length === 0){
      return false
    }
    return findMatryoshka(matryoshka.matryoshka,size)
  }