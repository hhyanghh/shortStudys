function delayP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

async function myAsync() {
  await delayP(3);
  return "async";
}

myAsync().then((result) => {
  console.log(result);
});
