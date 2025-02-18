// Get DOM elements
const searchInput = document.querySelector('.search-box input');
const searchSelect = document.querySelector('.custom-select select');
const noteCards = document.querySelectorAll('.note-card');

// Function to filter notes based on search input and category
function filterNotes() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = searchSelect.value.toLowerCase();

    noteCards.forEach(card => {
        const title = card.querySelector('p').textContent.toLowerCase();
        const link = card.querySelector('a').getAttribute('href').toLowerCase();
        
        // Check if the card matches both search term and category
        const matchesSearch = title.includes(searchTerm) || link.includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || 
            (selectedCategory === 'notes' && link.includes('.html')) ||
            (selectedCategory === 'books' && link.includes('book')) ||
            (selectedCategory === 'assignments' && link.includes('assignment')) ||
            (selectedCategory === 'inp' && link.includes('imp'));

        // Show/hide card based on matches
        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add event listeners
searchInput.addEventListener('input', filterNotes);
searchSelect.addEventListener('change', filterNotes);

// Add event listener for search button
const searchButton = document.querySelector('.search-box button');
searchButton.addEventListener('click', filterNotes);

// Initialize search on page load
filterNotes();
