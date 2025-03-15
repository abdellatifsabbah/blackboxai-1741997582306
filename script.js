document.addEventListener('DOMContentLoaded', function() {
    const trackButton = document.querySelector('button:first-of-type');
    const shortenButton = document.querySelector('button:last-of-type');

    // Track clicks button handler
    trackButton.addEventListener('click', function() {
        window.location.href = 'https://www.shorturl.at/url-total-clicks.php';
    });

    // Shorten URL button handler
    shortenButton.addEventListener('click', function() {
        window.location.href = 'https://www.shorturl.at/';
    });
});
