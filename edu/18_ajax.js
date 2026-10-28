const user = { name: "철수", age: 25, skills: ["HTML", "CSS", "JavaScript"] };
function introduce(person) {
  if (person.age >= 20) {
    console.log("이름:", person.name);
    console.log("나이:", person.age);
    for (let i = 0; i < person.skills.length; i++) {
      console.log("기술:", person.skills[i]);
    }
  } else {
    console.log("미성년자입니다.");
  }
}
const calculate = (a, b) => {
  const sum = a + b;
  const multiply = a * b;
  return { sum: sum, multiply: multiply };
};
introduce(user);
const result = calculate(10, 20);
console.log("합계:", result.sum);
console.log("곱:", result.multiply);
if (result.sum > 20) {
  console.log("합계가 20보다 큽니다.");
} else {
  console.log("합계가 20 이하입니다.");
}

/////////////////////////////////////////////////////////////////
