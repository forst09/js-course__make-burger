import burgerIngredients from "./burgerIngredients";
import { gsap } from "gsap";

export default function addIngredient(item, totalCost, totalTime, totalWeight, totalCalorie) {

    const burgerEl = document.querySelector('.burger');
    const name = item.getAttribute('data-name');
    let quantity = +item.querySelector('.quantity__input').value;

    const { time, weight, calorie, cost } = burgerIngredients[name];

    totalCost = +(totalCost + cost).toFixed(2);
    totalTime = +(totalTime + time).toFixed(2);
    totalWeight = +(totalWeight + weight).toFixed(2);
    totalCalorie = +(totalCalorie + calorie).toFixed(2);

    quantity++;
    item.querySelector('.quantity__input').value = quantity;

    item.querySelector('.quantity__btn--minus').disabled = false;

    function pasteIngredient(name) {
        const prevElement = burgerEl.querySelector('.burger__item');

        const prevItemY = burgerEl.getBoundingClientRect().bottom - prevElement.getBoundingClientRect().bottom + prevElement.clientHeight;
        const prevZIndex = prevElement.style.zIndex;

        const element = document.createElement('div');
        element.classList.add('burger__item');

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