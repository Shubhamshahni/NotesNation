// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const year = document.getElementById('year').value;
    const college = document.getElementById('college').value;
    const phoneNumber = document.getElementById('phone-number').value;

    // Basic validation
    if (firstName && lastName && year && college && phoneNumber) {
        // If all fields are filled, redirect to NotesNation
        window.location.href = '.NotesNation.html';
    } else {
        alert('Please fill in all fields');
        window.location.href = '.login.html';
    }
}

// Add event listener when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const loginForm = document.querySelector('form');
    
    // Add submit event listener to the form
    loginForm.addEventListener('submit', handleSubmit);
}); 