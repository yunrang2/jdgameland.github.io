@font-face {
  font-family: 'Yeongdeok Snow Crab';
  src: url('https://raw.githubusercontent.com/yunrang2/upload/master/Yeongdeok%20Snow%20Crab.ttf') format('truetype');
}

body {
  font-family: 'Yeongdeok Snow Crab', Arial, sans-serif;
  text-align: center;
  padding: 20px;
  margin-bottom: 50px; /* footer를 고려한 하단 여백 추가 */
  position: relative;
}

/* 미디어 쿼리: 600px 이상인 경우 */
@media screen and (min-width: 600px) {
  body {
    background-color: lightblue;
  }
}

/* 미디어 쿼리: 900px 이상인 경우 */
@media screen and (min-width: 900px) {
  body {
    background-color: lightgreen;
  }
}

/* 상단 이미지 스타일링 */
.header {
  height: 100px; /* 헤더의 높이를 조절합니다. */
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://raw.githubusercontent.com/yunrang2/upload/master/game%20land.png'); /* 이미지를 배경으로 설정합니다. */
  background-size: contain; /* 이미지를 헤더에 맞게 조절합니다. */
  background-position: center; /* 이미지를 가운데 정렬합니다. */
  background-repeat: no-repeat; /* 이미지 반복을 설정합니다. */
}

.header img {
  width: 1390px;
  height: 100px;
  justify-content: center;
}


.login-container {
  font-family: 'Yeongdeok Snow Crab', Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* 세로 방향으로 요소 배치 */
  height: 100vh; /* 화면 세로 중앙 정렬을 위해 높이 설정 */
  margin-top: -200px; /* 로그인 창을 상단으로 이동 */
}

.login-container form {
  width: 300px; /* 폼 너비 설정 */
  background-color: #fff; /* 백그라운드 색상을 흰색으로 설정 */
  padding: 20px; /* 내부 여백 추가 */
  border-radius: 10px; /* 테두리 둥글게 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
}

.login-container form input[type="text"],
.login-container form input[type="password"] {
  font-family: 'Yeongdeok Snow Crab', Arial, sans-serif;
  width: 100%; /* 입력 필드 너비를 100%로 설정 */
  padding: 10px; /* 입력 필드 내부 여백 추가 */
  margin-bottom: 10px; /* 입력 필드 아래 여백 추가 */
  border: 1px solid #ccc; /* 테두리 스타일 및 색상 설정 */
  border-radius: 5px; /* 테두리 둥글게 */
  box-sizing: border-box; /* 입력 필드의 크기를 border-box로 설정하여 패딩 및 테두리 포함 */
}

.login-container form button {
  font-family: 'Yeongdeok Snow Crab', Arial, sans-serif;
  width: 100%; /* 버튼 너비를 100%로 설정 */
  padding: 10px; /* 버튼 내부 여백 추가 */
  background-color: #007bff; /* 배경색 설정 */
  color: #fff; /* 글자색 설정 */
  border: none; /* 테두리 제거 */
  border-radius: 5px; /* 테두리 둥글게 */
  cursor: pointer; /* 커서 타입을 포인터로 변경하여 클릭 가능한 모양으로 변경 */
  transition: background-color 0.3s; /* 배경색 변화 시 부드럽게 변화하도록 트랜지션 설정 */
}

.login-container form button:hover {
  background-color: #0056b3; /* 호버 상태일 때 배경색 변경 */
}

.footer-links {
  margin-top: 20px; /* 링크 간격 설정 */
}

.footer-links a {
  margin-right: 10px; /* 링크 간격 설정 */
  color: #333; /* 링크 색상 설정 */
  text-decoration: none; /* 밑줄 제거 */
}

.footer-links a:hover {
  text-decoration: underline; /* 호버 시 밑줄 추가 */
}

/* 회원가입 팝업 스타일 */
#signup-popup {
  display: none;
  position: fixed;
  text-align: center; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 999; /* 다른 요소보다 위에 표시되도록 설정 */
  width: 500px; /* 너비 조정 */
  max-width: 90%; /* 최대 너비 설정 */
  max-height: 90%; /* 최대 높이 설정 */
  overflow: auto; /* 넘치는 내용 스크롤 설정 */
}


#signup-popup h2 {
  margin-top: 0;
}

#signup-popup .input-group {
  width: 80%;
  margin-bottom: 20px;
  margin: 10px auto;
}

#signup-popup label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

#signup-popup input[type="text"],
#signup-popup input[type="password"],
#signup-popup input[type="email"],
#signup-popup select {
  font-family: 'Yeongdeok Snow Crab', Arial, sans-serif;
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#signup-popup button[type="submit"],
#signup-popup button[type="button"] {
  font-family: 'Yeongdeok Snow Crab', Arial, sans-serif;
  width: 85%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#signup-popup button[type="submit"]:hover,
#signup-popup button[type="button"]:hover {
  background-color: #0056b3;
  font-family: 'Yeongdeok Snow Crab', Arial, sans-serif;
}

/* ID/PW 찾기 팝업 스타일 */
#forgot-password-popup {
  display: none;
  position: fixed;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 999; /* 다른 요소보다 위에 표시되도록 설정 */
  width: 500px; /* 너비 조정 */
  max-width: 90%; /* 최대 너비 설정 */
  max-height: 90%; /* 최대 높이 설정 */
  overflow: auto; /* 넘치는 내용 스크롤 설정 */
}

#forgot-password-popup h2 {
  margin-top: 0;
}

#forgot-password-popup .input-group {
  width: 80%;
  margin-bottom: 20px;
  margin: 10px auto;
}

#forgot-password-popup label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

#forgot-password-popup input[type="email"] {
  font-family: 'Yeongdeok Snow Crab', Arial, sans-serif;
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#forgot-password-popup button[type="submit"],
#forgot-password-popup button[type="button"] {
  width: 85%;
  padding: 10px;
  font-family: 'Yeongdeok Snow Crab', Arial, sans-serif;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#forgot-password-popup button[type="submit"]:hover,
#forgot-password-popup button[type="button"]:hover {
  background-color: #0056b3;
  font-family: 'Yeongdeok Snow Crab', Arial, sans-serif;
}
