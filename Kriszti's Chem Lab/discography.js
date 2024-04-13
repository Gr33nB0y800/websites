const vinylIcon = document.querySelector('.vinyl');
const albumTitle = document.querySelector('.album-title');
const previewAudio = document.getElementById('crystal-preview');
const preOrderBtn = document.querySelector('.pre-order-btn');

let isPlaying = false;

vinylIcon.addEventListener('mouseover', () => {
  vinylIcon.classList.add('spin');
});

vinylIcon.addEventListener('mouseout', () => {
  vinylIcon.classList.remove('spin');
});

vinylIcon.addEventListener('click', () => {
  if (!isPlaying) {
    previewAudio.play();
    isPlaying = true;
  } else {
    previewAudio.pause();
    isPlaying = false;
  }
});

albumTitle.addEventListener('click', () => {
  window.location.href = 'https://krisztichemlabstore.com';
});

preOrderBtn.addEventListener('click', () => {
  window.location.href = 'https://krisztichemlabstore.com';
});
