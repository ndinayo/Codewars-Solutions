/*In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []*/

//Step one create a Unique array using the filter method to remove the duplicates
//Step two sort the array in descending order using the sort method
//Step three return the first two elements of the sorted array using the slice method

function twoHighest(arr) {
  return arr.filter((value, index, arr) => arr.indexOf(value) === index)
    .sort((a,b)=> b-a).slice(0,2)
  
}