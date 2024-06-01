import LargeProductCard from "../../components/LargeProductCard/LargeProductCard"
import SubHeader from "../../components/SubHeader/SubHeader"
import AudioGear from "../Home/components/AudioGear"


// Importing images // xx59
import ReusableCategoriesNavigation from "../../components/ReusableCategoriesNavigation/ReusableCategoriesNavigation";
import data from '../../data/data.json';



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
                mobileImage={'/src/' + headphoneXX99MarkII?.categoryImage.mobile as string}
                tabletImage={'/src/' + headphoneXX99MarkII?.categoryImage.tablet as string}
                desktopImage={'/src/' + headphoneXX99MarkII?.categoryImage.desktop as string}
            />

            <div className="p-10"></div>

            <LargeProductCard
                inversed={true}
                title={headphoneXX99MarkI?.name as string}
                content={headphoneXX99MarkI?.description as string}
                hrefLink={'/product/' + headphoneXX99MarkI?.slug as string}
                mobileImage={'/src/' + headphoneXX99MarkI?.categoryImage.mobile as string}
                tabletImage={'/src/' + headphoneXX99MarkI?.categoryImage.tablet as string}
                desktopImage={'/src/' + headphoneXX99MarkI?.categoryImage.desktop as string}
            />

            <div className="p-10"></div>


            <LargeProductCard
                inversed={false}
                title={headphoneXX59?.name as string}
                content={headphoneXX59?.description as string}
                hrefLink={'/product/' + headphoneXX59?.slug as string}
                mobileImage={'/src/' + headphoneXX59?.categoryImage.mobile as string}
                tabletImage={'/src/' + headphoneXX59?.categoryImage.tablet as string}
                desktopImage={'/src/' + headphoneXX59?.categoryImage.desktop as string}
            />


            <ReusableCategoriesNavigation />


            {/* Last element next to footer */}
            <AudioGear />
        </main>
    )
}

export default Headphones
