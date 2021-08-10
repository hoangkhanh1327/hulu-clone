const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

const tabBtns = document.querySelectorAll('.tab-btn');
const tabs = document.querySelectorAll('.tab');
const welcome = document.getElementById('welcome');

const bgUrls = [
    'linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%), url(./assets/img/live-sports.jpg)',
    'linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%), url(./assets/img/breaking-news.jpg)',
    'linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%), url(./assets/img/biggest-event.jpg)'
];

const mobileBgUrls = [
    'linear-gradient(rgba(0, 0, 0, 0.8) -39.59%, rgba(0, 0, 0, 0) 117.14%), url(./assets/img/live-sports-small.jpg)',
    'linear-gradient(rgba(0, 0, 0, 0.8) -39.59%, rgba(0, 0, 0, 0) 117.14%), url(./assets/img/breaking-news-small.jpg)',
    'linear-gradient(rgba(0, 0, 0, 0.8) -39.59%, rgba(0, 0, 0, 0) 117.14%), url(./assets/img/biggest-event-small.jpg)'
];

const openModal = () => {
    modal.style.display = 'block';
}

const closeModal = () => {
    modal.style.display = 'none';
}

const outsideClick = (e) => {
    if (e.target == modal) {
        closeModal();
    }
}

const changeBgImg = (bgId) => {
    let screenWidth = window.screen.width;

    if (screenWidth > 768) {
        welcome.style.backgroundImage = bgUrls[bgId];
    } else {
        welcome.style.backgroundImage = mobileBgUrls[bgId];
    }

}

const toogleTab = (tabId) => {
    let tab = document.getElementById(tabId);
    tabs.forEach((tab) => tab.classList.add('inactive'));
    tab.classList.remove('inactive');
}

loginBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);

tabBtns.forEach((btn) => {
    const tabId = btn.getAttribute('data-target');
    const bgId = btn.getAttribute('data-bg');
    btn.addEventListener('click', () => {
        tabBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        toogleTab(tabId);
        changeBgImg(bgId);
    })
});