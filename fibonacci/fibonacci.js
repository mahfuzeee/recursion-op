function fibs(n) {
  const result = [];
  let first = 0;
  let second = 1;
  for (let i = 0; i < n; i++) {
    result.push(first);
    [first, second] = [second, first + second];
  }
  return result;
}

function fibsRec(n) {}

console.log(fibs(8));
