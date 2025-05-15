function fibs(n){
  const startingArr = [0,1]
  if (n <= 1){
    return [0]
  }
  for(let i = 2; i <= n-1; i++){
    startingArr.push(startingArr[startingArr.length - 1] + startingArr[startingArr.length - 2])
  }
  return startingArr
}

console.log(fibs(5))