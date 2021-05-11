let array = [12, 43, 44, 64, 35, 55];
let min = 0;
// asigning the previous number of the array to a variable to compare.
for (let index = 0; index < array.length - 1; index++) {
  min = index;
  for (let j = index + 1; j < array.length; j++) {
    if (array[min] > array[j]) {
      min = j;
    }
  }
  temp = array[index];
  array[index] = array[min];
  array[min] = temp;
}

console.log(array);
