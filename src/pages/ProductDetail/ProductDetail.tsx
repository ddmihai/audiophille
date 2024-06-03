import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import ProductMainBanner from "./components/ProductMainBanner";




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
            />
        </section>
    );
}

export default ProductDetail;
