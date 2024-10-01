import animationTabs from "./animation/animation-tabs";

export default function tabs() {
    const tabBtns = document.querySelectorAll('[data-tab]');
    const tabWraps = document.querySelectorAll('.tab-wrap');
    if (tabBtns.length > 0 && tabWraps.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                tabBtns.forEach(item => {
                    item.classList.remove('tabs-btns__btn--active');
                });

                const tabId = btn.getAttribute('data-tab');
                const direction = btn.getAttribute('data-direction');

                [...tabBtns].find(btn => (btn.closest('.header') && btn.getAttribute('data-tab') === tabId)).classList.add('tabs-btns__btn--active');

                tabWraps.forEach(wrap => {
                    wrap.classList.remove('active', 'active--vertical', 'active--horizontal');
                    if (wrap.getAttribute('id') === tabId) {
                        wrap.classList.add('active');
                        animationTabs(wrap, direction);
                    }
                })
            })
        });

        tabBtns[1].click();
        // tabWraps[0].classList.add('active');
        // tabBtns[0].classList.add('tabs-btns__btn--active');
    }
}