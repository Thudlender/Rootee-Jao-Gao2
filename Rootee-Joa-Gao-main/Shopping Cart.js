// Function to scroll to the products section
// เป็น Function ที่เวลาเรากดปู่ม Rootee หรือ Contact จะเลื่อนไปในส่วนที่ๆ เราจะดูให้เป็นทางลัด 
function scrollToProducts() {
  const productsSection = document.getElementById("products");
  productsSection.scrollIntoView({ behavior: "smooth" });
}

// Array to store items in the shopping cart
// อาร์เรย์การเก็บของไปไว้ในรถเข็น
let cartItems = [];

// Function to add a product to the cart
// Function การเพิ่มของไว้ในรถเข็น มีชื่อสินค้า และ ราคา
function addToCart(productName, price) {
  // Check if the product is already in the cart
  // เช็คว่าสินค้าอยู่ในรถเข็นแล้วหรือไม่
  const existingItem = cartItems.find(item => item.name === productName);
  if (existingItem) {
    // If the product already exists, increase its quantity
    // หากมีสินค้าอยู่แล้ว ให้เพิ่มปริมาณ
    existingItem.quantity++;
  } else {
    // If the product doesn't exist, add it to the cart with quantity 1
    // หากไม่มีสินค้า ให้เพิ่มลงในรถเข็นด้วยจำนวน 1
    cartItems.push({ name: productName, price: price, quantity: 1 });
  }
  updateCart();
}


// Function to remove a product from the cart
// Function การลบสินค้าออกจากรถเข็น
function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

// Function to update the cart UI and total price
// ฟังก์ชั่นอัพเดท UI รถเข็นและราคารวม
function updateCart() {
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  // Clear the previous content
  cartList.innerHTML = "";

  // Populate the cart with items
  let totalPrice = 0;

  cartItems.forEach((item, index) => {
    const li = document.createElement("p");
    li.textContent = `${item.name}: price = ${item.price} x ${item.quantity} ฿\t`;

    // Create a remove button for each item
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
      removeFromCart(index);
    };
    li.appendChild(removeButton);
    cartList.appendChild(li);

    totalPrice += parseFloat(item.price) * item.quantity;
  });

  // Update the total price
  cartTotal.textContent = totalPrice.toFixed(2);
}

