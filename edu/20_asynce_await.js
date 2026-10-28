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

// async함수는 반드시 async라는 키워드를 붙여줘야하는 규칙이있다

const process = async () => {
  // 이렇게 소괄호 앞에 async 해줘야 나중에 await를 쓸 수 있다
  try {
    const result1 = await timer("A");
    console.log(result1.code, result1.word);
    const result2 = await timer("B");
    console.log(result2.code, result2.word);
    const result3 = await timer("C");
    console.log(result3.code, result3.word);
    const result4 = await timer("D");
    console.log(result4.code, result4.word);
  } catch (error) {
    console.log(error.message);
  }
};

process();

// https://picsum.photos/id/237/200/300 에서
// https://picsum.photos (+ 포트번호) 까지는 도메인
// id/237/200/300 부터는 path

// https는 443번 포트가 기본. 그래서 포트를 적지않아도 해당 사이트에 접근이 가능함
