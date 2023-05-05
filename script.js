// Search Library of Congress

// Global variables

const form = document.querySelector('#search-form');

// Form Submit 
form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form from submitting normally
    
    const searchQuery = document.querySelector('#search-query').value;
    const searchFormat = document.querySelector('#search-format').value;
    
    const searchUrl = 'https://www.loc.gov/' + searchFormat + '/?q=' + encodeURIComponent(searchQuery);
    window.location.replace(searchUrl);
});

