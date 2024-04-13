document.addEventListener('DOMContentLoaded', function() {
    // Function to increment likes
        function incrementLikes(button) {
    let likeCountSpan = button.querySelector('.like-count');
    let currentLikes = parseInt(likeCountSpan.textContent);
    currentLikes++;
    likeCountSpan.textContent = currentLikes;
}
    function toggleCommentForm(button) {
    const commentForm = button.nextElementSibling;
    if (commentForm.style.display === 'none' || commentForm.style.display === '') {
    commentForm.style.display = 'block';
    } else {
    commentForm.style.display = 'none';
    }
}
// Function to post a comment
    function postComment(button) {
    const commentInput = button.parentElement.querySelector('.comment-input');
    const comment = commentInput.value.trim();
    const commentsList = button.parentElement.nextElementSibling;
    if (comment !== '') {
    const newComment = document.createElement('li');
    newComment.textContent = comment;
    commentsList.appendChild(newComment);
// Optionally, clear the comment input field after posting
     commentInput.value = '';
    } else {
    alert('Please enter a comment before posting.');
    }
}
// Like Buttons
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
    button.addEventListener('click', function() {
    incrementLikes(this);
    });
});
    
// Comment Buttons
    const commentButtons = document.querySelectorAll('.comment-button');
    commentButtons.forEach(button => {
    button.addEventListener('click', function() {
    toggleCommentForm(this);
    });
});
    
// Post Comment Buttons
    const postButtons = document.querySelectorAll('.post-button');
    postButtons.forEach(button => {
    button.addEventListener('click', function() {
    postComment(this);
    });
 });
