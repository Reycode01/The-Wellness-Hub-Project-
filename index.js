document.getElementById('signup-btn').addEventListener('click', function() {
    createForm('Sign Up');
});

document.getElementById('login-btn').addEventListener('click', function() {
    createForm('Login');
});

function createForm(type) {
    // Remove existing form if any
    const existingForm = document.querySelector('.auth-form');
    if (existingForm) {
        existingForm.remove();
    }

    // Create form elements
    const form = document.createElement('form');
    const emailInput = document.createElement('input');
    const passwordInput = document.createElement('input');
    const submitButton = document.createElement('button');
    const closeButton = document.createElement('button');

    // Set attributes and properties
    form.classList.add('auth-form');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'Email');
    emailInput.setAttribute('id', 'email'); // Add id attribute
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('placeholder', 'Password');
    passwordInput.setAttribute('id', 'password'); // Add id attribute
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = type;
    closeButton.textContent = 'Close';

    // Append elements to form
    form.appendChild(emailInput);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);
    form.appendChild(closeButton);

    // Append form to body
    document.body.appendChild(form);

    // Position the form to the right of the sign-up button
    const signupButton = document.getElementById('signup-btn');
    const authButtons = document.querySelector('.auth-buttons');
    const rect = signupButton.getBoundingClientRect();
    const rightPosition = rect.right + window.pageXOffset;
    form.style.position = 'absolute';
    form.style.top = authButtons.offsetTop + 'px';
    form.style.left = rect.left + 'px'; // Fixed typo: 'react' should be 'rect'

    // Close form when close button is clicked
    closeButton.addEventListener('click', function() {
        form.remove();
    });

    // Form submission handling
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate email format
        const email = emailInput.value.trim();
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate password length
        const password = passwordInput.value.trim();
        if (password.length < 7) {
            alert('Password must be at least 7 characters long.');
            return;
        }

        // Show success notification only when Sign Up or Login button is clicked
        if (type === 'Sign Up' || type === 'Login') {
            showNotification('Successful!');
        }

        // Optionally, close the form after successful submission
        form.remove();
    });
}

function isValidEmail(email) {
    // Simple email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotification(message) {
    alert(message);
}

// Get the image element
const image = document.querySelector('.image-details');
// Get the value of the data-details attribute
const imageName = image.getAttribute('data-details');
// Get the image-name paragraph element
const imageNameParagraph = document.querySelector('.image-name');
// Update the text content of the image-name paragraph element with the value of the data-details attribute
imageNameParagraph.textContent = imageName;

function incrementLikes(button) {
    // Find the span element containing the like count
    let likeCountSpan = button.querySelector('.like-count');
    // Get the current like count
    let currentLikes = parseInt(likeCountSpan.textContent);
    // Increment the like count
    currentLikes++;
    // Update the like count in the span element
    likeCountSpan.textContent = currentLikes;
}
















