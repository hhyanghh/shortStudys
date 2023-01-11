// 구조분해할당
const obj1 = {
  id: 1,
  name: "현화",
  age: 20,
  habit: "reading",
};

// const id = obj1.id;
// const name = obj1.name;
// const age = obj1.age;

const { id, name, age, habit } = obj1;

// 배열에서도 사용 가능하다.
const arr1 = [1, "현화", 3];

const [hhId, hhName, hhAge] = arr1;
