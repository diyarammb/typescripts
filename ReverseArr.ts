const arr: number[] = [1, 2, 4, 5, 9, 8, 7, 3];
const n: number = arr.length;

for (let i: number = 0; i < n / 2; i++) {
  let temp: number = arr[i];
  arr[i] = arr[n - 1 - i];
  arr[n - 1 - i] = temp;
}

console.log(arr);
