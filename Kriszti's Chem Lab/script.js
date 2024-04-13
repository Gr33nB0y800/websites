const siteTitle = document.getElementById('site-title');
const heroTitle = document.getElementById('hero-title');
const heroText = document.getElementById('hero-text');
const aboutTitle = document.getElementById('about-title');
const aboutText = document.getElementById('about-text');
const aboutText2 = document.getElementById('about-text-2');

const languageLinks = document.querySelectorAll('.language-selector .language-link');
const navigationLinks = document.querySelectorAll('nav .nav-link');

const translations = {
  en: {
    siteTitle: 'Kriszti\'s Chem Lab',
    heroTitle: 'Psychedelic Rock',
    heroText: 'Kriszti\'s Chem Lab takes you on a trippy journey through experimental soundscapes.',
    aboutTitle: 'About Kriszti\'s Chem Lab',
    aboutText: 'Kriszti White, the mastermind behind Kriszti\'s Chem Lab, is a Hungarian musician who was born on December 5, 1971 in Salgótarján, Hungary. She started out as a chemistry teacher in Monor before becoming embroiled in legal troubles related to drug crimes. Although the charges against her were ultimately dropped, she did serve prison time.',
    aboutText2: 'During her incarceration, Kriszti began writing her debut album "Crystal" which explores her past struggles with addiction, drug dealing, and regrets. Since her release, Kriszti has focused on her music career, specializing in a psychedelic rock sound that is highly experimental.'
  },
  hu: {
    siteTitle: 'Kriszti Kémiai Laboratóriuma',
    heroTitle: 'Pszichedelikus Rock',
    heroText: 'Kriszti Kémiai Laboratóriuma magával ragadó, kísérleti hangzásvilágba kalauzol.',
    aboutTitle: 'Kriszti Kémiai Laboratóriumáról',
    aboutText: 'Kriszti White, Kriszti Kémiai Laboratóriumának mestere, 1971. december 5-én született a magyarországi Salgótarjánban. Kémiát tanított Monoron, mielőtt jogi problémákba keveredett a kábítószer-bűnözés miatt. Noha végül ejtették a vádakat ellene, börtönbüntetést kellett letöltenie.',
    aboutText2: 'Bebörtönzése alatt Kriszti megírta debütáló lemezét, a "Crystal"-t, amely múltbeli függőségi és kábítószer-kereskedői küzdelmeit, valamint megbánását tárja fel. Szabadulása óta Kriszti pszichedelikus rock stílusú, kísérleti zenéjére összpontosít.'
  },
  ru: {
    siteTitle: 'Химическая Лаборатория Кристи',
    heroTitle: 'Психоделический Рок',
    heroText: 'Химическая Лаборатория Кристи уносит вас в захватывающее путешествие экспериментальных звуковых ландшафтов.',
    aboutTitle: 'О Химической Лаборатории Кристи',
    aboutText: 'Кристи Уайт, мастер за Химической Лабораторией Кристи, родилась 5 декабря 1971 года в венгерском городе Шалготарьян. Она начинала как учитель химии в Моноре, прежде чем попала в юридические проблемы, связанные с наркопреступностью. Хотя обвинения против неё в итоге были сняты, ей пришлось отбывать тюремное заключение.',
    aboutText2: 'Во время заключения Кристи начала писать свой дебютный альбом "Crystal", который исследует её прошлые битвы с зависимостью, наркоторговлей и сожалениями. С момента освобождения Кристи сосредоточилась на своей музыкальной карьере, специализируясь на психоделическом рок-звучании, которое очень экспериментальное.'
  }
};

let currentLanguage = 'en';

function updateContent(lang) {
  siteTitle.textContent = translations[lang].siteTitle;
  heroTitle.textContent = translations[lang].heroTitle;
  heroText.textContent = translations[lang].heroText;
  aboutTitle.textContent = translations[lang].aboutTitle;
  aboutText.textContent = translations[lang].aboutText;
  aboutText2.textContent = translations[lang].aboutText2;
}

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

navigationLinks.forEach(link => {
  link.style.color = 'white';
});

updateContent(currentLanguage);
