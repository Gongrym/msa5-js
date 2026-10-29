/* 

1. html 태그에 만들어둔 document

*/

const container = document.querySelector("#imageContainer");

const img = document.createElement("img");
img.src = "images/cat.jpg";
img.alt = "불러온 이미지";

container.appendChild(img);

const baseURL = "https://picsum.photos/v2/list";

async function loadImage() {
  // 1. API에 요청해서 사진 목록 가져오기
  const response = await axios.get(baseURL, {
    params: {
      page: 1,
      limit: 10,
    },
  });

  // 2. 사진 목록 중 첫 번째 사진 정보 선택
  const photo = response.data[(0 + x, 1 + x, 2 + x)];

  // 3. img 객체 생성
  const img = document.createElement("img");

  // 4. 선택한 사진의 주소를 img 객체에 넣기
  img.src = photo.download_url;

  // 5. HTML 화면에 이미지 추가
  document.querySelector(".image-container").appendChild(img);
}

loadImage();
