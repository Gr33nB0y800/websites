const vinylIcon = document.querySelector('.vinyl');
const albumTitle = document.querySelector('.album-title');
const previewAudio = document.getElementById('crystal-preview');
const preOrderBtn = document.querySelector('.pre-order-btn');
const discographyTitle = document.getElementById('discography-title');
const crystalTitle = document.getElementById('crystal-title');
const crystalInfo = document.getElementById('crystal-info');
const preOrderBtnText = document.getElementById('pre-order-btn');

let isPlaying = false;
let currentLanguage = 'en';

const translations = {
  en: {
    discographyTitle: 'Discography',
    crystalTitle: 'Crystal',
    crystalInfo: 'Kriszti\'s debut album "Crystal" was written and recorded during her time in prison. The album provides a raw, personal look into her past battles with drug addiction and involvement in the drug trade.',
    preOrderBtnText: 'Pre-Order'
  },
  hu: {
    discographyTitle: 'Diszkográfia',
    crystalTitle: 'Crystal',
    crystalInfo: 'Kriszti debütáló albuma, a "Crystal" börtönbüntetése alatt íródott és rögzítették. Az album nyers, személyes betekintést nyújt múltbeli függőségi és kábítószer-kereskedelmi küzdelmeibe.',
    preOrderBtnText: 'Előrendelés'
  },
  ru: {
    discographyTitle: 'Дискография',
    crystalTitle: 'Кристалл',
    crystalInfo: 'Дебютный альбом Кристи "Кристалл" был написан и записан во время её тюремного заключения. Альбом предоставляет сырой, личный взгляд на её прошлую борьбу с наркозависимостью и участие в наркоторговле.',
    preOrderBtnText: 'Предзаказ'
  }
};

function updateContent(lang) {
  discographyTitle.textContent = translations[lang].discographyTitle;
  crystalTitle.textContent = translations[lang].crystalTitle;
  crystalInfo.textContent = translations[lang].crystalInfo;
  preOrderBtnText.textContent = translations[lang].preOrderBtnText;
}

const languageLinks = document.querySelectorAll('.language-selector .language-link');

languageLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const lang = e.target.dataset.lang;
    currentLanguage = lang;
    updateContent(lang);
    document.querySelectorAll('.language-selector .language-link').forEach(a => a.classList.remove('active'));
    e.target.classList.add('active');
  });
});

vinylIcon.addEventListener('click', () => {
  if (!isPlaying) {
    previewAudio.volume = 0.2;
    previewAudio.playbackRate = 0.8;
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
  e.preventDefault();
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

updateContent(currentLanguage);
