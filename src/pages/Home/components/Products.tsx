import MaxWidthLayout from "../../../Layouts/MaxWidthLayout"
import ReusableProductCard from "../../../components/ReusableProductCard/ReusableProductCard"

import transparentSpeakers from '../../../assets/transparents/image-zx9-speaker-removebg-preview.png'
import transparentEarphones from '../../../assets/transparents/image-yx1-earphones-removebg-preview.png';
import transparentHeadPhones from '../../../assets/transparents/image-xx99-mark-one-headphones-removebg-preview.png';


const Products = () => {
    return (
        <div className="p-5">
            <MaxWidthLayout>
                <div className="flex flex-wrap justify-center gap-4">
                    <ReusableProductCard
                        hrefLink="#"
                        title="SPEAKERS"
                        image={transparentSpeakers}
                    />

                    <ReusableProductCard
                        hrefLink="#"
                        title="EARPHONES"
                        image={transparentEarphones}
                    />

                    <ReusableProductCard
                        hrefLink="#"
                        title="HEADPHONES"
                        image={transparentHeadPhones}
                    />
                </div>
            </MaxWidthLayout>
        </div>
    )
}

export default Products
