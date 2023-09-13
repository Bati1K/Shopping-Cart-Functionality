/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
let product1 = {
  name: "Cherry",
  price: 2.99,
  quantity: 0,
  productId: 1,
  image: "./images/cherry.jpg"
};

let product2 = {
  name: "Orange",
  price: 1.99,
  quantity: 0,
  productId: 2,
  image: "./images/orange.jpg"
};

let product3 = {
  name: "Strawberry",
  price: 3.99,
  quantity: 0,
  productId: 3,
  image: "./images/strawberry.jpg"
};

// Add list of products to the products array
products.push(product1, product2, product3);
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  //Declare a variable to store the product object
  let product;

  //Find the product based on the given productId
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      product = products[i];
      break;
    }
  }

  //Check if the product already exists in the cart
  let productInCart = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      cart[i].quantity++;
      productInCart = true;
      break;
    }
  }

  //If the product is not in the cart, add it to the cart
  if (!productInCart) {
    cart.push({
      name: product.name,
      price: product.price,
      quantity: 1,
      productId: product.productId,
      image: product.image
    });
  }

  //Increment the product's quantity
  product.quantity++;
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {

  // Iterate over the cart array to find the product matching the provided productId and increment if a match is found
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      cart[i].quantity++;
      break;
    }
  }

  // Update the product quantity
  // find the product matching the provided productId and increment if a match is found
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      products[i].quantity++;
      break;
    }
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {

  // Iterate over the cart array to find the product matching the provided productId
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      cart[i].quantity--; // decreas the quantity if a match is found

      if (cart[i].quantity === 0) {
        cart.splice(i, 1);  // remove the product if the quanity is 0
      }
      break;
    }
  }

  // Update the product quantity 
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      products[i].quantity--; // decrease the quantity if the match is found
      break;
    }
  }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      cart[i].quantity = 0;
      cart.splice(i, 1);
      break;
    }
  }

  // Update the product quantity
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      products[i].quantity = 0; // Set the quantity to 0 if the match is found
      break;
    }
  }
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    const itemTotal = product.price * product.quantity;
    total += itemTotal;
  }
  return total;
}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart.length = 0;
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let totalPaid = 0;
function pay(amount) {
  const change = amount - cartTotal();
  totalPaid += amount;
  return change;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)

  Remove all items from the cart.
  Integrate a currency switcher to switch between USD, EUR, and YEN.
  Implement currency formatting to accomodate USD, EUR, and YEN.
  Come back once you're familiar with the DOM API, HTML, and CSS and try the following:
  Change/update the formatting of the store.
  Add a mock credit card form with form validation.
  Create a form for adding more products.

*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
