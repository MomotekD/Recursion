function merge(left, right){
    const result = [];
    while(left.length && right.length){
        if(left[0] > right[0]){
            result.push(right[0]);
            right.shift();
        }else{
            result.push(left[0]);
            left.shift();
        }
    }
    return result.concat(left).concat(right);
}

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

const array = [9, 8, 12, 7, 6, 11, 5, 4, 10, 3, 2, 1, 0];

console.log(mergeSort(array));