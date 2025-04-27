function arredondar(value: string) : string
function arredondar(value : number) : number
function arredondar(value: string | number) : string | number {
  if(typeof value === 'number') {
    return Math.ceil(value)
  } else {
    let convert = Math.ceil(Number(value))
    let backString = String(convert)
    return backString
  }
}

console.log(arredondar(453.56))
console.log(arredondar('789.18'))
console.log(arredondar('753.18'))