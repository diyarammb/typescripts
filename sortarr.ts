const arr: number[] = [1, 3, 2, 5, 4, 9];
const n: number = arr.length;
for (let i: number = 0; i < n - 1; i++) {
  for (let j: number = 0; j < n - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp: number = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);
