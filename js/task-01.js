const categoriesRef = document.querySelector('#categories');
console.log('Number of categories:', categoriesRef.children.length);

const itemRef = document.querySelectorAll('.item');

console.log('Category:', itemRef[0].firstElementChild.textContent);
console.log('Elements:', itemRef[0].lastElementChild.children.length);

console.log('Category:', itemRef[1].firstElementChild.textContent);
console.log('Elements:', itemRef[1].lastElementChild.children.length);

console.log('Category:', itemRef[2].firstElementChild.textContent);
console.log('Elements:', itemRef[2].lastElementChild.children.length);