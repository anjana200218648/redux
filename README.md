# E-Commerce Project

This is a fully functional e-commerce project built using **React**, **Vite**, **React Icons**, **Redux Toolkit**, and **Tailwind CSS**. The project features a responsive design, dynamic product listing, cart functionality, and a user-friendly interface for an e-commerce store.

## Features

- **Responsive Design**: Fully responsive layout built with **Tailwind CSS**.
- **Product Listings**: Dynamic product listings pulled from the Redux store.
- **Shopping Cart**: Add products to the cart, update quantities, and remove products.
- **Redux Toolkit**: State management library for handling complex states in React apps.
- **React Icons**: Utilization of icons to enhance user interface.
- **Vite**: Fast development environment with **Vite** for quicker build times.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation, fast bundler and build tool.
- **React Icons**: Customizable icons for your React applications.
- **Redux Toolkit**: State management library for handling complex states in React apps.
- **Tailwind CSS**: Utility-first CSS framework for fast UI development.

## Installation

To get started with the project, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/e-commerce-project.git
cd emart
```
2. Install dependencies
You can install the dependencies using npm or yarn:

```bash
Copy code
npm install
# OR
yarn install
```
3. Start the development server
Once the dependencies are installed, run the following command to start the development server:

```bash
Copy code
npm run dev
# OR
yarn dev
```
This will start the development server and you can view the project at http://localhost:5173 (default for Vite).

###Project Structure
```bash
Copy code
src/
├── assets/            # Static files such as images
├── components/        # Reusable UI components
├── features/          # Redux slices for state management
├── pages/             # Main page components (e.g., Home, Cart, About Us)
├── redux/             # Redux store setup and slices
├── styles/            # Custom styles (e.g., global styles)
├── App.jsx            # Main React component
├── main.jsx           # Entry point of the application
```
###Scripts
npm run dev or yarn dev: Start the development server.
npm run build or yarn build: Create a production build.
npm run preview or yarn preview: Preview the production build locally.

###Dependencies
React: 18.x.x
Vite: 4.x.x
Redux Toolkit: 1.x.x
React Icons: 4.x.x
Tailwind CSS: 3.x.x

###Tailwind CSS Setup
To customize the Tailwind configuration, modify the tailwind.config.js file. For example, to extend the theme with custom colors, you can add them under the extend section:

```javascript
Copy code
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#e11d48',  // Example custom color
      },
    },
  },
  plugins: [],
}
```
###Redux Setup
Redux slices are stored inside the src/features directory.
The store is configured inside the src/redux/store.js file, and slices are added to it for managing state like cart, products, etc.

###Contributing
We welcome contributions to improve the project! If you want to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to your fork (git push origin feature-branch).
Create a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

###Contact
For more details, feel free to contact us at:

Email: hashananjanahh3@gmail.com
