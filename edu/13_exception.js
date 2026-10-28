// console.log(1);
// console.log(2);
// try {
//   // 내가 실행할 처리를 작성
//   console.log("try문 시작");
//   console.log(test.name);
//   console.log("try문 끝");
// } catch (error) {
//   // try문 안에서 에러나 예외가 발생했을때 처리할 로직
//   console.log("Error 발생");
//   console.log(error.name); // 발생한 에러명
//   console.log(error.message); // 발생한 에러 내용
//   console.log(error.stack); // 발생한 에러 상세정보
// }
// console.log(4);
// console.log(5);
// // try catch 문은 try 중괄호 안에서 발생한 오류를 catch 문 소괄호 안의 파라미터 영역에 전달함.

// // throw
// try {
//   console.log(1);
//   // 1에서 2로 안넘어가게 만드는 기능을 위해 강제로 예외 발생시키기
//   throw new Error("강제로 예외 발생 시켰다.");
//   console.log(2);
// } catch (error) {
//   console.log(error.stack);
// }

// // finally : 예외여부와 상관없이 무조건 실행되는 로직을 작성하기 위해 사용
// // 보통 아래와같이 사용
// try {
//   console.log(test.name);
//   console.log(1);
// } catch (error) {
//   console.log("error");
// } finally {
//   console.log("finally");
// }

// // 에러를 상세하게 처리하는 방법
// // 여러 종류의 예외를 처리하고 싶을 때,
// // instantof 연산자를 사용해서 예외를 구체적으로 처리

// try {
//   throw new ReferenceError();
// } catch (error) {
//   if (error instanceof SyntaxError) {
//     console.log("신텍스 에러");
//   } else if (error instanceof ReferenceError) {
//     console.log("참조 에러");
//   } else {
//     console.log("에러에러!");
//   }
// }
