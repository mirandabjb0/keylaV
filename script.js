// When the Yes button is clicked, switch from Scene 1 to Scene 2
document.getElementById('yesButton').addEventListener('click', function() {
  document.getElementById('scene1').style.display = 'none';
  document.getElementById('scene2').style.display = 'block';
});

// When the No button is clicked, show the Wrong Choice popup and shake the screen
document.getElementById('noButton').addEventListener('click', function() {
  const wrongPopup = document.getElementById('wrongPopup');
  wrongPopup.style.display = 'flex';

  // Restart the wrong popup animation
  const wrongPopupContent = wrongPopup.querySelector('.popup-content');
  wrongPopupContent.style.animation = 'none';
  void wrongPopupContent.offsetWidth; // Trigger reflow to restart animation
  wrongPopupContent.style.animation = 'popupAnimation 0.5s forwards';

  // Immediately add the shake effect to the entire screen (body)
  document.body.classList.add('shake');
  // Remove the shake class after the animation duration (0.5 seconds)
  setTimeout(function() {
    document.body.classList.remove('shake');
  }, 500);
});

// Close the Wrong Choice popup when its close button is clicked
document.getElementById('closeWrongPopup').addEventListener('click', function() {
  document.getElementById('wrongPopup').style.display = 'none';
});
