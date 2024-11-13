import addIngredient from "./addIngredient";
import deleteIngredient from "./deleteIngredient";

export default function burger() {
    let totalCost = 0;
    let totalTime = 0;
    let totalWeight = 0;
    let totalCalorie = 0;

    // const burger = ['bunBottom'];

    const totalCostEl = document.querySelector('.summary__total');
    const totalTimeEl = document.querySelector('.summary__total-time');
    const totalWeightEl = document.querySelector('.summary__total-weight');
    const totalCalorieEl = document.querySelector('.summary__total-calorie');

    document.querySelector('.burger__item').style.zIndex = 0;

    const btnsPlus = document.querySelectorAll('.quantity__btn--plus');
    for (let btn of btnsPlus) {
        btn.addEventListener('click', () => {
            ({ totalCost, totalTime, totalWeight, totalCalorie } = addIngredient(btn.closest('.ingredients__card'), totalCost, totalTime, totalWeight, totalCalorie));

            totalCostEl.textContent = `$${parseFloat(totalCost).toFixed(2)}`;
            totalTimeEl.textContent = `${parseInt(totalTime)} min`;
            totalWeightEl.textContent = `${parseInt(totalWeight)} g`;
            totalCalorieEl.textContent = `${parseInt(totalCalorie)} kcal`;
        })
    }

    const btnsMinus = document.querySelectorAll('.quantity__btn--minus');
    for (let btn of btnsMinus) {
        if (btn.closest('.ingredients__card').querySelector('.quantity__input').value == 0) {
            btn.disabled = true;
        }

        btn.addEventListener('click', (e) => {
            ({ totalCost, totalTime, totalWeight, totalCalorie } = deleteIngredient(e.currentTarget, btn.closest('.ingredients__card'), totalCost, totalTime, totalWeight, totalCalorie));

            totalCostEl.textContent = `$${parseFloat(totalCost).toFixed(2)}`;
            totalTimeEl.textContent = `${parseInt(totalTime)} min`;
            totalWeightEl.textContent = `${parseInt(totalWeight)} g`;
            totalCalorieEl.textContent = `${parseInt(totalCalorie)} kcal`;
        })
    }
}