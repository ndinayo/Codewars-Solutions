/*Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9

For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]

*/

function multiplicationTable(size) {
  let arr = [];
  let row = size;
  let columns = size;
  for(let i = 0; i< row ; i++){
    arr[i] = []
    for(let j = 0; j < columns; j++ ){
      arr[i][j] = (i+1)*(j+1)
    }
  }
  return arr // insert code here
}


