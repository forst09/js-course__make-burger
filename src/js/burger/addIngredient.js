import burgerIngredients from "./burgerIngredients";

export default function addIngredient(item, totalCost, totalTime, totalWeight, totalCalorie) {
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

    return { totalCost, totalTime, totalWeight, totalCalorie };

}