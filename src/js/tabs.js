export default function tabs() {
    const tabBtns = document.querySelectorAll('[data-tab]');
    const tabWraps = document.querySelectorAll('.tab-wrap');
    if (tabBtns.length > 0 && tabWraps.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                tabBtns.forEach(item => {
                    item.classList.remove('btn--active');
                });
                
                const tabId = btn.getAttribute('data-tab');
                
                [...tabBtns].find(btn => (btn.closest('.header') && btn.getAttribute('data-tab') === tabId)).classList.add('btn--active');

                tabWraps.forEach(wrap => {
                    wrap.classList.remove('active');
                    if (wrap.getAttribute('id') === tabId) {
                        wrap.classList.add('active');
                    }
                })
            })
        });

        tabWraps[1].classList.add('active');
        tabBtns[1].classList.add('tabs-btns__btn--active');
    }
}