document.addEventListener('DOMContentLoaded', function() {
    const products = [
    {name: 'Lifting Fitness', stock: 100, price: 50, imageUrl: 'https://cdn.manomano.com/images/images_products/30262607/L/111690475_1.jpg'},
    {name: 'Pull-Up-and-Down', stock: 350, price: 70, imageUrl: 'https://fitsy.in/uploads/products/564/07f123ddae3d4931b533e791a3288d5f.jpg'},
    {name: 'Hand Fitness', stock: 5, imageUrl: 'https://cdn.shopify.com/s/files/1/0272/5901/1165/products/RubberHexDumbbellV23kg_1024x1024.jpg?v=1637353313'}, 
    {name: 'Roller Stretcher', stock: 1, imageUrl: 'https://www.afrofit.co.ke/cdn/shop/products/70ed6eec6dae325f8cb5fba5852927f309e5d18f_600x600.jpg?v=1623742913'},
    {name: 'Foot Pedals', stock: 1, imageUrl: 'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/3187821/1.jpg?6093'},
    {name: 'Grunner Runner', stock: 2, imageUrl: 'https://i0.wp.com/fitnesskenya.co.ke/wp-content/uploads/2022/02/GRunner-Home-Gym-Motorized-Treadmill_nairobi-fitness_0796263609.jpg?resize=427%2C427&ssl=1'},
    {name: 'Back Exercise', stock: 3, imageUrl: 'https://www.fitnessgym.co.ke/images/gallery/00cfg01k.jpg'},
    {name: 'Byecle Riding', stock: 50, imageUrl: 'https://assets.roguefitness.com/f_auto,q_auto,c_fill,g_center,w_616,h_616,b_rgb:f8f8f8/catalog/Conditioning/Endurance%20/Bikes/ECHOBIKE/ECHOBIKE-TH_ih5rzy.png'},
    {ame: 'Visha Skin Care', stock: 20, imageUrl: 'https://www.vishaskincare.com/cdn/shop/products/69491231_1111677412358688_7737693182166564864_o_1024x1024.jpg?v=1567043202'},
    {name: 'CeraVe Lotion', stock: 4, imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/220519085500-workout-skincare-cerave.jpg?c=original'},
    {name: 'Keratin Treatment', stock: 7, imageUrl: 'https://en.samfitnesstr.com/Cdn/keratin.jpeg'},
    {name: 'Keratin Suppliments', stock: 5, imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/vitamin-supplement/k/m/t/60-ok-fitness-green-tea-60-tablets-for-weight-management-special-original-imagjr77taz5mazv.jpeg?q=90&crop=false'},
    {name: 'Tonor Skin Care', stock: 13, imageUrl: 'https://conferwith.net/cdn/shop/products/SkinFitnessSystem_360x.jpg?v=1618568170'},
    {name: 'Keratin Oil Massage', stock: 9, imageUrl:'https://en.samfitnesstr.com/Cdn/WhatsApp_Image_2021-04-23_at_17.03.25.jpeg'},
    {name: 'Natural Harbal', stock: 5, imageUrl:'https://www.cliniquelafontaine.com/cdn/shop/products/Serum-dermo-fitness.jpg?v=1622667434'},
    {name: 'Facial Cream', stock: 10, imageUrl:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1643021641-13324147-6424896743413104.jpg?crop=0.800xw:1xh;center,top&resize=980:*'},
];
// Function to render products based on search results
    function renderProducts(filteredProducts) {
    const productGrid = document.querySelector('.product-grid');
        productGrid.innerHTML = '';
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
    const productContainer = document.createElement('div');
        productContainer.classList.add('product-container');
    const productImage = document.createElement('img');
    productImage.src = product.imageUrl;
    productImage.alt = product.name;
    const productName = document.createElement('p');
            productName.textContent = product.name;
    const stockStatus = document.createElement('p');
    stockStatus.textContent = product.stock > 0 ? `Stock: ${product.stock}` : 'Out of stock';
        productContainer.appendChild(productImage);
        productContainer.appendChild(productName);
        productContainer.appendChild(stockStatus);
        productGrid.appendChild(productContainer);
});
    } else {
    const resultMessage = document.createElement('p');
    resultMessage.textContent = 'No products found.';
    productGrid.appendChild(resultMessage);
                }
}
// Function to handle search
    function searchProducts() {
    const searchInput = document.querySelector('#search-input');
    const searchValue = searchInput.value.trim().toLowerCase();
    if (searchValue === '') {
        renderProducts(products); // Display all products if search input is empty
    } else {
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue));
        renderProducts(filteredProducts);
    }
}
// Perform search when pressing Enter key in the search bar
    const searchInput = document.querySelector('#search-input');
    searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
    event.preventDefault(); // Prevent form submission
    searchProducts();
    }
});
// Perform search when clicking the search button
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', searchProducts);
// Initial rendering of all products
    renderProducts(products);
    });
});  
// Function to handle adding to cart and reducing stock
function addToCart(button) {
const stockElement = button.parentElement.querySelector('.stock');
let currentStock = parseInt(stockElement.textContent.split(': ')[1]);
if (currentStock === 0) {
    alert('This item is out of stock.');
    return;
}
            
// Reduce the stock by 1
    currentStock--;
    stockElement.textContent = `Stock: ${currentStock}`;
     alert('Item added to cart.');
    const viewCartConfirmation = confirm('Do you want to view your cart?');
    if (viewCartConfirmation) {
    const addToCartConfirmation = confirm('Do you want to add this item to your cart and proceed to pay?');
    if (addToCartConfirmation) {
    const payNowConfirmation = confirm('Do you want to pay now?');
    if (payNowConfirmation) {
    // If the user confirms, display a success message after 10 seconds
    setTimeout(function() {
    alert('Successfully paid! Thank you for your purchase.');
    }, 10000);
    } else {
    // If the user cancels, you can handle it as needed
            alert('Payment cancelled.');
    }
      } else {
// If the user cancels, you can handle it as needed
            alert('Item not added to cart.');
                }
            } else {
// If the user cancels, you can handle it as needed
                alert('Cart not viewed.');
            }
}

