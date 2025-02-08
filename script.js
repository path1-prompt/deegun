const cards = [
    { name: "ไพ่ที่ 1", image: "cards/card1.png", description: "คำทำนายของไพ่ที่ 1" },
    { name: "ไพ่ที่ 2", image: "cards/card2.png", description: "คำทำนายของไพ่ที่ 2" },
    { name: "ไพ่ที่ 3", image: "cards/card3.png", description: "คำทำนายของไพ่ที่ 3" },
    { name: "ไพ่ที่ 4", image: "cards/card4.png", description: "คำทำนายของไพ่ที่ 4" },
    { name: "ไพ่ที่ 5", image: "cards/card5.png", description: "คำทำนายของไพ่ที่ 5" },
    { name: "ไพ่ที่ 6", image: "cards/card6.png", description: "คำทำนายของไพ่ที่ 6" },
    { name: "ไพ่ที่ 7", image: "cards/card7.png", description: "คำทำนายของไพ่ที่ 7" },
    { name: "ไพ่ที่ 8", image: "cards/card8.png", description: "คำทำนายของไพ่ที่ 8" },
    { name: "ไพ่ที่ 9", image: "cards/card9.png", description: "คำทำนายของไพ่ที่ 9" },
    { name: "ไพ่ที่ 10", image: "cards/card10.png", description: "คำทำนายของไพ่ที่ 10" },
    { name: "ไพ่ที่ 11", image: "cards/card11.png", description: "คำทำนายของไพ่ที่ 11" },
    { name: "ไพ่ที่ 12", image: "cards/card12.png", description: "คำทำนายของไพ่ที่ 12" },
    { name: "ไพ่ที่ 13", image: "cards/card13.png", description: "คำทำนายของไพ่ที่ 13" },
    { name: "ไพ่ที่ 14", image: "cards/card14.png", description: "คำทำนายของไพ่ที่ 14" },
    { name: "ไพ่ที่ 15", image: "cards/card15.png", description: "คำทำนายของไพ่ที่ 15" },
    { name: "ไพ่ที่ 16", image: "cards/card16.png", description: "คำทำนายของไพ่ที่ 16" },
    { name: "ไพ่ที่ 17", image: "cards/card17.png", description: "คำทำนายของไพ่ที่ 17" },
    { name: "ไพ่ที่ 18", image: "cards/card18.png", description: "คำทำนายของไพ่ที่ 18" },
    { name: "ไพ่ที่ 19", image: "cards/card19.png", description: "คำทำนายของไพ่ที่ 19" },
    { name: "ไพ่ที่ 20", image: "cards/card20.png", description: "คำทำนายของไพ่ที่ 20" },
    // เพิ่มไพ่ให้ครบ 70 ใบ...
];

function drawCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];

    document.getElementById("card-image").src = selectedCard.image;
    document.getElementById("card-name").textContent = selectedCard.name;
    document.getElementById("card-description").textContent = selectedCard.description;
}
