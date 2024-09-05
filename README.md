# Market React Project

## Project Overview

This is a simple market application built with React that provides basic CRUD operations for managing a shopping cart. Users can browse products divided into categories, add them to a cart, adjust quantities, and view the total price. The project focuses on correct functionality rather than visual styling.

## Features

- **Navigation between components**: Users can navigate between different sections using React Router, with a structured layout for the shop and its categories.
- **Products by category**: Products are divided into categories such as dairy, fish, and meat, making it easy for users to find what they are looking for.
- **CRUD operations**: Users can add products to their cart, update quantities, and remove items from the cart.
- **Cart management**: The cart shows the total number of items and the total price. Users can adjust the quantity of each product or clear the entire cart.
- **Local storage**: The cart is stored in `localStorage` to persist between sessions, so users don't lose their cart when refreshing the page.
- **Product list management**: A simple interface for listing products and managing categories.

## Technologies Used

- **React**: For building the user interface and managing components.
- **React Router**: For navigation between different pages and components.
- **State Management**: `useState` and `useEffect` hooks are used to manage the state of the cart and the total price.
- **LocalStorage**: To persist cart data between page reloads.
- **JavaScript**: For implementing business logic such as handling product addition, removal, and updating quantities.
- **HTML/CSS**: Basic structure and minimal styling for components.

## Project Structure

The application is structured into the following key components:

- **App Component**: The main entry point of the app, providing navigation and routing to the shop pages. [App.js](./App.js)
- **Shop Component**: Displays categories of products and sub-pages for each category. [Shop.js](./Shop.js)
- **Product Component**: Displays a list of products by category and allows users to add items to their cart. [Prod.js](./Prod.js)
- **Cart Component**: Displays the contents of the cart, total price, and allows quantity adjustments. [Cart.js](./Cart.js)
- **Samp Component**: A placeholder component for future development. [Samp.js](./Samp.js)
- **Data Management**: Products and categories are handled in a separate data file for easier management. [myData.js](./myData.js)

## How to Run the Project

1. Clone the repository to your local machine.
2. Run `npm install` to install the necessary dependencies.
3. Use `npm start` to start the development server.
4. Open `http://localhost:3000` in your browser to view the app.

## Functionality Overview

### Adding Products to the Cart
Users can browse products by category and add them to the cart. Each product has a price, and users can add multiple units of the same product.

### Cart Management
The cart displays the number of items and the total price. Users can:
- Add or remove products.
- Adjust the quantity of items in the cart.
- Clear the entire cart.

### LocalStorage Integration
The cart state is saved in `localStorage`, allowing the cart to persist between page reloads.

### Categories
Products are divided into the following categories:
- Dairy
- Fish
- Meat

Each category has its own products, which are displayed when users navigate through the shop.

## Future Improvements

- Enhanced UI styling for a better user experience.
- More detailed product information and filtering options.
- A backend service for product data management.

## License

This project is open-source and free to use for educational purposes.
