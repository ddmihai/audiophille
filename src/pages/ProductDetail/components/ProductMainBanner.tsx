import React from "react";
import MaxWidthLayout from "../../../Layouts/MaxWidthLayout";

interface DetailsProduct {
    mobileImage: string;
    tabletImage: string;
    desktopImage: string;
}

const ProductMainBanner: React.FC<DetailsProduct> = ({ mobileImage, tabletImage, desktopImage }) => {

    function getImgUrl(name: string) {
        let image = new URL(`${name}`, import.meta.url).href;
        // let splittedImage = process.env.NODE_ENV === 'development' ? image.split('/pages/ProductDetail/components').join('') : image.split('/');
        console.log(image.split('/')[image.length - 1])
        return image;
    };





    return (
        <article className="p-5">
            <MaxWidthLayout>
                <div className="border-4 border-red-500 md:flex">
                    <aside className="flex-1 [&>img]:rounded-xl [&>img]:overflow-hidden">
                        <img src={getImgUrl(mobileImage)} alt="Detailed image product" className="md:hidden" />
                        <img src={getImgUrl(tabletImage)} alt="Detailed image product" className="hidden md:flex lg:hidden" />
                        <img src={getImgUrl(desktopImage)} alt="Detailed image product" className="hidden lg:flex" />
                    </aside>
                    <aside className="border-4 border-green-600 flex-1">
                        {/* You can add other elements here */}
                    </aside>
                </div>
            </MaxWidthLayout>
        </article>
    );
}

export default ProductMainBanner;
