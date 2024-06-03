
import MaxWidthLayout from '../../Layouts/MaxWidthLayout';
import LargeProductCard from '../../components/LargeProductCard/LargeProductCard';
import SubHeader from '../../components/SubHeader/SubHeader';

import data from '../../data/data.json'
import ReusableCategoriesNavigation from '../../components/ReusableCategoriesNavigation/ReusableCategoriesNavigation';
import AudioGear from '../Home/components/AudioGear';


import zx9SpeakerDesktop from '../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import zx9SpeakerTablet from '../../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg'
import zx9SpeakerMobile from '../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg'


import zx7SpeakerDesktop from '../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'
import zx7SpeakerTablet from '../../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg'
import zx7SpeakerMobile from '../../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg'



const Speakers = () => {

    const zx9Speaker = data.find(item => item.name.toUpperCase() === 'ZX9 SPEAKER');
    const ZX7Speaker = data.find(item => item.name.toUpperCase() === 'ZX7 SPEAKER');




    return (
        <div>
            <SubHeader title='SPEAKERS' />
            <div className='p-5'>

                <div className='py-10'></div>

                <MaxWidthLayout>
                    <LargeProductCard
                        title={zx9Speaker?.name as string}
                        content={zx9Speaker?.description as string}
                        inversed={false}
                        hrefLink={'/product/' + zx9Speaker?.slug as string}
                        mobileImage={zx9SpeakerMobile}
                        tabletImage={zx9SpeakerTablet}
                        desktopImage={zx9SpeakerDesktop}
                    />



                    <div className='py-10'></div>


                    <LargeProductCard
                        title={ZX7Speaker?.name as string}
                        content={ZX7Speaker?.description as string}
                        inversed={true}
                        hrefLink={'/product/' + ZX7Speaker?.slug as string}
                        mobileImage={zx7SpeakerMobile}
                        tabletImage={zx7SpeakerTablet}
                        desktopImage={zx7SpeakerDesktop}
                    />

                    <ReusableCategoriesNavigation />

                    <AudioGear />

                </MaxWidthLayout>
            </div>
        </div>
    )
}

export default Speakers
