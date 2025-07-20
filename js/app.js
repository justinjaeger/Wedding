// Wrap everything in a function that waits for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {

    /**
     * GALLERY IMAGES
     */
    const GALLERY_IMAGES = [
        '../assets/images/1.jpeg',
        '../assets/images/2.jpeg',
        '../assets/images/3.jpeg',
        '../assets/images/4.jpeg',
        '../assets/images/5.jpeg',
        '../assets/images/6.jpeg',
        '../assets/images/7.jpeg',
        '../assets/images/8.jpeg',
        '../assets/images/9.jpg',
        '../assets/images/10.jpg',
        '../assets/images/11.jpg',
        '../assets/images/12.jpg',
        '../assets/images/13.jpg',
        '../assets/images/14.jpg',
        '../assets/images/15.jpg',
        '../assets/images/16.jpg',
        '../assets/images/17.jpg',
        '../assets/images/19.jpg',
        '../assets/images/20.jpg',
        '../assets/images/21.jpg',
        '../assets/images/22.jpg',
        '../assets/images/23.jpg',
        '../assets/images/24.jpg',
        '../assets/images/25.jpg',
    ]

    
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















    /**
     * STARS
     */
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














    /**
     * WEDDING COUNTDOWN
     */
    const daysUntilWedding = document.getElementById('days-until-wedding');

    // Check if element exists
    if (!daysUntilWedding) {
        console.error('Could not find countdown element');
        return;
    }

    function getWeddingCountdown() {
        const weddingDate = new Date('2025-08-31T16:30:00');
        const now = new Date();
        
        const difference = weddingDate.getTime() - now.getTime();
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
    }

    function updateCountdown() {
        try {
            const countdownText = getWeddingCountdown();
            daysUntilWedding.textContent = countdownText; // Changed from innerHTML to textContent for safety
        } catch (error) {
            console.error('Error updating countdown:', error);
        }
    }

    // Initial update
    updateCountdown();

    // Update every second
    setInterval(updateCountdown, 1000);
















    /**
     * RSVP FORM
     */
    const rsvpButton = document.querySelector('.rsvp-button-y2k');
    const rsvpForm = document.getElementById('rsvp');

    if (!rsvpButton || !rsvpForm) {
        console.error('RSVP elements not found', {
            buttonFound: !!rsvpButton,
            formFound: !!rsvpForm
        });
        return;
    }

    rsvpButton.addEventListener('click', () => {
        try {
            rsvpForm.style.display = rsvpForm.style.display === 'none' || rsvpForm.style.display === '' 
                ? 'flex' 
                : 'none';
        } catch (error) {
            console.error('Error toggling RSVP form:', error);
        }
    });










    

    /**
     * HEARTS ANIMATION
     */

    function createWhale() {
        const whale = document.createElement('div');
        const goingLeft = true;
        whale.className = `whale ${goingLeft ? 'swimming-left' : 'swimming-right'}`;
        whale.style.top = Math.random() * (window.innerHeight - 100) + 'px';
        
        if (goingLeft) {
          whale.style.backgroundImage = "url('../assets/images/whale-closed.png')";
        } else {
          whale.style.backgroundImage = "url('../assets/images/whale-closed.png')";
        }
        
        document.body.appendChild(whale);
    
        let isEating = false;
        let isRemoved = false; // Track if whale has been removed
        
        const checkHearts = setInterval(() => {
          if (isEating || isRemoved) return;
          
          const whaleRect = whale.getBoundingClientRect();
          
          // Check if whale has moved off screen
          if (whaleRect.right < 0) {
            isRemoved = true;
            clearInterval(checkHearts);
            whale.remove();
            return;
          }
          
          const hearts = document.querySelectorAll('.heart:not(.eaten)');
          let nearbyHeart = false;
          let closestHeart = null;
          let closestDistance = Infinity;
          
          // Rest of your existing checkHearts code...
          hearts.forEach(heart => {
            const heartRect = heart.getBoundingClientRect();
            const distance = Math.abs((whaleRect.left + whaleRect.width/2) - (heartRect.left + heartRect.width/2));
            
            if (distance < closestDistance) {
              closestDistance = distance;
              closestHeart = heart;
            }
            
            if (distance < 150 && !isColliding(whaleRect, heartRect)) {
              nearbyHeart = true;
            }
            
            if (isColliding(whaleRect, heartRect) && !isEating) {
              isEating = true;
              
              whale.style.backgroundImage = goingLeft ? 
                "url('../assets/images/whale-open.png')" : 
                "url('../assets/images/whale-open.png')";
              
              setTimeout(() => {
                whale.style.backgroundImage = goingLeft ? 
                  "url('../assets/images/whale-closed.png')" : 
                  "url('../assets/images/whale-closed.png')";
                heart.classList.add('eaten');
                
                setTimeout(() => {
                  isEating = false;
                  if (document.querySelectorAll('.heart:not(.eaten)').length > 0) {
                    whale.style.backgroundImage = goingLeft ? 
                      "url('../assets/images/whale-open.png')" : 
                      "url('../assets/images/whale-open.png')";
                  }
                }, 500);
              }, 200);
            }
          });
          
          if (!isEating) {
            if (nearbyHeart) {
              whale.style.backgroundImage = goingLeft ? 
                "url('../assets/images/whale-open.png')" : 
                "url('../assets/images/whale-open.png')";
            } else {
              whale.style.backgroundImage = goingLeft ? 
                "url('../assets/images/whale-closed.png')" : 
                "url('../assets/images/whale-closed.png')";
            }
          }
        }, 50);
    
        whale.addEventListener('animationend', () => {
          if (!isRemoved) {  // Only remove if not already removed
            isRemoved = true;
            clearInterval(checkHearts);
            whale.remove();
          }
        });
    }
    
      function isColliding(rect1, rect2) {
        return !(rect1.right < rect2.left || 
                 rect1.left > rect2.right || 
                 rect1.bottom < rect2.top || 
                 rect1.top > rect2.bottom);
      }
    
      function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '💗';
        
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.bottom = '-20px';
        
        const size = 16 + Math.random() * 32;
        heart.style.fontSize = size + 'px';
        
        const duration = 3 + Math.random() * 3;
        heart.style.animation = `floatHearts ${duration}s linear`;
        
        document.body.appendChild(heart);
        
        heart.addEventListener('animationend', () => {
          heart.remove();
        });
      }
    
    let whaleInterval;
    let heartInterval;
    
    // Clear any existing intervals before setting new ones
    function startAnimation() {
        // Clear existing intervals if they exist
        if (heartInterval) clearInterval(heartInterval);
        if (whaleInterval) clearInterval(whaleInterval);
        
        // Remove any existing whales and hearts
        document.querySelectorAll('.whale').forEach(whale => whale.remove());
        document.querySelectorAll('.heart').forEach(heart => heart.remove());
        
        // Create hearts periodically
        heartInterval = setInterval(createHeart, 300);
    
        // Create whales periodically
        whaleInterval = setInterval(createWhale, 8000);
    
        // Initial hearts and whale
        for(let i = 0; i < 10; i++) {
            setTimeout(createHeart, i * 100);
        }
        createWhale();
    }
    
    // Start the animation when the page loads
    startAnimation();








    /**
     * POPUP
     */

    setTimeout(() => {
        // if they already answered the piggy survey, don't show it again
        if (!localStorage.getItem('piggyChoice')) {
            document.getElementById('surveyModal').style.display = 'block';
        }
      }, 5000);
    
    // Disable submit button initially
    document.querySelector('.piggy-submit-btn').disabled = true;
    
    let piggyChoice = '';
    
    // Enable submit button when radio is selected
    document.querySelectorAll('input[name="piggy"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        document.querySelector('.piggy-submit-btn').disabled = false;
        piggyChoice = e.target.value;
      });
    });
    
    window.closePiggy = function() {
        // Store the result
        localStorage.setItem('piggyChoice', piggyChoice);
        
        // Hide first modal
        document.getElementById('surveyModal').style.display = 'none';
        
        // Show thank you modal after 3 seconds
        setTimeout(() => {
          document.getElementById('piggyThankYouModal').style.display = 'block';
        }, 3000);
    }
    
    window.closeThankYouModal = function() {
        document.getElementById('piggyThankYouModal').style.display = 'none';
    }









    /**
     * TOP TABS
     */

    // Tab switching logic
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => {
                t.classList.remove('active')
            });
            document.querySelectorAll('.tab-panel').forEach(p => {
                p.classList.remove('active')
            });
            tab.classList.add('active');
            const panelId = tab.getAttribute('data-tab');
            const panel = document.getElementById(panelId);
            // Only add class if panel exists
            if (panel) {
                panel.classList.add('active');
            } else {
                console.warn(`Panel with id "${panelId}" not found`);
            }
        });
    });

    // Create sparkles
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        document.querySelector('.content').appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1500);
    }

    // Add sparkles periodically
    setInterval(createSparkle, 300);

});