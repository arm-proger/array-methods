# __ARRAY METHODS__

## Source map

* Source
  * 1.concatArrs.js
  * 2.argsSum.js
  * 3.threeArgsSum.js
  * Filter
    * 1.getOnlyNums.js
    * 2.removeRuLang.js
    * 3.filterByField.js
  * Map
    * 1.getUserNames.js
    * 2.lengthUserNames.js
    * 3.parseString.js
  * Reduce
    * 1.sumEighteenOver.js
    * 2. calcAverage.js
  * Sort
    * 1.ascDesc.js
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

[Decision](./src/sort/1.getUserNames.js)

---

Write a function which returns array of lengths of user names.

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

  getUsernameLengths(users); // [12, 13]
```

[Decision](./src/sort/2.lengthUserNames.js)

---

Write a function which parses string integers. If it's not possible to parse, then add null.

```js
  parseInteger(["1", "2", "34"]); // [1, 2, 34];
  parseInteger(["1", "px", "2323"]); // [1, null, 2323];
```

[Decision](./src/sort/3.parseString.js)

---

__7. FILTER__

Given an array, return a new array that only includes the numbers.

```js
  const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null, 166, NaN] // [1, 2, 55, 166]
```

[Decision](./src/filter/1.getOnlyNums.js)

---

Write a function which remove users with language equals to 'ru'.

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
  filterUsers(users); // [{ username: "Nil Armstrong, lang: "ENG" }]
```

[Decision](./src/filter/2.removeRuLang.js)

---

Write a function which filters object by field.

```js
  const users = [
    {
      username: "Yuri Gagarin",
      lang: "ru",
      isAstronaut: true,
    },
    {
      username: "Nil Armstrong",
      lang: "ENG",
      isAstronaut: true,
    },
    {
      username: "Elon Musk",
      isAstronaut: false,
    },
  ];
  
  filterByField(users, "isAstronaut"); // [{ username: "Yuri Gagarin", lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG" }]
```

[Decision](./src/filter/3.filterByField.js)

---

__8. REDUCE__

Given an array, return the sum of numbers that are 18 or over.

```js
  const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43] // 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347
```

[Decision](./src/reduce/1.sumEighteenOver.js)

---

Write a function which calculates average age of users.

```js
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

getAverageAge(users); // 55
```

[Decision](./src/reduce/2.calcAverage.js)

---