var arr = [1, 3, 2, 5, 4, 9];
var n = arr.length;
for (var i = 0; i < n - 1; i++) {
  for (var j = 0; j < n - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
