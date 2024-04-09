function checkNickname() {
  var nickname = document.getElementById("nickname").value;
  if (nickname === "") {
      alert("닉네임을 입력해주세요.");
  } else {
      openPopup();
  }
}

function openPopup() {
  var popup = document.getElementById("popup");
  var nickname = document.getElementById("nickname").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  
  var genderText = "";
  if (gender === "male") {
    genderText = "남";
  } else if (gender === "female") {
    genderText = "여";
  }

  document.getElementById("popup-nickname").textContent = nickname;
  document.getElementById("popup-gender").textContent = genderText;
  
  popup.style.display = "block"; // 팝업 열기
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

function confirmConnect() {
  var nickname = document.getElementById("nickname").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  localStorage.setItem("nickname", nickname);
  localStorage.setItem("gender", gender);
  window.location.href = "main.html";
}
