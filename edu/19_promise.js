// setTimeout(() => {
//   console.log("A");
//   setTimeout(() => {
//     console.log("B");
//     setTimeout(() => {
//       console.log("C");
//     }, 500);
//   }, 1000);
// }, 1500);

// // 결과가 CBA인데, 그 이유는 setTimeout함수가 비동기처리 방식이기 때문이다.
// // 스타트 하면 시간이 다 똑같이 흐르니까.
// // CPU는 기본적으로 선입선출
// // js는 비동기처리를 cpu에게 일괄(한번에) 맡겨버리고, cpu는 한꺼번에 줌
// // 그게 내부적으로 어떻게 되는건지는 전혀 이해가 안됨. 나중에 꼭 알아볼것

// setTimeout(() => {
//   console.log("A");
// }, 1500);
// setTimeout(() => {
//   console.log("B");
// }, 1000);
// setTimeout(() => {
//   console.log("C");
// }, 500);

// 위 콜백 지옥에서 벗어나기 위해 프로미스 기반으로 변경해보자.
// argument가 뭔가? : 함수 외부에서 내부로 전달되어지는 실질적인 값
// argument를 함수 내부 받기 위한 공간을 '파라미터'라고 함

// // 이 코드는
// const p = new Promise((a, b) => {
//   a("성공!");
// });

// // 이 코드다 사실상
// const executor = (a, b) => {
//   a("성공!");
// };
// executor(resolve, reject);

// promise는 원래 파라미터에 resolve reject를 받도록 설계되있냐고 js문법 자체에
// 응. JavaScript 언어 명세 자체에서 그렇게 설계되어 있어.

const timer = (str, ms = 500) => {
  return new Promise((resolve, reject) => {
    // resolve, reject 자리에 a,b 이렇게 와도됨
    // 왜냐면 그냥 저 자리엔 Promise 생성자에 내장 파라미터로 있기 때문
    setTimeout(() => {
      console.log(str);

      if (str === "A" || str === "B" || str === "C") {
        resolve({ code: "허용", word: str });
      } else {
        reject(new Error("허용하지 않는 문자가 입력됐다"));
      }
    }, ms);
  });
};

timer("A")
  .then((result) => {
    // resolve일떄 실행되는 코드 작성
    console.log(result.code, result.word);
    return timer("B"); // 동기처리를하기위한방법
  })
  .then((result) => {
    console.log(result.code, result.word);
    return timer("C");
  })
  .then((result) => {
    console.log(result.code, result.word);
  })
  .catch((error) => {
    // reject일때 실행되는 코드 작성
    console.log(error.message);
  })
  .finally(() => {
    // resolve던 reject던 무조건 실행되는 코드
    console.log("파이널리");
  });

console.log("외부외부");

// // 참고로 fetch()는 프로미스 객체를 반환함.

// // 함수 정의식
// function test() {}

// // 함수 표현식
// const test2 = () => {};

// // 차이는?
// //
