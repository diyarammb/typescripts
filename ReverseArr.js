var Revarr = [1, 2, 4, 5, 9, 8, 7, 3];
var N = Revarr.length;
for (var i = 0; i < N / 2; i++) {
    var temp = Revarr[i];
    Revarr[i] = Revarr[N - 1 - i];
    Revarr[N - 1 - i] = temp;
}
console.log(Revarr);
