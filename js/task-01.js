const categoryAll = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoryAll.length}`);

categoryAll.forEach(elem => {
    console.log(`Category: ${elem.querySelector('h2').textContent}`);
    console.log(`Elements: ${elem.querySelector('ul').children.length}`);
});