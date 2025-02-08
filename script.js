// ฟังก์ชันเริ่มต้นกรอกข้อมูล
function startReading() {
    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;

    if (name && age >= 10) {
        document.getElementById("start-form").style.display = "none";
        document.getElementById("selection-form").style.display = "block";
    } else {
        alert("กรุณากรอกข้อมูลให้ถูกต้อง");
    }
}

// ฟังก์ชันสับไพ่ตามอายุ
function shuffleCards() {
    let age = document.getElementById("age").value;
    let selectedType = document.getElementById("cardType").value;
    let numCards = 0;

    switch (selectedType) {
        case "love": numCards = 4; break;
        case "career": numCards = 3; break;
        case "finance": numCards = 3; break;
        case "study": numCards = 3; break;
        case "pastPresentFuture": numCards = 3; break;
        case "destiny": numCards = 7; break;
        case "dream": numCards = 5; break;
        default: numCards = 3; break;
    }

    let cards = [];
    for (let i = 0; i < numCards; i++) {
        cards.push(`https://via.placeholder.com/100x150.png?text=Card+${i+1}`);
    }

    let cardsContainer = document.getElementById("cards");
    cardsContainer.innerHTML = "";
    cards.forEach(card => {
        let img = document.createElement("img");
        img.src = card;
        img.onclick = playCardSound; // เพิ่มฟังก์ชันเสียงเมื่อคลิกไพ่
        cardsContainer.appendChild(img);
    });

    // แสดงวันที่และเวลา
    let now = new Date();
    let dateTimeString = now.toLocaleString("th-TH", {
        weekday: "long", // วันในสัปดาห์
        year: "numeric", // ปี
        month: "long", // เดือน
        day: "numeric", // วันที่
        hour: "numeric", // ชั่วโมง
        minute: "numeric", // นาที
        second: "numeric", // วินาที
        hour12: false // 24 ชั่วโมง
    });
    document.getElementById("date-time").textContent = `เวลา: ${dateTimeString}`;

    document.getElementById("selection-form").style.display = "none";
    document.getElementById("result-form").style.display = "block";
}
