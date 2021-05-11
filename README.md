# __ARRAY METHODS__

## Source map

* Source
  * 1.concatArrs.js
* README.md

---

1. Concatenate the two arrays

```js
  const arr1 = [1, 2, 3, 4];
  const arr2 = [5, 6, 7, 8, 9];

  const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

[Decision](./src/1.concateArrs.js)

---

2. How to take arguments in sum function?

```js
  function sum() {
    return args.reduce((sum, current) => {
      return sum + current;
    });
  }

  sum(1, 2); // prints 3
  sum(1, 2, 3); // prints 6
```

[Decision](./src/2.argsSum.js)

---

3. How to pass arguments in sum function?

```js
  function sum(x, y, z) {
    return x + y + z;
  }
  const numbers = [1, 2, 3];
  console.log(sum()); // prints 6
```

[Decision](./src/3.threeArgsSum.js)

---

4. Swapping Values using the Destructuring Assignment

```js
  let a = 3;
  let b = 6;

  console.log(a); //6
  console.log(b); //3
```

[Decision](./src/4.swapVals.js)

---

