import { Iproduct } from "./manageProducts";


export const getProductsFromCart = () => {
    const products = localStorage.getItem('cart');
    let cart: Iproduct[] | [];

    if (products) {
        cart = JSON.parse(products);
        return cart;
    };

}