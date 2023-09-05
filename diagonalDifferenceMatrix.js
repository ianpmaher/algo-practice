function diagonalDifference(arr) {
  // length of input array.
  const length = arr.length;
  let diagonal1 = 0,
    diagonal2 = 0;
  // Looping through the array and summing the diagonals.
  for (let i = 0; i < arr.length; i++) {
    // Calculating the primary diagonal.
    diagonal1 += arr[i][i];
    // Reversing the second dimension of array to calculate secondary diagonal.
    diagonal2 += arr[length - 1 - i][i];
  }
  // return absolute difference value.
  return Math.abs(diagonal1 - diagonal2);
}
