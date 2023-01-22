let obj1 = { name: "kim" };
let obj2 = { ...obj1, add: "something" };
console.log(obj1, "obj1");
console.log(obj2, "obj2");

obj2.name = "lee";
console.log(obj2, "obj2");
console.log(obj1, "obj1");

let statement = "I am an immutable value";
console.log(statement, "statement");

let otherStr = statement.slice(8, 17);
console.log(otherStr, "otherStr");

let arr = [];
let v2 = arr.push(2);
console.log(arr, "arr");
console.log(v2, "v2");

let user = {
  name: "lee",
  address: {
    city: "seoul",
  },
};

let myName = user.name;
user.name = "kim";

console.log(myName);

myName = user.name;
console.log(myName);

{
  function deepFreeze(obj) {
    const props = Object.getOwnPropertyNames(obj);

    props.forEach((name) => {
      const prop = obj[name];
      console.log(prop, "prop");

      if (typeof prop === "object" && prop !== null) {
        deepFreeze(prop);
      }
    });
    return Object.freeze(obj);
  }

  const user = {
    name: "Lee",
    address: {
      city: "Seoul",
      add: "something",
    },
  };
  deepFreeze(user);
  user.name = "kim";
  user.address.city = "Busan";

  console.log(user, "user");
}
