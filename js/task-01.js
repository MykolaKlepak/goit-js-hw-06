const categoriesList = document.querySelector('#categories');

const children = Array.from(categoriesList.children);
console.log("Number of categories: ", children.length);
    
children.forEach((value, index, array) => {

    const liChildren = Array.from(value.children);
    console.log("Category: ", liChildren[0].textContent);

    const itemList = liChildren[1];
    console.log("Elements: ", Array.from(itemList.children).length);
}) 

