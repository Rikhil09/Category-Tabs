# Category Tabs Project

This project is a simple product display page where users can select different categories (Men, Women, Kids) to view relevant products. The project is built using HTML, CSS, and JavaScript, fetching product data from a remote JSON file.

## Features

- Display products dynamically based on the selected category.
- Highlight the selected category button.
- Handle errors gracefully when fetching data.

## Getting Started

### Prerequisites

To run this project locally, you need a basic understanding of HTML, CSS, and JavaScript. You also need a modern web browser.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/category-tabs-project.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd category-tabs-project
    ```

3. **Open `index.html` in your web browser:**

    You can simply open the `index.html` file in your preferred web browser to view the project.

### Usage

- Open the project in a web browser.
- Click on the category buttons (Men, Women, Kids) to view products related to the selected category.

### Project Structure

- `index.html`: The main HTML file that contains the structure of the web page.
- `style.css`: The CSS file that contains the styling for the web page.
- `script.js`: The JavaScript file that contains the logic for fetching and displaying the product data.

### Code Explanation

#### HTML (`index.html`)

The HTML file sets up the basic structure of the page with a container, heading, category buttons, and a product list container.

#### CSS (`style.css`)

The CSS file includes styles for the container, heading, category buttons, product items, and other elements. It also includes the `.selected` class to highlight the selected category button.

#### JavaScript (`script.js`)

The JavaScript file contains functions to:
- Fetch product data from a remote JSON file.
- Update the product list based on the selected category.
- Highlight the selected category button.

Key functions include:
- `fetchCategoryData(categoryName)`: Fetches product data for the specified category.
- `selectCategory(categoryName)`: Fetches and displays products for the selected category and updates the category buttons.
- `updateProductList(products)`: Updates the product list in the DOM.
- `updateCategoryButtons(selectedCategory)`: Highlights the selected category button.

### Example

```javascript
window.onload = function() {
    selectCategory('Men');
};
