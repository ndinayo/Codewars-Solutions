/*Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

*/

function sumArray(arr) {
    // Check if input is not an array or if it has 2 or fewer elements, return 0
    if (!Array.isArray(arr) || arr.length <= 2) return 0;

    // Make a shallow copy of the array, sort it in ascending order,
    // remove the smallest and largest elements, then sum the rest using reduce
    const sum = arr
        .slice()                  // Create a copy of the original array (to avoid mutating it)
        .sort((a, b) => a - b)    // Sort the array in ascending order
        .slice(1, -1)             // Remove the first (smallest) and last (largest) elements
        .reduce((accum, elem) => accum + elem, 0); // Sum the remaining elements

    return sum; // Return the final sum
}
