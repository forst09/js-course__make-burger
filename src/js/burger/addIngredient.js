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

    function pasteIngredient(ingredient) {
        const element = document.createElement('div');
        element.classList.add('burger__item');

        const prevItemY = burgerEl.getBoundingClientRect().bottom - burgerEl.querySelector('.burger__item').getBoundingClientRect().bottom + burgerEl.querySelector('.burger__item').clientHeight;
        const prevZIndex = burgerEl.querySelector('.burger__item').style.zIndex;

        console.log(burgerEl.getBoundingClientRect().bottom);
        console.log(burgerEl.querySelector('.burger__item').getBoundingClientRect().bottom);
        console.log(burgerEl.querySelector('.burger__item').clientHeight);

        console.log(prevItemY, prevZIndex, +prevZIndex + 1);

        element.style.bottom = `${prevItemY}px`;
        element.style.zIndex = +prevZIndex + 1;
        element.innerHTML = `<img class="img__img" src="/img/burger/${name}.png" alt=${name} />`;

        switch (ingredient) {
            case 'cutlet': {
                element.classList.add('burger__item--cutlet');
                break;
            }
            case 'mayo': {
                element.classList.add('burger__item--mayo');
                break;
            }
        };
        burgerEl.prepend(element);

        gsap.from(element, {
            y: -200,
            opacity: 0,
            duration: 0.7
        })
    }

    pasteIngredient(name);

    return { totalCost, totalTime, totalWeight, totalCalorie };

}