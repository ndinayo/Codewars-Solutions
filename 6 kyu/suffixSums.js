/*Task
Given an array a of integers, construct an array b of the same length as a such that

b[0] = a[0] + a[1] + ... + a[n - 2] + a[n - 1]
b[1] =        a[1] + ... + a[n - 2] + a[n - 1]
...
b[n - 2] =                 a[n - 2] + a[n - 1]
b[n - 1] =                            a[n - 1]
where n is the length of a.*/

function suffixSums(a) {
  let result = [];
  let sum = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    sum += a[i];
    result[i] = sum;
  }
  return result;
}
