
import MaxWidthLayout from '../../Layouts/MaxWidthLayout';
import LargeProductCard from '../../components/LargeProductCard/LargeProductCard';
import SubHeader from '../../components/SubHeader/SubHeader';

import data from '../../data/data.json'
import ReusableCategoriesNavigation from '../../components/ReusableCategoriesNavigation/ReusableCategoriesNavigation';
import AudioGear from '../Home/components/AudioGear';


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
                        mobileImage={'/src/' + earphones?.image.mobile as string}
                        tabletImage={'/src/' + earphones?.categoryImage.tablet as string}
                        desktopImage={'/src/' + earphones?.image.desktop as string}
                    />





                    <ReusableCategoriesNavigation />

                    <AudioGear />

                </MaxWidthLayout>
            </div>
        </div>
    )
}

export default EarPhones;
