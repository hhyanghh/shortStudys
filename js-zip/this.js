{
  let person = {
    fullName: "양현화",
    age: 20,
    printThis: function () {
      console.log(this);
      console.log("this === person :", this === person);
      console.log("this === window :", this === window);
    },
  };

  // this는 호출하는 방법에 의해 결정된다.
  // person에 의해 호출되었기 때문에, person이 this이다.
  person.printThis();

  // 변수에 할당하기
  let printThis = person.printThis;
  printThis();
  // Window 객체개 출력되고, this는 person이 아니다.
  // Window는 브라우저 전역 객체 (global)
}

console.clear();
{
  function printThis() {
    console.log(this);
  }
  printThis();

  let person1 = {
    name: "홍길동",
    printThis: printThis,
  };

  person1.printThis(); // this는 person1
}
console.clear();
{
  let btn = document.querySelector("button");
  btn.addEventListener("click", function () {
    console.log(this);
    console.log(this === btn);
  });
}

// ES5 bind - this 설정 메소드
{
  function printThis() {
    console.log(this);
  }
  let person1 = {
    name: "홍길동",
  };
  let person2 = {
    name: "임길동",
  };
  let printThis1 = printThis.bind(person1);
  let printThis2 = printThis.bind(person2);
  printThis1();
  printThis2();
}

console.clear();
{
  let person = {
    name: "양현화",
    age: 20,
    hello: function () {
      setTimeout(
        function () {
          console.log(this); // window 객체
          console.log(this.name);
          console.log(this.age);
        }.bind(this),
        1000
      );
    },
  };
  person.hello();
}

// 보기편하게
{
  let person = {
    name: "양현화2",
    age: 30,
    hello: function () {
      // function printThis() {
      //   console.log(this);
      //   console.log(this.name);
      //   console.log(this.age);
      // }
      const printThis = () => {
        console.log(this);
      };
      setTimeout(printThis, 1000);
    },
  };
  person.hello();
}

// 화살표 함수
{
  let person = {
    name: "양현화3",
    age: 20,
    hello: function () {
      setTimeout(() => {
        console.log(this);
      }, 1000);
    },
  };
  person.hello();
}

console.clear();
{
  let myDog = {
    name: "니모",
    age: 7,
    play: function () {
      console.log(this);
    },
  };
  myDog.play();
}

{
  let value = 1;
  let obj = {
    value: 100,
    foo: function () {
      console.log("foo's this: ", this);

      function bar() {
        console.log("bar's this: ", this);
      }
      // bar();
      bar.bind(obj)();
    },
  };
  obj.foo();
}

{
  let obj1 = {
    name: "lee",
    sayName: function () {
      console.log(this.name);
    },
  };

  let obj2 = {
    name: "Kim",
  };

  obj2.sayName = obj1.sayName;

  obj1.sayName();
  obj2.sayName();
}

{
  function Person(name) {
    this.name = name;
  }

  Person.prototype.getName = function () {
    return this.name;
  };

  let me = new Person("hey");
  console.log(me.getName()); //hey

  Person.prototype.name = "change heys";
  console.log(Person.prototype.getName());
}

{
  function convertArgsToArray() {
    console.log(arguments);

    let arr = Array.prototype.slice.apply(arguments);

    console.log(arr);
    return arr;
  }

  convertArgsToArray(1, 2, 3);
}
