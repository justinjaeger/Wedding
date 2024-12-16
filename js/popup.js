setTimeout(() => {
    // if they already answered the piggy survey, don't show it again
    if (!localStorage.getItem('piggyChoice')) {
        localStorage.setItem('piggyChoosing', 'currently')
        document.getElementById('surveyModal').style.display = 'block';
    }
  }, 
  5000
);

setInterval(() => {
    // set a second, more annoying choice modal if they've already answered the first
    if (localStorage.getItem('piggyChoice') && !localStorage.getItem('piggyChoosing') && !localStorage.getItem('userIsSure') && !localStorage.getItem('userIsThinking')) {
      document.getElementById('secondSurveyModal').style.display = 'block';
      localStorage.setItem('userIsThinking', 'deeply')
    }
  },
  60000
)

// Disable submit button initially  
document.querySelector('.piggy-submit-btn').disabled = true;

// Enable submit button when radio is selected
document.querySelectorAll('input[name="piggy"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    document.querySelector('.piggy-submit-btn').disabled = false;
    localStorage.setItem('piggyChoice', e.target.value);
  });
});

function closeSurveyModal() {

  // Hide first modal
  document.getElementById('surveyModal').style.display = 'none';
  
  // Show thank you modal after 3 seconds
  setTimeout(() => {
    document.getElementById('piggyThankYouModal').style.display = 'block';
  }, 3000);
}
  
function closeModalById(id) {
  document.getElementById(id).style.display = 'none';
}

function openModalById(id) {
  document.getElementById(id).style.display = 'block';
}
