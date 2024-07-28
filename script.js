function addToCart(product) {
    alert(product + " has been added to your cart.");
}

document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('We will give you a better service and Deliver the Products');
    this.reset();
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you soon.');
    this.reset();
});
