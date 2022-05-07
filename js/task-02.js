const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const elements = ingredients.map((ingredient) => {
    const el = document.createElement('li');
    el.textContent = `${ingredient}`
    return el;
});
ingredientsRef.append(...elements);