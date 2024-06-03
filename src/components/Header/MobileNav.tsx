import ReusableProductCard from "../ReusableProductCard/ReusableProductCard"
import transparentSpeakers from '../../assets/transparents/image-zx9-speaker-removebg-preview.png'
import transparentEarphones from '../../assets/transparents/image-yx1-earphones-removebg-preview.png';
import transparentHeadPhones from '../../assets/transparents/image-xx99-mark-one-headphones-removebg-preview.png';

const MobileNav = () => {
    return (
        <section className="flex lg:hidden flex-wrap bg-white px-4 absolute z-30 inset-x-0 top-24 gap-5 rounded-b-xl pb-10">
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
    )
}

export default MobileNav
