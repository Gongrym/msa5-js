const nextBtn = document.querySelector(".next-btn");
const resetBtn = document.querySelector(".reset-btn");
const baseURL = "https://picsum.photos/v2/list";

nextBtn.addEventListener("click", async function () {
  const response = await axios.get(baseURL, {
    params: { page: page, limit: 3 },
  }); /* 페이지에서 이미지객체를 3개씩 불러오겠다는 메서드 (거기다 nextBtn을 async 메서드로 지정해서
  await 기능도 쓸 수 있음) */ /* ? 근데 이 limit은 값을 3개 가져오겠다인건 알겠는데, page는 뭐임? 어차피
  저 링크는 한페이진데..? 아래에 보면 페이지를 하나씩 늘리고있는데 뭔소리냐 이게 */

  response.data.forEach(function (image) {
    /* 클릭 한번 했을때 response에 받아진 이미지들의.데이터들의.각각을(~하는 메서드(image라는 매개변수로)) */
    /* forEach: 배열 안의 요소를 하나씩 꺼내서 각요소마다 실행 */
    /* 따라서 response에 저장된 이미지 하나하나에 대해 아래의 메서드를 적용한다*/
    const img = document.createElement("img"); // html의 이미지 태그를 실제 생성하며 js 객체로도 생성
    img.src = image.download_url; // ? .src는 무슨 프로퍼티임? // 일단 img라는 객체에 담긴 값 자체로 이해하고넘어갈게
    /* .download_url은 무슨 동작임? 아니면 download_url 자체가 url에서 다운로드 된 데이터들을 의미하나? */
    img.width = 200; /* 이건 뭐임? 난 css에서 뭘 건드린적이 없는데 실행시켜보니 js만으로 이미지가 3개씩 붙다가
    한 줄에 4개가 되면 알아서 아래로 붙고 그러더라고. 이런건 css에서 정하는거 아니야? 여튼 그거랑 관련있어보임
    설명좀. 물론 화면 넓히면 한줄에 4개보다 더 들어가더라 */
    const container = document.querySelector(".container");
    container.appendChild(
      img,
    ); /* 객체 container를 객체 img의 부모로 둔다. 따라서 img의 데이터는
    container도 가짐 */
  });

  page++; /* 근데 여기서 page는 위 params: page: page 중에 앞에 페이지냐 뒤에 페이지냐? */
});

resetBtn.addEventListener("click", function () {
  const container = document.querySelector(".container");
  container.remove();