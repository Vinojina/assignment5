document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const savedName = document.getElementById("savedName");
    const savedEmail = document.getElementById("savedEmail");
    const clearDataButton = document.getElementById("clearData");

    // Load saved data when the page loads
    if (localStorage.getItem("userName")) {
        savedName.textContent = "Name: " + localStorage.getItem("userName");
        savedEmail.textContent = "Email: " + localStorage.getItem("userEmail");
    }

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim(); // Not saving password

        if (name && email) {
            // Save user data in localStorage
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);

            // Display saved data
            savedName.textContent = "Name: " + name;
            savedEmail.textContent = "Email: " + email;
            alert("Sign-up successful! Data saved.");

            // Clear input fields after saving
            nameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
        }
    });

    // Clear data button
    clearDataButton.addEventListener("click", () => {
        localStorage.clear();
        savedName.textContent = "";
        savedEmail.textContent = "";
        alert("Data cleared.");
    });
});

// Initialize cart variables
let cartCount = 0;
let totalAmount = 0;

// Select DOM elements
const cartCountElement = document.getElementById('cart-count');
const totalAmountElement = document.getElementById('total-amount');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listeners to all "Add to Cart" buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Increment cart count
        cartCount++;
        cartCountElement.textContent = cartCount;

        // Get price from data attribute and update total
        const price = parseFloat(button.getAttribute('data-price'));
        totalAmount += price;
        totalAmountElement.textContent = totalAmount.toFixed(2); // Display with 2 decimal places
    });
});



   
   
   
   

   
   

   
   
   
   
   

    
    
    
    

    
    
    
    
    



















