
async function fetchCategoryData(categoryName) {
    try {
        const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
        const data = await response.json();

        const category = data.categories.find(cat => cat.category_name === categoryName);

        if (category) {
            updateProductList(category.category_products);
        } else {
            console.error('Category not found');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function selectCategory(categoryName) {
    updateCategoryButtons(categoryName);
    fetchCategoryData(categoryName);
}

function updateProductList(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        productItem.innerHTML = `
            <div class="resbox">
            <div class="badge-text">${product.badge_text ? product.badge_text : ''}</div>
            <img src="${product.image}" alt="${product.title}">
            <div class="text">
            <div class="title">${product.title} </div>
            <span class="dot">&#183;</span>
            <div class="vendor">${product.vendor}</div>
            </div>
            <div class="pricebox">
            <div class="price">Rs  ${product.price}</div>
            <div class="compare-at-price"> ${product.compare_at_price}</div>
            <div class="percentage"> %50 off</div>
            </div>
            <button class="add-to-cart-btn">Add to Cart</button>
            </div>
        `;

        productList.appendChild(productItem);
    });
}
function updateCategoryButtons(selectedCategory) {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        if (button.innerText.trim() === selectedCategory) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}

window.onload = function() {
    selectCategory('Men');
};
