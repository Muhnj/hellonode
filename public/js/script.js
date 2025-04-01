/* register */
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    const roleRegex = /^(Manager|Director|Sales Agent)$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 

    if (!roleRegex.test(role)) {
        message.style.display = 'block';
        message.textContent = "Please select a valid role.";
        message.style.color = 'red';
        return;
    }

    if (!emailRegex.test(email)) {
        message.style.display = 'block';
        message.textContent = "Please enter a valid email.";
        message.style.color = 'red';
        return;
    }

    if (!passwordRegex.test(password)) {
        message.style.display = 'block';
        message.textContent = "Password must be at least 8 characters long, include one uppercase, one lowercase, one number, and one special character.";
        message.style.color = 'red';
        return;
    }

    if (password !== confirmPassword) {
        message.style.display = 'block';
        message.textContent = "Passwords do not match.";
        message.style.color = 'red';
        return;
    }

    // If all validations pass
    message.style.display = 'block';
    message.textContent = "Registration successful!";
    message.style.color = 'green';

    // Redirect to login page after a short delay
    setTimeout(function() {
        window.location.href = './login.html';
    }, 2000);
});



/*login*/
 // Add an event listener to handle form submission
 document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Strong password validation

    if (!emailRegex.test(email)) {
        message.style.display = 'block';
        message.textContent = "Please enter a valid email.";
        message.style.color = 'red';
        return;
    }

    if (!passwordRegex.test(password)) {
        message.style.display = 'block';
        message.textContent = "Invalid password format.";
        message.style.color = 'red';
        return;
    }

    // If all validations pass, redirect to the About page
    message.style.display = 'block';
    message.textContent = "Login successful!";
    message.style.color = 'green';

    setTimeout(function() {
        window.location.href = "about.html";
    }, 2000); // Redirect after 2 seconds
});


/*produce*/

function addProduct() {
    let name = document.getElementById("productName").value;
    let quantity = document.getElementById("quantity").value;
    if (name === "" || quantity === "") {
        alert("Please enter product name and quantity");
        return;
    }
    
    let table = document.getElementById("productTable");
    let row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = quantity;
    row.insertCell(2).innerHTML = '<button onclick="readProduct(this)">📘</button>';
    row.insertCell(3).innerHTML = '<button onclick="updateProduct(this)">✏️</button>';
    row.insertCell(4).innerHTML = '<button onclick="deleteProduct(this)">🗑️</button>';
    
    document.getElementById("productName").value = "";
    document.getElementById("quantity").value = "";
}

function readProduct(button) {
    let row = button.parentNode.parentNode;
    alert("Product: " + row.cells[0].innerText + "\nQuantity: " + row.cells[1].innerText);
}

function updateProduct(button) {
    let row = button.parentNode.parentNode;
    let newName = prompt("Enter new product name", row.cells[0].innerText);
    let newQuantity = prompt("Enter new quantity", row.cells[1].innerText);
    if (newName && newQuantity) {
        row.cells[0].innerText = newName;
        row.cells[1].innerText = newQuantity;
    }
}

function deleteProduct(button) {
    if (confirm("Are you sure you want to delete this product?")) {
        let row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
}
