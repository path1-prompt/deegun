// scripts.js

document.querySelector('.cta').addEventListener('click', function() {
    window.location.href = '#shop'; // เลื่อนหน้าจอไปที่ส่วนสินค้า
});

const buyButtons = document.querySelectorAll('.buy-button');
buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('สั่งซื้อสินค้าของคุณแล้ว!');
    });
});
// ฟังก์ชันเพิ่มสินค้าไปยังรายการสั่งซื้อ
function addToOrder(productName, price) {
    const orderList = document.getElementById("order-items-list");
    const newItem = document.createElement("li");
    newItem.textContent = `${productName} - ราคา ${price} บาท`;
    orderList.appendChild(newItem);

    // เปิดหน้าต่างรายการสั่งซื้อทันที
    toggleOrderList();
}

// ฟังก์ชันเปิด/ปิดหน้าต่างรายการสั่งซื้อ
function toggleOrderList() {
    const orderList = document.getElementById("order-list");
    orderList.style.display = orderList.style.display === "none" || orderList.style.display === "" ? "block" : "none";
}
