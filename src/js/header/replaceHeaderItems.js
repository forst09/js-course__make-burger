export default function replaceHeaderItems() {
    if (window.innerWidth > 1024) {
        const header = document.querySelector('.header');
        if (header) {
            header.querySelector('.header__left').append(header.querySelector('.header__tabs'));
            header.querySelector('.header__right').append(header.querySelector('.header__call'));
            header.querySelector('.header__right').append(header.querySelector('.header__phone'));
            header.querySelector('.header__right').append(header.querySelector('.header__user'));
        }
    }
}