const loopyLighthouse = function([range1, range2], [multiples1, multiples2], [words1, words2]){
  while(range1 <= range2){
    if(range1 % multiples1 === 0 && range1 % multiples2 === 0){
      console.log(`${words1}${words2}`);
    } else if(range1 % multiples1 === 0){
      console.log(words1);
    } else if(range1 % multiples2 === 0){
      console.log(words2);
    } else {
      console.log(range1);
    }
    range1 +=1;
  }
}
console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));