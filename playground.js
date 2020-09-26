const arr = [
  { name: 'civic', id: 1 },
  { name: 'subaru', id: 2 },
  { name: 'toyota', id: 3 }
];

// const idx = 1;
// const result = [
//   ...arr.slice(0, idx),
//   {
//     ...arr[idx],
//     id: 4
//   },
//   ...arr.slice(idx + 1)
// ];

// console.log(result);

const filtered = arr.filter((n, idx) => idx !== 1);
console.log(filtered)