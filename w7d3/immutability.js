// Immutability

// let bob = "robert";

// let ninja = bob;

// bob = "wiggle";

// console.log(ninja, bob);

// let patapoil = [1, 2, 3, 4, 5];
// let sun = patapoil;

// patapoil = [1, 2, 3];

// console.log(sun, patapoil);

// let moon = [1, 2, 3, 4, 5];
// let cake = moon;

// moon.push(6);

// console.log(cake, moon);

// const someArray = [1, 2, 3, 4, 5];

const purePop = (arr) => {
  // const newArr = [];
  // for (const element of someArray) {
  //   newArr.push(element);
  // }
  const newArr = [...arr];
  return newArr.pop();
};

const purePush = (arr, value) => {
  const newArr = [...arr, value];

  return newArr;
};

const someArray = [1, 2, 3];
const someSomeArray = purePush(someArray, 4);

// console.log(someArray, someSomeArray);

const someStructure = [{ a: 1 }, { b: 2 }];
const someSomeStructure = purePush(someStructure, { c: 3 });

// someStructure[0].a = 5;

const newObject = { ...someStructure[0] };
newObject.a = 5;

someStructure[0] = newObject;

console.log(someStructure, someSomeStructure);

// [{a:5}, {b:2}], [{a:1},{b:2},{c:3}]
// [{a:5}, {b:2}], [{a:5},{b:2},{c:3}]
