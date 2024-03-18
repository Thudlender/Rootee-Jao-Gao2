document.addEventListener("DOMContentLoaded", function() {
    const buyButton = document.getElementById("buyButton");

    buyButton.addEventListener("click", function() {
        const cartItems = document.querySelectorAll("#cart-items li");
        const totalPrice = document.getElementById("cart-total").textContent;

        // Initialize jsPDF
        const doc = new jsPDF();

        // Set initial y-coordinate for the PDF content
        let y = 10;

        // Add title to the PDF
        doc.setFontSize(20);
        doc.text("Shopping Cart", 10, y);
        y += 10;

        // Add shopping cart items to the PDF
        cartItems.forEach(item => {
            const productName = item.querySelector(".product-name").textContent;
            const productPrice = item.querySelector(".product-price").textContent;

            doc.setFontSize(12);
            doc.text(`${productName} - ${productPrice}`, 10, y);
            y += 7;
        });

        // Add total price to the PDF
        doc.setFontSize(14);
        doc.text(`Total: ${totalPrice}`, 10, y + 10);

        // Save the PDF
        doc.save("shopping_cart.pdf");
    });
});
//------------------ใช้ไม่ได้ :( ---------------------// 