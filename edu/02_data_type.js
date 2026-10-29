// 자료형

// 원시 타입 자료형
// 값 자체를 복사해오는 방식
// 데이터가 가벼움
let num1 = 1;
let num2 = num1;
num2 = 99;
console.log(num1, num2);

// 레퍼런스(참조) 타입 자료형
let obj1 = {
  id: 1,
  name: "둘리",
  etc: { addr: "대구", test: { key1: "val1" } },
};
let obj2 = obj1;
obj2.name = "홍길동";
console.log(obj1.name);
/* 이렇게 하면 안된다.! 왜냐면,
참조형은 값을 가져오는게 아니라, 주소를 가져오기 때문에 obj2는 obj1의 주소를 할당받게됨.
따라서 obj2.name을 건드리면 obj1의 name을 건드리게 되는것 */

// shallow copy (얕은 복사)
// 객체의 최상위 계층만 값을 복사하고, 그 이하 계층은 참조형 데이터일 경우 주소만 복사함
let obj3 = { ...obj1 }; // 이게 바로 얕은 복사의 문법
obj3.name = "또치";
obj3.etc.addr = "서울";
console.log(obj1.name, obj3.name, obj1.etc.addr, obj3.etc.addr);

// deep copy (깊은 복사)
// 모든 계층의 값을 복사
// 객체의 값 깊이가 깊으면 깊을수록 무거워짐(느려짐)
// 방법: 객체를 json형태로 바꾸고 그걸 다시 오브젝트로 바꿔넣는다.
// json (JavaScript Object Notation) (자바스크립트의 객체 형태와 비슷하다해서 붙인 이름)
obj1 = {
  id: 1,
  name: "둘리",
  etc: { addr: "대구" },
};
let obj4 = JSON.parse(stringify(obj1)); // obj4에 obj1을 딥카피 하는것
