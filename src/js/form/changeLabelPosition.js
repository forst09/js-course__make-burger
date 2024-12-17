export default function changeLabelPosition() {
    const inputs = document.querySelectorAll('.form__input');
    for (const input of inputs) {
        if (input.value !== '') {
            input.closest('.form__item').querySelector('.form__label').classList.add('active');
        }

        input.addEventListener('focus', () => {
            input.closest('.form__item').querySelector('.form__label').classList.add('active');
        })

        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.closest('.form__item').querySelector('.form__label').classList.remove('active');
            }

        })
    }
}