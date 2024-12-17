import { gsap } from "gsap";
import calcBurgerValues from "./calcBurgerValues";
import pasteWarning from "./pasteWarning";

export default function addIngredient(item, totalCost, totalTime, totalWeight, totalCalorie) {

    const burgerEl = document.querySelector('.burger');
    const name = item.getAttribute('data-name');
    let quantity = +item.querySelector('.quantity__input').value;

    ({ totalCost, totalTime, totalWeight, totalCalorie } = calcBurgerValues(name, totalCost, totalTime, totalWeight, totalCalorie, 'plus'));

    quantity++;
    item.querySelector('.quantity__input').value = quantity;

    item.querySelector('.quantity__btn--minus').disabled = false;

    function pasteIngredient(name) {
        const prevElement = burgerEl.querySelector('.burger__item');

        const prevItemY = (burgerEl.getBoundingClientRect().bottom + window.scrollY) - (prevElement.getBoundingClientRect().bottom + window.scrollY) + prevElement.clientHeight;
        // const prevItemY = burgerEl.getBoundingClientRect().bottom - prevElement.getBoundingClientRect().bottom + prevElement.clientHeight;
        const prevZIndex = prevElement.style.zIndex;

        const element = document.createElement('div');
        element.classList.add('burger__item');

        // console.log(prevElement.getBoundingClientRect().top, prevElement.getBoundingClientRect().top + window.scrollY);

        if (prevElement.getBoundingClientRect().top + window.scrollY < 0) {
            console.log('too much')
            pasteWarning(burgerEl);
        }

        switch (name) {
            case 'onion': {
                element.innerHTML = `
                    <img class="img__img" src="/img/burger/${name}.png" alt=${name} />
                    <img class="img__img" src="/img/burger/${name}.png" alt=${name} />
                    <img class="img__img" src="/img/burger/${name}.png" alt=${name} />`;
                break;
            }
            case 'tomato': {
                element.innerHTML = `
                    <img class="img__img" src="/img/burger/${name}.png" alt=${name} />
                    <img class="img__img" src="/img/burger/${name}.png" alt=${name} />`;
                break;
            }
            case 'cucumber': {
                element.innerHTML = `
                    <img class="img__img" src="/img/burger/${name}.png" alt=${name} />
                    <img class="img__img" src="/img/burger/${name}.png" alt=${name} />
                    <img class="img__img" src="/img/burger/${name}.png" alt=${name} />`;
                break;
            }
            default: {
                element.innerHTML = `<img class="img__img" src="/img/burger/${name}.png" alt=${name} />`;
                break;
            }
        }

        let offset = 0;

        if (prevElement.classList.contains('burger__item--salad')) {
            offset = 40;
        }
        else if (prevElement.classList.contains('burger__item--cutlet') || prevElement.classList.contains('burger__item--mayo') || prevElement.classList.contains('burger__item--bunMiddle') || prevElement.classList.contains('burger__item--bottom-bun')) {
            offset = 20;
        }

        element.style.bottom = `${prevItemY - offset}px`;
        element.style.zIndex = +prevZIndex + 1;

        element.classList.add(`burger__item--${name}`);

        burgerEl.prepend(element);

        let toY = '50%';

        switch (name) {
            case ('cheese'): {
                toY = '75%';
                break;
            }
            case ('bunTop'): {
                toY = '25%';
                break;
            }
            case ('mayo'): {
                toY = '65%';
                break;
            }
        }

        gsap.fromTo(element, {
            y: -200,
            opacity: 0,
            duration: 0.7
        }, {
            y: toY,
            opacity: 1
        })
    }

    pasteIngredient(name);

    return { totalCost, totalTime, totalWeight, totalCalorie };

}