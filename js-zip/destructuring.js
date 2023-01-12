// 구조분해할당
{
  const obj1 = {
    id: 1,
    name: "현화",
    age: 20,
    habit: "reading",
  };

  const { id, name, age, habit } = obj1;
}

// 배열에서도 사용 가능하다.
{
  const arr1 = [1, "현화", 3];

  const [hhId, hhName, hhAge] = arr1;

  let fruits = ["🍎", "🍌", "🍋"];
  let [apple, banana, lemon] = fruits;
  console.log(apple, banana, lemon);
}

// 필요하지 않은 요소가 있는 경우
{
  const fruits2 = ["🍓", "🍉", "🍐", "🥝"];
  const [strawberry, , peer, _] = fruits2;
  console.log(strawberry);
  console.log(fruits2);
}

// ... 나머지 요소
{
  let [name1, name2, ...rest] = [
    "1번이름",
    "2번이름",
    "3번이름",
    "4번이름",
    "5번이름",
  ];
  console.log(name1);
  console.log(name2);
  console.log(rest);
}

// 기본 값
{
  let [check = "Guest", surname = "Anonymous"] = ["Julius"];
  console.log(check);
  console.log(surname);
}

// 객체 분해하기
{
  const options = {
    title: "menu",
    width: 100,
    height: 200,
  };

  // let { title, width, height } = options;
  // console.log(title);
  // console.log(width);
  // console.log(height);

  let { width: w, height: h, title } = options;
  console.log(w);
}

{
  let options = {
    title: "Menu",
  };

  let { width: w = 100, height: h = 200, title } = options;
  console.log(title); // Menu
  console.log(w); // 100
}

// 똑똑한 함수 만들기
{
  let options = {
    title: "My menu",
    items: ["item1", "item2"],
  };

  function showMenu({
    title = "untitled",
    width = 200,
    height = 100,
    items = [],
  }) {
    console.log(title, "객체 options에서 가져옴");
    console.log(width, "default value");
    console.log(height, "default value");
    console.log(items, "객체 options에서 가져옴");
  }

  showMenu(options);
}

// 콜론과 중첩 객체 조함
{
  let options = {
    title: "My Menu",
    items: ["Item1", "Item2"],
  };

  function showMenu({
    title = "Untitle",
    width: w = 100,
    height: h = 100,
    items: [item1, item2],
  }) {
    console.log(title, "객체 options에서 가져옴");
    console.log(w);
    console.log(h);
    console.log(item1, "options 객체 items의 첫번째 요소");
  }

  showMenu(options);
}

// 퀴즈
{
  let user = {
    name: "John",
    years: 30,
  };

  let { name, years: age, isAdmin = false } = user;
  console.log(name);
  console.log(age);
  console.log(isAdmin);
}

// 퀴즈2
{
  let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };
  function topSalary(salaries) {
    let max = 0;
    let maxName = null;

    for (let [name, salary] of Object.entries(salaries)) {
      console.log(`${name}: ${salary}`);
      if (max < salary) {
        max = salary;
        maxName = name;
      }
    }
    console.log(maxName);
  }
  topSalary(salaries);
}

// 객체의 깊숙한 곳에 들어있는 값을 꺼내기
{
  const deepObject = {
    state: {
      information: {
        name: "hyunhwa",
        language: ["korean", "english", "franch"],
      },
    },
    value: 5,
  };

  // name이랑 language 꺼내기
  const { name, language } = deepObject.state.information;
  const { value } = deepObject;

  // 이렇게도 쓸 수 있다.
  const extracted = {
    name,
    language,
    value,
  };

  console.log(extracted);
}

// quiz1
{
  const person = {
    name: "hyunhwa",
    age: 11,
    gender: "female",
    interests: ["movie", "coffee"],
  };

  const { name: n, age: a, gender } = person;

  // hyunhwa의 변수명은?
}

//

// quiz2
{
  // ootd 객체의 값들을 전달받느 showTodaysOotd 함수 만들기
  // (ootd 객체에는 없는 bottom 은 jeans로 전달하기)
  const ootd = {
    top: "stripe tee",
    shoes: "ugg",
    outer: "coat",
    accessories: ["ring", "watch"],
  };

  // function showTodaysOotd() {
  //   console.log(top);
  //   console.log(bottom);
  //   console.log(accessories);
  // }

  // showTodaysOotd();
}

// quiz2 정답
{
  //
  const ootd = {
    top: "stripe tee",
    shoes: "ugg",
    outer: "coat",
    accessories: ["ring", "watch"],
  };

  function showTodaysOotd({ top, bottom = "jeans", outer, accessories }) {
    console.log(top);
    console.log(bottom);
    console.log(accessories);
  }

  showTodaysOotd(ootd);
}

{
  const [, ...flowers] = ["🌚", "🌼", "🌸", "🌹"];
  console.log(flowers);
}

{
  function* oddGenerator() {
    for (let i = 0; i < 10; i++) {
      if (i % 2) yield i;
    }
  }

  let oddIter = oddGenerator();

  // oddIter는 object
  let one = oddIter.next();
  console.log(one, "one");

  let two = oddIter.next();
  console.log(two, "two");
  console.log(...oddIter);
}
