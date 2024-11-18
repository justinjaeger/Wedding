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