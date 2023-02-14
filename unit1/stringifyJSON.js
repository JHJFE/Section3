
function stringifyJSON(obj) {
  // your code goes here
  let type = typeof (obj)



  if (obj === null) {//약간 엣지 케이스 느낌,   null은 객체 타입이다
    return `${obj}`
  } else if (type === 'string') {

    return `"${obj}"`

  } else if (Array.isArray(obj)) {

    let result = obj.map(el => {

      let type = typeof (el)
      return type === 'string' ? `"${el}"` :
        type === 'object' ? stringifyJSON(el) : el
    })

    return `[${result}]`

  } else if (type === 'object') {
    let result = ''
    for (let key in obj) {

      result = (typeof (obj[key]) === 'function' || typeof (obj[key]) === 'undefined') ?  result = result + '':result = result + `${stringifyJSON(key)}:${stringifyJSON(obj[key])},`
      
    }
    result = result.slice(0, -1)
    return `{${result}}`
  }
  return `${obj}`
};


if (typeof window === "undefined") {
  module.exports = stringifyJSON;
}
