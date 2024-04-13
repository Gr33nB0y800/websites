const vinylIcon = document.querySelector('.vinyl');
const albumTitle = document.querySelector('.album-title');
const previewAudio = document.getElementById('crystal-preview');
const preOrderBtn = document.querySelector('.pre-order-btn');

let isPlaying = false;

vinylIcon.addEventListener('click', () => {
  if (!isPlaying) {
    previewAudio.volume = 0.2; // Reduce volume
    previewAudio.playbackRate = 0.8; // Slightly distort the audio
    previewAudio.play();
    vinylIcon.classList.add('spin');
    isPlaying = true;
  } else {
    previewAudio.pause();
    vinylIcon.classList.remove('spin');
    isPlaying = false;
  }
});

albumTitle.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
});

preOrderBtn.addEventListener('click', () => {
  window.location.href = 'https://krisztichemlabstore.com';
});

// Style the pre-order button
preOrderBtn.style.backgroundColor = '#9c27b0';
preOrderBtn.style.color = 'white';
preOrderBtn.style.border = 'none';
preOrderBtn.style.padding = '0.5rem 1rem';
preOrderBtn.style.fontSize = '1.2rem';
preOrderBtn.style.borderRadius = '4px';
preOrderBtn.style.cursor = 'pointer';
preOrderBtn.style.transition = 'background-color 0.3s ease';

preOrderBtn.addEventListener('mouseover', () => {
  preOrderBtn.style.backgroundColor = '#8e44ad';
});

preOrderBtn.addEventListener('mouseout', () => {
  preOrderBtn.style.backgroundColor = '#9c27b0';
});
