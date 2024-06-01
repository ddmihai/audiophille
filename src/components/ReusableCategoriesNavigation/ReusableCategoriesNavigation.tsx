import ReusableProductCard from "../ReusableProductCard/ReusableProductCard"
import transparentSpeakers from '../../assets/transparents/image-zx9-speaker-removebg-preview.png'
import transparentEarphones from '../../assets/transparents/image-yx1-earphones-removebg-preview.png';
import transparentHeadPhones from '../../assets/transparents/image-xx99-mark-one-headphones-removebg-preview.png';
import MaxWidthLayout from "../../Layouts/MaxWidthLayout";

const ReusableCategoriesNavigation = () => {
    return (
        <div className="p-5">
            <MaxWidthLayout>
                <section className="flex flex-wrap bg-white p-4 gap-5 rounded-b-xl mx-auto">
                    <ReusableProductCard
                        hrefLink="/speakers"
                        title="SPEAKERS"
                        image={transparentSpeakers}
                    />

                    <ReusableProductCard
                        hrefLink="/earphones"
                        title="EARPHONES"
                        image={transparentEarphones}
                    />

                    <ReusableProductCard
                        hrefLink="/headphones"
                        title="HEADPHONES"
                        image={transparentHeadPhones}
                    />

                </section>
            </MaxWidthLayout>
        </div>
    )
}

export default ReusableCategoriesNavigation
