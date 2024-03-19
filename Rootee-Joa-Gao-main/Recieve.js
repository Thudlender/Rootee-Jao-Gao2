// Function to capture and print screenshot of the shopping cart
function printScreenshot() {
  // Capture the shopping cart section using html2canvas
  html2canvas(document.querySelector("#cart")).then((canvas) => {
    // Convert the canvas to an image data URL
    var imgData = canvas.toDataURL("image/png");
    // Create a new PDF document
    var pdf = new jsPDF();
    // Add the image to the PDF document
    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdf.internal.pageSize.getWidth(),
      pdf.internal.pageSize.getHeight()
    );
    // Save the PDF document
    pdf.save("shopping_cart.pdf");
  });
}

// Add event listener to the Buy button
document.getElementById("buyButton").addEventListener("click", printScreenshot);
