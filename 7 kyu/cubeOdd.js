/*Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.*/

function cubeOdd(arr) {
  
  if (!arr.every(x => typeof x === "number")) return undefined;


  return arr
    .filter(a => a % 2 !== 0)
    .reduce((acc, elem) => acc + elem ** 3, 0);
}