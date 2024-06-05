export interface Iproduct {
    productId: number;
    qty: number;
    price: number;
    itemIndividualPrice: number;
}

export const manageProducts = (productId: number, qty: number, price: number) => {
    const cart = localStorage.getItem('cart');
    let storage: Iproduct[] = [];


    if (!cart) {
        localStorage.setItem('cart', JSON.stringify([]));
    } else {
        storage = JSON.parse(cart) as Iproduct[];
    }

    // Find the product in the cart
    const existingProductIndex = storage.findIndex(element => element.productId === productId);
    const existingProduct = storage[existingProductIndex];

    if (existingProduct) {
        if (qty === 0) {
            // Remove the product if the quantity is zero
            storage.splice(existingProductIndex, 1);
        } else {
            // Update the quantity and price
            existingProduct.qty = qty;
            existingProduct.price = price * qty;
            storage[existingProductIndex] = existingProduct;
        }
    } else {
        if (qty > 0) {
            // Add the new product to the cart
            storage.push({ productId, qty, price: price * qty, itemIndividualPrice: price });
        }
    }

    // Update localStorage with the modified cart
    localStorage.setItem('cart', JSON.stringify(storage));
};
