

  // q0() 함수 정의 (기존 로직 그대로)
  function q0() {
    let a1 = document.getElementById("qq1").value;
    let a2 = document.getElementById("qq2").value;

    // 값이 비어있는지 확인
    if (a1 === "" || a2 === "") {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    let aa1 = (((a2 / a1) * 100) / 12).toFixed(1);  // 매월 비율
    let aa2 = (((a2 / a1) * 100) / 4).toFixed(1);   // 분기 비율
    let aa3 = (((a2 / a1) * 100)).toFixed(1);       // 매년 비율

    alert("매월: " + aa1 + "%\n분기: " + aa2 + "%\n매년: " + aa3 + "%");
  }