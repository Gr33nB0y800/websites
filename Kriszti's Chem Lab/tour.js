const siteTitle = document.getElementById('site-title');
const tourTitle = document.getElementById('tour-title');
const ticketsLinks = document.querySelectorAll('.tickets-link');

const translations = {
  en: {
    siteTitle: "Kriszti's Chem Lab",
    tourTitle: "Upcoming Tour Dates",
    ticketsLinkText: "Get Tickets"
  },
  hu: {
    siteTitle: "Kriszti Kémiai Laboratóriuma",
    tourTitle: "Közelgő turné dátumok",
    ticketsLinkText: "Jegyek Vásárlása"
  },
  ru: {
    siteTitle: "Химическая Лаборатория Кристи",
    tourTitle: "Предстоящие даты тура",
    ticketsLinkText: "Купить билеты"
  }
};

let currentLanguage = 'en';

function updateContent(lang) {
  siteTitle.textContent = translations[lang].siteTitle;
  tourTitle.textContent = translations[lang].tourTitle;
  ticketsLinks.forEach(link => {
    link.textContent = translations[lang].ticketsLinkText;
  });
}

function redirectToTicketmaster(e) {
  e.preventDefault();
  window.open('https://www.ticketmaster.com/', '_blank');
}

ticketsLinks.forEach(link => {
  link.addEventListener('click', redirectToTicketmaster);
});

// Assuming you have language links to switch languages like in the provided HTML
const languageLinks = document.querySelectorAll('.language-selector .language-link');
languageLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const lang = e.target.dataset.lang;
    currentLanguage = lang;
    updateContent(lang);
    // Add/remove 'active' class for language links as needed
    languageLinks.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
  });
});

// Initial content update
updateContent(currentLan
  guage);
