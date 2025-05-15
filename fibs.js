function fibs(n){
  const startingArr = [0,1];
  if (n <= 1){
    return [0];
  }
  for(let i = 2; i <= n-1; i++){
    startingArr.push(startingArr[startingArr.length - 1] + startingArr[startingArr.length - 2]);
  }
  return startingArr;
}

console.log(fibs(10));

function fibsRec(n){
    if(n === 0){
        return [];
    }
    if(n === 1){
        return [0];
    }
   if(n === 2){
        return [0, 1];
   }
   let prev = fibsRec(n - 1);
   let nextNumber = prev[prev.length - 1] + prev[prev.length - 2];
   prev.push(nextNumber);
   return prev;
}

console.log(fibsRec(0));