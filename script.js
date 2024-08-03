// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Example: Update loyalty points dynamically (replace with actual logic)
    document.getElementById('loyalty-points').textContent = '150';

    // Handle "Mark as Consumed" button clicks
    document.querySelectorAll('.consume-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = 'Consumed';
            button.disabled = true;
        });
    });

    // Handle "Order Now" button clicks
    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Order placed successfully!');
        });
    });
});
