
import MaxWidthLayout from '../../Layouts/MaxWidthLayout';
import LargeProductCard from '../../components/LargeProductCard/LargeProductCard';
import SubHeader from '../../components/SubHeader/SubHeader';

import data from '../../data/data.json'
import ReusableCategoriesNavigation from '../../components/ReusableCategoriesNavigation/ReusableCategoriesNavigation';
import AudioGear from '../Home/components/AudioGear';




import mobileEarphones from '../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg'
import tabletEarphones from '../../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg'
import desktopEarphones from '../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'


const EarPhones = () => {

    const earphones = data.find(item => item.name.toUpperCase() === 'YX1 WIRELESS EARPHONES');


    return (
        <div>
            <SubHeader title='EARPHONES' />
            <div className='p-5'>
                <div className='py-10'></div>

                <MaxWidthLayout>
                    <LargeProductCard
                        title={earphones?.name as string}
                        content={earphones?.description as string}
                        inversed={false}
                        hrefLink={'/product/' + earphones?.slug as string}
                        mobileImage={mobileEarphones}
                        tabletImage={tabletEarphones}
                        desktopImage={desktopEarphones}
                    />

                    <ReusableCategoriesNavigation />
                    <AudioGear />

                </MaxWidthLayout>
            </div>
        </div>
    )
}

export default EarPhones;
