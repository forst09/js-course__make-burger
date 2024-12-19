import calcBurgerValues from "./calcBurgerValues";

export default function addIngredient(target, item, totalCost, totalTime, totalWeight, totalCalorie, btnsPlus) {
    const name = item.getAttribute('data-name');
    let quantity = +item.querySelector('.quantity__input').value;

    if (quantity >= 1) {
        quantity === 1 ? target.disabled = true : target.disabled = false;

        ({ totalCost, totalTime, totalWeight, totalCalorie } = calcBurgerValues(name, totalCost, totalTime, totalWeight, totalCalorie, 'minus'));

        quantity--;
        item.querySelector('.quantity__input').value = quantity;

        const items = Array.from(document.querySelectorAll('.burger__item'));

        const lastIngredient = document.querySelector('.burger__item');
        const lastIngredientBottomInitial = parseInt(lastIngredient.style.bottom);

        const prevItem = document.querySelector(`.burger__item--${name}`).previousElementSibling;
        let calculateBottom;

        if (prevItem) {
            calculateBottom = parseInt(prevItem.style.bottom) - parseInt(document.querySelector(`.burger__item--${name}`).style.bottom);
        }

        for (item of items) {
            if (item.classList.contains(`burger__item--${name}`)) {
                item.remove();
                break;
            }
            else {
                item.style.bottom = `${parseInt(item.style.bottom) - calculateBottom}px`
            }
        }

        const lastIngredientBottomNew = parseInt(lastIngredient.style.bottom);

        if (lastIngredient.getBoundingClientRect().top + window.scrollY + (lastIngredientBottomInitial - lastIngredientBottomNew) > 0 && document.querySelector('.warning')) {
            document.querySelector('.warning').remove();
        }

    }
    else {
        target.disabled = true;
    }

    if (name === 'bunTop') {
        for (const btn of btnsPlus) {
            btn.disabled = false;
        }
    }

    return { totalCost, totalTime, totalWeight, totalCalorie };

}