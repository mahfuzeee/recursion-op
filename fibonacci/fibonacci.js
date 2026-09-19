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

function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const previous = fibsRec(n - 1);
  const lastIndex = previous.length - 1;

  return [...previous, previous[lastIndex] + previous[lastIndex - 1]];
}

console.log(fibs(8));
console.log(fibsRec(8));
