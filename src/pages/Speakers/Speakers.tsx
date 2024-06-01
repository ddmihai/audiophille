
import MaxWidthLayout from '../../Layouts/MaxWidthLayout';
import LargeProductCard from '../../components/LargeProductCard/LargeProductCard';
import SubHeader from '../../components/SubHeader/SubHeader';

import data from '../../data/data.json'
import ReusableCategoriesNavigation from '../../components/ReusableCategoriesNavigation/ReusableCategoriesNavigation';
import AudioGear from '../Home/components/AudioGear';


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
                        mobileImage={'/src/' + zx9Speaker?.image.mobile as string}
                        tabletImage={'/src/' + zx9Speaker?.categoryImage.tablet as string}
                        desktopImage={'/src/' + zx9Speaker?.image.desktop as string}
                    />



                    <div className='py-10'></div>


                    <LargeProductCard
                        title={ZX7Speaker?.name as string}
                        content={ZX7Speaker?.description as string}
                        inversed={true}
                        hrefLink={'/product/' + ZX7Speaker?.slug as string}
                        mobileImage={'/src/' + ZX7Speaker?.image.mobile as string}
                        tabletImage={'/src/' + ZX7Speaker?.categoryImage.tablet as string}
                        desktopImage={'/src/' + ZX7Speaker?.image.desktop as string}
                    />

                    <ReusableCategoriesNavigation />

                    <AudioGear />

                </MaxWidthLayout>
            </div>
        </div>
    )
}

export default Speakers
