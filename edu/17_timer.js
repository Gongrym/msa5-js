// 타이머 함수

console.log("A");
const timeoutID = setTimeout(() => {
  console.log("B");
}, 1000);
console.log("C");

// setTimeout(cb,ms[, ...args]):number
// 설정한 일정 시간 후에 콜백함수를 실행
// 콜백 함수에 파라미터가 필요한 경우에만 ...args를 추가
// return값은 timeoutID 정수값 (해당 타이머의 고유한 식별값)

setTimeout(() => clearTimeout(timeoutID), 1500);
