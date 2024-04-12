// 팝업 열기
document.getElementById("signup-link").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("signup-popup").style.display = "block";
});

// 팝업 닫기
document.getElementById("close-signup").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("signup-popup").style.display = "none";
});

// 회원가입 폼 제출 처리
document.getElementById("signup-popup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // 입력된 값 가져오기
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("signup-password-confirm").value;
  const email = document.getElementById("signup-email").value;
  const gender = document.getElementById("signup-gender").value; // 성별 추가

  // 유효성 검사
  if (!username || !password || !confirmPassword || !email || !gender) { // 성별 유효성 검사 추가
      alert("모든 필드를 입력해주세요.");
      return;
  }

  if (password !== confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
  }

  // 서버로 회원가입 정보 전송
  fetch("/signup", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          username,
          password,
          email,
          gender // 성별 추가
      })
  })
  .then(response => response.json())
  .then(data => {
      alert(data.message);
      if (data.success) {
          // 회원가입 성공 시 처리할 내용 추가
      }
  })
  .catch(error => {
      console.error("Error:", error);
      alert("회원가입에 실패하였습니다.");
  });
});

// 아이디 중복 확인 버튼 클릭 이벤트 처리
document.getElementById("check-username").addEventListener("click", function(event) {
  event.preventDefault();
  const username = document.getElementById("signup-username").value;
  if (!username) {
      alert("아이디를 입력해주세요.");
      return;
  }
  // 서버로 아이디 중복 확인 요청 보냄
  fetch("/check-username", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username })
  })
  .then(response => response.json())
  .then(data => {
      alert(data.message);
  })
  .catch(error => {
      console.error("Error:", error);
      alert("서버 오류가 발생했습니다.");
  });
});

// 이메일 중복 확인 버튼 클릭 이벤트 처리
document.getElementById("check-email").addEventListener("click", function(event) {
  event.preventDefault();
  const email = document.getElementById("signup-email").value;
  if (!email) {
      alert("이메일을 입력해주세요.");
      return;
  }
  // 서버로 이메일 중복 확인 요청 보냄
  fetch("/check-email", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email })
  })
  .then(response => response.json())
  .then(data => {
      alert(data.message);
  })
  .catch(error => {
      console.error("Error:", error);
      alert("서버 오류가 발생했습니다.");
  });
});


// ID/PW 찾기 팝업 열기
document.getElementById("forgot-password").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("forgot-password-popup").style.display = "block";
});

// ID/PW 찾기 팝업 닫기
document.getElementById("close-forgot-password").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("forgot-password-popup").style.display = "none";
});

// ID/PW 찾기 요청 처리
document.getElementById("forgot-password-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("forgot-password-email").value;

  // 유효성 검사
  if (!email) {
      alert("이메일을 입력해주세요.");
      return;
  }

  // 서버로 이메일을 보내고 ID/PW를 찾는 요청을 보냄
  fetch("/forgot-password", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email })
  })
  .then(response => {
      if (response.status === 404) {
          throw new Error("등록되지 않은 이메일입니다.");
      }
      if (!response.ok) {
          throw new Error("서버 응답 실패");
      }
      return response.json();
  })
  .then(data => {
    alert(data.message);
    if (data.success) {
        alert(`ID/PW가 해당 이메일로 전송되었습니다.`);
    }
  })  
  .catch(error => {
      console.error("Error:", error);
      alert(error.message); // 에러 메시지를 사용자에게 표시
  });

  // 폼 제출 후 팝업 닫기
  document.getElementById("forgot-password-popup").style.display = "none";
});
