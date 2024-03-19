function printReceipt() {
  // Create a new PDF document
  var pdf = new jsPDF();

  // Add title to the receipt
  pdf.setFontSize(18);
  pdf.text("Receipt", 10, 10);

  // Initialize Y position for content
  var yPos = 20;

  // Add items from the cart to the receipt
  cartItems.forEach((item, index) => {
    pdf.setFontSize(12);
    pdf.text(`${item.name}: ${item.price}฿ x ${item.quantity}`, 10, yPos);
    yPos += 10;
  });

  // Add total price
  pdf.setFontSize(14);
  pdf.text(
    `Total: ฿${document.getElementById("cart-total").textContent}`,
    10,
    yPos + 10
  );

  // Save the PDF document
  pdf.save("receipt.pdf");
}

// Add event listener to the Buy button
document.getElementById("buyButton").addEventListener("click", printReceipt);
