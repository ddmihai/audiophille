import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import ProductMainBanner from "./components/ProductMainBanner";
import ProductFeatures from "./components/ProductFeatures";
import Galery from "./components/Galery";
import ReusableCategoriesNavigation from "../../components/ReusableCategoriesNavigation/ReusableCategoriesNavigation";
import AudioGear from "../Home/components/AudioGear";
import YouMayAlsoLike from "./components/YouMayAlsoLike";






const ProductDetail: React.FC = () => {
    const params = useParams<{ slug: string }>();
    const product = data.find(element => element.slug.toLowerCase() === params.slug?.toLowerCase());

    if (!product) {
        return <div>Product not found</div>;
    }




    return (
        <section>
            <ProductMainBanner
                mobileImage={product.image.mobile}
                tabletImage={product.image.tablet}
                desktopImage={product.image.desktop}

                title={product.name}
                newProduct={product.new}
                productDetail={product.description}
                price={product.price}
                productId={product.id}
            />

            <ProductFeatures
                features={product.features}
                inTheBox={product.includes}
            />

            <Galery
                gallery={product.gallery}
            />

            <YouMayAlsoLike
                alternativeProducts={product.others}
            />

            <ReusableCategoriesNavigation />
            <AudioGear />
        </section>
    );
}

export default ProductDetail;
