document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('support-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default page refresh

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been received.`);
            form.reset(); // Clear the form fields
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
});
