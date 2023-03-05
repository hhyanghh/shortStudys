// 얕은 복사
{
  const original = ["a", 2, true, 3, "hi"];
  const copy = original.slice();

  console.log(JSON.stringify(original) === JSON.stringify(copy));

  copy.push(10);
  console.log(`original : ${original}`);
  console.log(`copy: ${copy}`);

  console.log(JSON.stringify(original) === JSON.stringify(copy));
}
console.log("-----------------------");
{
  const object = {
    a: "a",
    number: {
      one: 1,
      two: 2,
    },
  };

  const copy = Object.assign({}, object);

  console.log(`object: ${object}`);
  console.log(`copy: ${copy}`);

  const resultCopy = JSON.stringify(copy);
  console.log(resultCopy);

  copy.number.one = 3;

  const resultObject = JSON.stringify(object);
  console.log(resultObject);

  console.log(object === copy);
  console.log(object.number.one === copy.number.one);
}
console.log("-----------------------");
{
  const object = {
    a: "a",
    number: {
      one: 1,
      two: 2,
    },
  };
  const copy = { ...object };
  copy.number.one = 3;

  console.log(JSON.stringify(copy));
  console.log(JSON.stringify(object));

  console.log(object === copy);
}
console.log("-----------------------");
// 깊은 복사
{
  const object = {
    a: "a",
    number: {
      one: 1,
      two: 2,
    },
    arr: [1, 2, [3, 4]],
  };

  function deepCopy(object) {
    if (object === null || typeof object !== "object") {
      return object;
    }
    // 객체인지 배열인지 판단
    const copy = Array.isArray(object) ? [] : {};

    for (let key of Object.keys(object)) {
      copy[key] = deepCopy(object[key]);
    }

    return copy;
  }

  const copy = deepCopy(object);
  copy.number.one = 3;
  copy.arr[2].push(5);

  console.log(object === copy);
  console.log(object.number.one === copy.number.one);
  console.log(object.arr === copy.arr);

  console.log(object);
  console.log(copy);

  console.log(object.arr[2].length);
  console.log(copy.arr[2].length);
}
