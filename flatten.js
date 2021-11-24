const flatten = function(array){
  let flattenedArray = [];
  for(let i = 0; i < array.length; i++){
    if(Array.isArray(array[i]) === true){
      for(let j = 0; j < array[i].length; j++){
        flattenedArray.push(array[i][j]);
      }
    } else {
        flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));