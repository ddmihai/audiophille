import React, { useEffect, useState } from 'react';
import { Iproduct } from '../../lib/manageProducts';
import { getProductsFromCart } from '../../lib/getAllProducts';

import data from '../../data/data.json';
import ButtonPrimary, { ButtonVariant } from '../Buttons/ButtonPrimary';
import { useNavigate } from 'react-router-dom';

interface IModalProps {
    isModalOpen: boolean;
    closeModal: () => void;
}

export interface INewProduct extends Iproduct {
    image: string,
    name: string,
    itemIndividualPrice: number
}




const Cart: React.FC<IModalProps> = ({ isModalOpen, closeModal }) => {

    function getImgUrl(name: string) {
        let image = new URL(`${name}`, import.meta.url).href;
        let splittedImage = process.env.NODE_ENV === 'development' ? image.split('/components/Cart').join('') :
            image.replace('/assets/assets', '/assets');
        return splittedImage;
    };



    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            closeModal();
            updateProducts();
        }
    };


    const [products, setProducts] = useState<INewProduct[] | undefined>([]);
    const updateProducts = () => {
        const products = getProductsFromCart();

        let newArray: INewProduct[] = [];

        products?.forEach(elementFromLocalStorage => {
            let object: INewProduct = {
                productId: elementFromLocalStorage.productId,
                qty: elementFromLocalStorage.qty,
                price: elementFromLocalStorage.price,
                itemIndividualPrice: elementFromLocalStorage.itemIndividualPrice,
                image: '',
                name: '',
            };

            const elementRequired = data.find(element => Number(element.id) === Number(elementFromLocalStorage.productId));
            if (elementRequired) {
                object.image = getImgUrl(elementRequired?.image.mobile);
                object.name = elementRequired?.name;

                newArray.push(object);
            }
        });

        setProducts(newArray);
    };





    useEffect(() => {
        updateProducts();
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'cart') {
                console.log(21);
                console.log(e.key);
                updateProducts();
            }
        };
        window.addEventListener('storage', handleStorageChange);
    }, [isModalOpen]);









    const removeItemsFromCart = () => {
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify([]));
        updateProducts();
    };




    const modifyQuantity = (productId: number, price: number, operation: string) => {
        const allProducts = localStorage.getItem('cart');
        const parsedProducts = JSON.parse(allProducts || '[]');
        const productIndex = parsedProducts.findIndex((product: { productId: number; }) => product.productId === productId);

        if (productIndex !== -1) {
            const product = parsedProducts[productIndex];
            let newQty = product.qty;
            let newPrice = product.price;

            if (operation === 'add') {
                newQty += 1;
                newPrice += price;
            } else if (operation === 'substract') {
                newQty -= 1;
                newPrice = newQty * product.itemIndividualPrice;
            }

            // Update the product with the new quantity and price
            parsedProducts[productIndex] = { ...product, qty: newQty, price: newPrice };

            // Remove the product if the quantity is 0 or less
            if (newQty <= 0) {
                parsedProducts.splice(productIndex, 1);
            }

            localStorage.setItem('cart', JSON.stringify(parsedProducts));
            calculateTotalPrice(); // Recalculate the total price after modification
            updateProducts(); // Update the products displayed in the UI
        }
    };




    // Calculate the total price of the localstorage prices
    const [totalPrice, setTotalPrice] = useState<number>();
    const calculateTotalPrice = () => {
        const allProducts = localStorage.getItem('cart');
        const parsedProducts = JSON.parse(allProducts || '[]');
        const total = parsedProducts.reduce((acc: number, product: { price: number; }) => acc + product.price, 0);
        setTotalPrice(total);
    };

    useEffect(() => {
        calculateTotalPrice();
    }, [products]);



    // This will use useNavigation to navigate into checkout page, will setup a new localstorage with the updated cart as the products
    const navigate = useNavigate();
    const proceedToCheckout = () => {
        navigate('/checkout', { state: { products: products } });
        closeModal();
    }


    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 absolute">

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={handleOverlayClick}
                >
                    <div className='max-w-7xl mx-auto p-5' onClick={handleOverlayClick}>

                        <div className="bg-white py-7 px-5 rounded-xl shadow-lg relative mt-28 mx-auto w-full
                        sm:max-w-md sm:mx-0 sm:ml-auto">
                            <div className='flex justify-between'>
                                <p className='font-semibold text-xl'>CART ({products?.length})</p>
                                <button
                                    className='text-slate-400 underline'
                                    onClick={() => removeItemsFromCart()}>Remove all</button>
                            </div>

                            {/* Product iteration */}
                            <div className='mt-8'>
                                {
                                    products?.map((element) => (
                                        <div key={element.productId} className='flex gap-7 my-5 [&>img]:rounded-xl justify-between'>
                                            <img src={element.image} alt={`${element.name} image for cart`} width={90} height={90} />

                                            <div className='flex-1 flex flex-col justify-evenly'>
                                                <p className='uppercase text-xl font-semibold'>{element.name.includes('Headphones') ? element.name.split('Headphones')[0] : element.name}</p>
                                                <p className='text-slate-400'>$ {element.price}</p>
                                            </div>

                                            <div className='flex-1 flex '>
                                                <div className='flex bg-gray max-w-[120px] ml-auto flex-1 justify-evenly items-center py-3 gap-2 my-auto [&>button]:text-slate-400 [&>button]:text-xl'>
                                                    <button onClick={() => modifyQuantity(element.productId, element.price, 'substract')}>-</button>
                                                    <p>{element.qty}</p>
                                                    <button onClick={() => modifyQuantity(element.productId, element.price, 'add')}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>



                            {/* Div with total and button */}
                            <div className='flex-1'>
                                <div className='flex justify-between mt-5'>
                                    <p className='text-slate-400 text-xl'>Total</p>
                                    {/* calculate the total price from localstorage */}
                                    <p className='font-semibold text-xl'>$ {totalPrice}</p>
                                </div>

                                <div className='flex-1 mt-3 [&>button]:w-full'>
                                    <ButtonPrimary
                                        variant={ButtonVariant.FILL}
                                        onClickFunction={() => proceedToCheckout()}
                                    >CHECKOUT</ButtonPrimary>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};




export default Cart;
