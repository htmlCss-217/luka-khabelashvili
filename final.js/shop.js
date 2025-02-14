document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelector(".search button").addEventListener("click", function () {
        let query = document.querySelector(".search input").value;
        if (query.trim() !== "") {
            alert("Searching for: " + query);
        } else {
            alert("Please enter a search term.");
        }
    });

    
    let quantityInput = document.querySelector(".quantity input");
    let availableStock = 1;

    quantityInput.addEventListener("input", function () {
        let value = parseInt(quantityInput.value);
        if (isNaN(value) || value < 1) {
            quantityInput.value = 1;
        } else if (value > availableStock) {
            alert("Only " + availableStock + " items available in stock.");
            quantityInput.value = availableStock;
        }
    });

   
    document.getElementById("now").addEventListener("click", function () {
        let selectedQuantity = parseInt(quantityInput.value);
        if (selectedQuantity > availableStock) {
            alert("Not enough stock available.");
        } else {
            alert("Purchased " + selectedQuantity + " item(s) successfully!");
        }
    });
});
