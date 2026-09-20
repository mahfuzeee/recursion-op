# Recursion Practice

This repository contains JavaScript exercises for practicing recursion and algorithmic problem solving.

## Exercises

### Fibonacci

The `fibonacci` directory contains two implementations for generating Fibonacci sequences:

- `fibs(n)` uses iteration.
- `fibsRec(n)` uses recursion.

For example:

```js
fibs(8);
// [0, 1, 1, 2, 3, 5, 8, 13]

fibsRec(8);
// [0, 1, 1, 2, 3, 5, 8, 13]
```

Run the exercise with:

```bash
node fibonacci/fibonacci.js
```

### Merge Sort

The `mergesort` directory contains a recursive merge sort implementation. The
algorithm splits an array into smaller halves until each part contains at most
one element, then merges the sorted parts back together.

For example:

```js
mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
// [0, 1, 1, 2, 3, 5, 8, 13]
```

Merge sort runs in $O(n \log n)$ time and uses $O(n)$ additional space.

Run the exercise with:

```bash
node mergesort/mergeSort.js
```

## Requirements

- [Node.js](https://nodejs.org/)

## Running Exercises

From the project root, run an exercise with:

```bash
node path/to/file.js
```

## Purpose

The goal of this project is to understand recursion by implementing common algorithms in JavaScript and comparing recursive and iterative approaches.
