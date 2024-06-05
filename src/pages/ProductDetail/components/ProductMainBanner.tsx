import React, { ChangeEvent, useEffect, useState } from "react";
import MaxWidthLayout from "../../../Layouts/MaxWidthLayout";
import ButtonPrimary, { ButtonVariant } from "../../../components/Buttons/ButtonPrimary";
import { manageProducts } from "../../../lib/manageProducts";
import { useNavigate } from "react-router-dom";

interface DetailsProduct {
    mobileImage: string;
    tabletImage: string;
    desktopImage: string;
    title: string;
    newProduct: boolean;
    productDetail: string;
    price: number;
    productId: number;
}





const ProductMainBanner: React.FC<DetailsProduct> = ({ mobileImage, tabletImage, desktopImage, title, newProduct, productDetail, price, productId }) => {

    const navigate = useNavigate();

    function getImgUrl(name: string) {
        let image = new URL(`${name}`, import.meta.url).href;
        let splittedImage = process.env.NODE_ENV === 'development' ? image.split('/pages/ProductDetail/components').join('') :
            image.replace('/assets/assets', '/assets');
        return splittedImage;
    };



    const [productState, setProductState] = useState<number>(1);

    const handleProductStateChange = (add: boolean) => {
        if (productState <= 0 && !add) return;
        if (productState >= 10 && add) return;

        setProductState(currentProductState => {
            if (add) {
                return currentProductState + 1;
            } else {
                return currentProductState - 1;
            }
        });
    };



    const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(event.target.value);

        setProductState(currentProductState => {
            if (inputValue > 0 && inputValue <= 10) {
                return inputValue;
            } else {
                return currentProductState;
            }
        });
    }


    useEffect(() => {
        const cart = localStorage.getItem('cart');

        if (!cart) {
            localStorage.setItem('cart', JSON.stringify([]));
        };
    }, []);






    return (
        <article className="p-5">
            <MaxWidthLayout>

                <button className="text-slate-500 my-7" onClick={() => navigate(-1)}>
                    Go Back
                </button>

                <div className="md:flex">
                    <aside className="flex-1 [&>img]:rounded-xl [&>img]:overflow-hidden">
                        <img src={getImgUrl(mobileImage)} alt="Detailed image product" className="md:hidden" />
                        <img src={getImgUrl(tabletImage)} alt="Detailed image product" className="hidden md:flex lg:hidden" />
                        <img src={getImgUrl(desktopImage)} alt="Detailed image product" className="hidden lg:flex" />
                    </aside>

                    <aside className="flex-1 flex items-center justify-center">
                        <div className="flex-1 max-w-lg p-4 py-12">
                            {newProduct && <p className="text-primary-brown text-sm" style={{ letterSpacing: '15px' }}>NEW PRODUCT</p>}
                            <h1 className="text-4xl my-7 uppercase w-64">{title}</h1>
                            <p className="text-slate-500">{productDetail}</p>
                            <p className="font-semibold text-xl my-7">$ {price}</p>

                            <div className="flex gap-3">


                                <div className="flex bg-gray [&>button]:cursor-pointer items-center px-4 [&>button]:text-slate-500 [&>button]:text-xl">
                                    <button onClick={() => handleProductStateChange(false)}>-</button>
                                    <input type="number"
                                        className="w-20 bg-transparent text-center"
                                        value={productState}
                                        onChange={changeInput} />
                                    <button onClick={() => handleProductStateChange(true)}>+</button>
                                </div>

                                <ButtonPrimary
                                    onClickFunction={() => {
                                        manageProducts(productId, productState, price);
                                        alert('Product added to cart');
                                    }}
                                    variant={ButtonVariant.FILL}
                                >ADD TO CART</ButtonPrimary>
                            </div>
                        </div>
                    </aside>
                </div>
            </MaxWidthLayout>
        </article>
    );
}

export default ProductMainBanner;
