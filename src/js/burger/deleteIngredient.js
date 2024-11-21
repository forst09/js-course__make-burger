import burgerIngredients from "./burgerIngredients";

export default function addIngredient(target, item, totalCost, totalTime, totalWeight, totalCalorie) {
    const name = item.getAttribute('data-name');
    let quantity = +item.querySelector('.quantity__input').value;

    if (quantity >= 1) {
        quantity === 1 ? target.disabled = true : target.disabled = false;

        const { time, weight, calorie, cost } = burgerIngredients[name];

        totalCost = +(totalCost - cost).toFixed(2);
        totalTime = +(totalTime - time).toFixed(2);
        totalWeight = +(totalWeight - weight).toFixed(2);
        totalCalorie = +(totalCalorie - calorie).toFixed(2);

        quantity--;
        item.querySelector('.quantity__input').value = quantity;

        const items = Array.from(document.querySelectorAll('.burger__item'));

        for (item of items) {
            if (item.classList.contains(`burger__item--${name}`)) {
                item.remove();
                break;
            }
            else {
                const calculateBottom = parseInt(item.style.bottom) - (document.querySelector(`.burger__item--${name}`).clientHeight / 3);

                item.style.bottom = `${calculateBottom}px`;
            }
        }

    }
    else {
        target.disabled = true;
    }

    return { totalCost, totalTime, totalWeight, totalCalorie };

}