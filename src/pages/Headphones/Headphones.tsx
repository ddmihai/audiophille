import LargeProductCard from "../../components/LargeProductCard/LargeProductCard"
import SubHeader from "../../components/SubHeader/SubHeader"
import AudioGear from "../Home/components/AudioGear"


// Importing images // xx59
import ReusableCategoriesNavigation from "../../components/ReusableCategoriesNavigation/ReusableCategoriesNavigation";
import data from '../../data/data.json';

import xx59Mobile from '../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'
import xx59Tablet from '../../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg'
import xx59Desktop from '../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'


import xx59MarkIMobile from '../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
import xx59MarkITablet from '../../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
import xx59MarkIDesktop from '../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'

import xx59MarkIIMobile from '../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg';
import xx59MarkIITablet from '../../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg';
import xx59MarkIIDesktop from '../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';

const Headphones = () => {

    const headphoneXX59 = data.find(element => element.name.toUpperCase() === 'XX59 HEADPHONES');
    const headphoneXX99MarkI = data.find(element => element.name.toUpperCase() === 'XX99 MARK I HEADPHONES');
    const headphoneXX99MarkII = data.find(element => element.name.toUpperCase() === 'XX99 MARK II HEADPHONES');



    return (
        <main>
            <SubHeader title="HEADPHONES" />

            <div className="p-10"></div>

            <LargeProductCard
                inversed={false}
                title={headphoneXX99MarkII?.name as string}
                content={headphoneXX99MarkII?.description as string}
                hrefLink={'/product/' + headphoneXX99MarkII?.slug as string}
                mobileImage={xx59MarkIIMobile}
                tabletImage={xx59MarkIITablet}
                desktopImage={xx59MarkIIDesktop}
            />

            <div className="p-10"></div>

            <LargeProductCard
                inversed={true}
                title={headphoneXX99MarkI?.name as string}
                content={headphoneXX99MarkI?.description as string}
                hrefLink={'/product/' + headphoneXX99MarkI?.slug as string}
                mobileImage={xx59MarkIMobile}
                tabletImage={xx59MarkITablet}
                desktopImage={xx59MarkIDesktop}
            />

            <div className="p-10"></div>


            <LargeProductCard
                inversed={false}
                title={headphoneXX59?.name as string}
                content={headphoneXX59?.description as string}
                hrefLink={'/product/' + headphoneXX59?.slug as string}
                mobileImage={xx59Mobile}
                tabletImage={xx59Tablet}
                desktopImage={xx59Desktop}
            />


            <ReusableCategoriesNavigation />


            {/* Last element next to footer */}
            <AudioGear />
        </main>
    )
}

export default Headphones
