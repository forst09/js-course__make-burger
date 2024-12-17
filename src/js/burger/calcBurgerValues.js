import burgerIngredients from "./burgerIngredients";

export default function calcBurgerValues(name, totalCost, totalTime, totalWeight, totalCalorie, operation) {
    const { time, weight, calorie, cost } = burgerIngredients[name];

    if (operation === 'plus') {
        totalCost = +(totalCost + cost).toFixed(2);
        totalTime = +(totalTime + time).toFixed(2);
        totalWeight = +(totalWeight + weight).toFixed(2);
        totalCalorie = +(totalCalorie + calorie).toFixed(2);
    }
    else {
        totalCost = +(totalCost - cost).toFixed(2);
        totalTime = +(totalTime - time).toFixed(2);
        totalWeight = +(totalWeight - weight).toFixed(2);
        totalCalorie = +(totalCalorie - calorie).toFixed(2);
    }


    return { totalCost, totalTime, totalWeight, totalCalorie };
}