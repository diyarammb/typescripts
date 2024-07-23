var arr = [1, 2, 4, 5, 9, 8, 7, 3];
var n = arr.length;
for (var i = 0; i < n / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
}
console.log(arr);
