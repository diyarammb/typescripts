const Revarr: number[] = [1, 2, 4, 5, 9, 8, 7, 3];
const N: number = Revarr.length;

for (let i: number = 0; i < N / 2; i++) {
  let temp: number = Revarr[i];
  Revarr[i] = Revarr[N - 1 - i];
  Revarr[N - 1 - i] = temp;
}

console.log(Revarr);