// Price Buttons (Add to Cart)
    const priceButtons = document.querySelectorAll('.price-button');
    priceButtons.forEach(button => {
    button.addEventListener('click', function() {
    addToCart(this);
    });
});
// Pay Now Button
    const payNowButton = document.querySelector('.pay-now-button');
    payNowButton.addEventListener('click', function() {
// Function to handle the payment process
    function pay() {
// Implement your payment logic here
        alert('Successfully paid! Thank you for your purchase.');
    }
pay();
});
document.addEventListener('DOMContentLoaded', function() {
 // Sign Up Button
    const signUpButton = document.getElementById('signup-btn');
    signUpButton.addEventListener('click', function() {
    createForm('Sign Up');
});
// Login Button
    const loginButton = document.getElementById('login-btn');
    loginButton.addEventListener('click', function() {
    createForm('Login');
});
// Function to create sign-up/login form
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
    emailInput.setAttribute('id', 'email');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('placeholder', 'Password');
    passwordInput.setAttribute('id', 'password');
    submitButton.setAttribute('type', 'submit');
    ubmitButton.textContent = type;
    closeButton.textContent = 'Close';
    
// Append elements to form
form.appendChild(emailInput);
 form.appendChild(passwordInput);
form.appendChild(submitButton);
form.appendChild(closeButton);
    
// Append form to body
document.body.appendChild(form);
// Position the form to the right of the sign-up button
const rect = signUpButton.getBoundingClientRect();
form.style.position = 'absolute';
form.style.top = (rect.top + window.pageYOffset) + 'px';
form.style.left = (rect.right + window.pageXOffset) + 'px';
// Close form when close button is clicked
closeButton.addEventListener('click', function() {
form.remove();
            });
    
    // Form submission handling
            form.addEventListener('submit', function(event) {
     // Prevent default form submission           
                event.preventDefault(); 
    
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
    });
    // Function to render products based on search results
    function renderProducts(filteredProducts) {
        const productGrid = document.querySelector('.product-grid');
        productGrid.innerHTML = '';
    
        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const productContainer = document.createElement('div');
                productContainer.classList.add('product-container');
    
                const productImage = document.createElement('img');
                productImage.src = product.imageUrl;
                productImage.alt = product.name;
const productName = document.createElement('p');
productName.textContent = product.name;
const stockStatus = document.createElement('p');
stockStatus.textContent = product.stock > 0 ? `Stock: ${product.stock}` : 'Out of stock';
    
// Create element for comments
const commentsSection = document.createElement('div');
commentsSection.classList.add('comments-section');
    
// Create input field for new comment
const commentInput = document.createElement('input');
commentInput.setAttribute('type', 'text');
commentInput.setAttribute('placeholder', 'Add a comment...');
ommentInput.classList.add('comment-input');
    
// Create button to post comment
const postButton = document.createElement('button');
postButton.textContent = 'Post';
postButton.classList.add('post-comment-button');
    
// Event listener for posting comment
postButton.addEventListener('click', function() {
postComment(this, product);
    });
commentsSection.appendChild(commentInput);
commentsSection.appendChild(postButton);
productContainer.appendChild(productImage);
productContainer.appendChild(productName);
productContainer.appendChild(stockStatus);
productContainer.appendChild(commentsSection);
productGrid.appendChild(productContainer);
      });
    } else {
    const resultMessage = document.createElement('p');
    resultMessage.textContent = 'No products found.';
    productGrid.appendChild(resultMessage);
    }
}
    
// Function to post a comment
function postComment(button, product) {
// Get the comment input field associated with this button
const commentInput = button.parentElement.querySelector('.comment-input');
const comment = commentInput.value.trim();
// Get the comments list container
const commentsSection = button.parentElement;
if (comment !== '') {
// Create a new comment element
const newComment = document.createElement('p');
newComment.textContent = comment;
// Append the new comment to the comments section
commentsSection.insertBefore(newComment, commentInput);
// Optionally, clear the comment input field after posting
    commentInput.value = '';
    } else {
     alert('Sorry!! We submitting this before Deadline. Upgrades coming up!!.');
    }
 }
// Fetch products and render them
fetch('https://end-of-phase-one-3.onrender.com/products')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    if (Array.isArray(data)) {
        products = data;
        renderProducts(products);
    } else if (typeof data === 'object' && data.hasOwnProperty('id')) {
        products = [data];
        renderProducts(products);
    } else {
        console.error('Unexpected data structure:', data);
    }
})
.catch(error => {
    console.error('Error fetching products:', error);
});
