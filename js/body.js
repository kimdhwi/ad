function q0(){
    let a1 = document.getElementById("qq1").value;
    let a2 = document.getElementById("qq2").value;

    // 값이 비어있을 경우 계산을 막고 경고를 표시
    if(a1 === "" || a2 === "") {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    // 매월, 분기, 매년 비율 계산
    let aa1 = (((a2/a1)*100)/12).toFixed(1); // 매월 비율
    let aa2 = (((a2/a1)*100)/4).toFixed(1);  // 분기 비율
    let aa3 = (((a2/a1)*100)).toFixed(1);    // 매년 비율

    // 결과값을 각 textarea에 표시
    document.getElementById("qq3").value = "매월 " + aa1 + "%" + " ( 1개월 )";
    document.getElementById("qq4").value = "분기 " + aa2 + "%" + " ( 4개월 )";
    document.getElementById("qq5").value = "매년 " + aa3 + "%" + " ( 12개월 )";
  }
