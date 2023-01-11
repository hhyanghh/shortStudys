// 객체
const a = "age";

const obj = {
  id: 1,
  name: "현화",
  "my name": "양현화",
  [a]: 20,
  // 함수 선언 방법 1
  getNameWithFunction: function () {
    console.log("양현화 입니다.");
  },
  // 함수 선언 방법 2
  getNameFn() {
    // 객체가 갖고있는 값 출력하기
    console.log("함수 안에서의 this : ", this);
    console.log(this.name); // 현화
  },
  // 함수 선언 방법 3 array function
  getNameArrowFn: () => {
    console.log("arrow function 안에서의 this : ", this);
    console.log(this.name); // undefined
  },
};

obj.getNameFn();
obj.getNameArrowFn();
