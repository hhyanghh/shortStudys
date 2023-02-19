// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status == 200) {
//     let json = await response.json();
//     return json;
//   }
//   throw new Error(response.status);
// }
// loadJson("no-such-user.json").catch(alert);

// // function fetchAuthorName(postId) {
// //   return fetch()
// //     .then((response) => response.json())
// //     .then((post) => post.userId)
// //     .then((userId) => {
// //       return fetch(``)
// //         .then((response) => response.json())
// //         .then((user) => user.name);
// //     });
// // }

// fetchAuthorName(1).then((name) => console.log("name:", name));

// async function fetchAuthorName(postId) {
//   const postResponse = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`
//   );
//   const post = await postResponse.json();
//   const userId = post.userId;
//   const userResponse = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );
//   const user = await userResponse.json();
//   return user.name;
// }

// fetchAuthorName(1).then((name) => console.log("name: ", name));

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((post) => console.log(post))
//   .catch((error) => console.log("error:", error));

async function buttonClickHandler() {
  await work1();
  console.log("클릭했어요");
}

function work1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("작업 끝");
      resolve();
    }, 5000);
  });
}

buttonClickHandler();

// let printNum = (number, delaySec) => {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       console.log(number);
//       resolve();
//     }, 5000)
//   );
// };

// let logPrintNum = async (number, delaySec) => {
//   console.log(`시작함 ${number}`);
//   await printNum(number, delaySec);
//   console.log(`끝남 ${number}`);
// };

// logPrintNum(1, 5);
