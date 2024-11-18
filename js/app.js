const {GALLERY_IMAGES} = require('./constants');

const gallery = document.querySelector('.gallery');

// Create and append gallery items
for (let i = 0; i < GALLERY_IMAGES.length; i++) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = GALLERY_IMAGES[i];
    img.alt = `Gallery image ${i + 1}`; // Adding alt text for accessibility
    
    galleryItem.appendChild(img);
    gallery.appendChild(galleryItem);
}

const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
let currentPage = 1;
const itemsPerPage = 6;

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    modalImg.src = imgSrc;
    modal.style.display = 'block';
    });
});

function closeModal() {
    modal.style.display = 'none';
}

const galleryCloseButton = document.getElementById('gallery-close-button');
galleryCloseButton.addEventListener('click', closeModal);


// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
    closeModal();
    }
});

function previousPage() {
    if (currentPage > 1) {
    currentPage--;
    updateGallery();
    }
}

function nextPage() {
    const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
    if (currentPage < totalPages) {
    currentPage++;
    updateGallery();
    }
}

const prevButton = document.getElementById('nav-button-prev');
const nextButton = document.getElementById('nav-button-next');
prevButton.addEventListener('click', previousPage);
nextButton.addEventListener('click', nextPage);


function updateGallery() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    galleryItems.forEach((item, index) => {
    if (index >= startIndex && index < endIndex) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
    });
}

// Initialize gallery
updateGallery();

// NEW SHIT

for(let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.animationDelay = Math.random() * 1000 + 'ms';
    document.body.appendChild(star);
  }

  // Simulate the <blink> tag that modern browsers no longer support
  setInterval(() => {
    const elements = document.getElementsByTagName('blink');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.visibility = 
        elements[i].style.visibility === 'hidden' ? 'visible' : 'hidden';
    }
  }, 1000);

// WEDDING COUNTDOWN
const daysUntilWedding = document.getElementById('days-until-wedding')

function getWeddingCountdown() {
    const weddingDate = new Date('2025-08-31T00:00:00');
    const now = new Date();
    
    // Get the difference in milliseconds
    const difference = weddingDate.getTime() - now.getTime();
    
    // Convert to days, hours, minutes, seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Create the countdown text
    return `in ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

// Update the countdown every second
function startCountdown() {
    // Function to update the countdown
    function updateCountdown() {
        const countdownText = getWeddingCountdown();
        daysUntilWedding.innerHTML = countdownText;
        // console.log(countdownText); // For console display
        // If you're using this in a webpage, you can update an element instead:
        // document.getElementById('countdown').textContent = countdownText;
    }
    
    // Update immediately
    updateCountdown();
    
    // Then update every second
    setInterval(updateCountdown, 1000);
}

// Start the countdown
startCountdown();

// show/hide rsvp form
const rsvpButton = document.getElementsByClassName('rsvp-button-y2k');
rsvpButton[0].addEventListener('click', () => {
    const rsvpForm = document.getElementById('rsvp');
    rsvpForm.style.display = 'flex';
})