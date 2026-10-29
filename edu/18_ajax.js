// BaseURL: https://picsum.photos
// Resource/Path: /v2/list
// Parameter:
//   - page: number
//   - limit: number
// 특이사항: 이미지는 1000개가 준비되어 있다.
// 예제: https://picsum.photos/v2/list?page=2&limit=100

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const baseURL = "https://picsum.photos";
  const path = "/v2/list";

  // 이벤트 객체에서 이벤트가 발생한 요소에 접근(e.target)해서 필요한 값 획득
  const page = e.target.page.value;
  const limit = e.target.limit.value;
  // fetch("")
  //   // fetch API는 예외처리를 일일이 해줘야하는 불편함이 있다. (더 알아봐야함)

  const url = `${baseURL}${path}?page=${page}&limit=${limit}`;
  // ? const url = `${baseURL}${path}`; 이코드의 ${} 문법과 백틱에 대해 질문
  // ${} 안에는 자바스크립트 코드를 넣는다.

  try {
    const response = await axios.get(url);
    console.log(response);

    const cardContainer = document.querySelector(".card-container");
    /* ? 쿼리셀렉터는 뭐하는애임? 화면의 html 요소를 가져온다는 메소드인데, 저 괄호와
  큰따옴표 안의 html 값을 참조한다는거임? 참조인지 접근인지 개념어 사용이 미숙함*/
    cardContainer.textContent = "";
    response.data.forEach((item, idx) => {
      // 1. card 요소 생성
      const card = document.createElement("div");
      card.classList.add("card");
      // ? 프로퍼티와 메소드 차이
      card.appendChild(cardImg);
      card.appendChild(cardText);

      // 2. card-img 요소 생성
      const cardImg = document.createElement("div");
      cardImg.classList.add("card-img");
      // ? 이거 html에서 가져오는거냐?
      cardImg.style.backgroundImage = `url("${item.download_url}")`;

      // 3. card-text 요소 생성
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.textContent = `${item.id}: ${item.author}`;

      // 4. card-container에 생성한 요소를 담는다
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
});

// ! dom이 뭔지 다시 기록
// ! async-await와 fetch의 차이. 둘다 개념적으로 아예 모름
