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

__5. SORT__

Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

- "Asc" returns a sorted array in ascending order.
- "Desc" returns a sorted array in descending order.

```js
  sortBy([4, 3, 2, 1], "Asc" ) // [1, 2, 3, 4]
  sortBy([7, 8, 11, 66]) // [7, 8, 11, 66]
  sortBy([7, 8, 11, 66], "Desc") // [66, 11, 8, 7]
```

[Decision](./src/sort/1.ascDesc.js)

---

__6. MAP__

Write a function which returns array of usernames.

```js
  const users = [
    {
      username: "Yuri Gagarin",
      lang: "ru",
    },
    {
      username: "Nil Armstrong",
      lang: "ENG",
    },
  ];
  
  getUserNames(users); // ['Yuri Gagarin', 'Nil Armstrong']
```

[Decision](./src/sort/1.ascDesc.js)

---

