// Smallest array array of given sum sum >= 7
function smallestArray (arr,s){
  let sum =0;
  let minLen= Infinity
  let left =0;

  for (let right = 0; right < arr.length ; right++){
    sum += arr[right];

    while(sum >= s){
      minLen = Math.min(minLen, right - left + 1);
      sum -=arr[left];

      left++

    }
  }
  return minLen === Infinity ? 0 : minLen;


}

console.log(smallestArray ([1,2,3,4,5,],7))