const sendingEmail = new Promise((resolve, reject) => {
  function validateEmail(email) {
    let re =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }
  setTimeout(() => {
    if (validateEmail(email)) {
      resolve(email);
    } else {
      reject(new Error("example@exam.com 으로 입력해주세요."));
    }
  }, 2000);
});

const email = prompt("이메일을 입력하세요.");
sendingEmail //
  .then((email) => alert(`${email} 님, 이메일을 발송해드렸습니다.`))
  .catch(alert);
