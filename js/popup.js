setTimeout(() => {
    // if they already answered the piggy survey, don't show it again
    if (!localStorage.getItem('piggyChoice')) {
        document.getElementById('surveyModal').style.display = 'block';
    }
  }, 5000);

function closeModal() {
    document.getElementById('surveyModal').style.display = 'none';
}

// Disable submit button initially
document.querySelector('.piggy-submit-btn').disabled = true;

// Enable submit button when radio is selected
document.querySelectorAll('input[name="piggy"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    document.querySelector('.piggy-submit-btn').disabled = false;
    piggyChoice = e.target.value;
  });
});

function closeModal() {
    // Store the result
    localStorage.setItem('piggyChoice', piggyChoice);
    
    // Hide first modal
    document.getElementById('surveyModal').style.display = 'none';
    
    // Show thank you modal after 3 seconds
    setTimeout(() => {
      document.getElementById('piggyThankYouModal').style.display = 'block';
    }, 3000);
  }
  
  function closeThankYouModal() {
    document.getElementById('piggyThankYouModal').style.display = 'none';
  }