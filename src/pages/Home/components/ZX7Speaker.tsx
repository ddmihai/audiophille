import MaxWidthLayout from "../../../Layouts/MaxWidthLayout";
import speakersMobile from '../../../assets/home/mobile/image-speaker-zx7.jpg';
import speakersTablet from '../../../assets/home/tablet/image-speaker-zx7.jpg';
import speakersDesktop from '../../../assets/home/desktop/image-speaker-zx7.jpg';
import ButtonPrimary, { ButtonVariant } from "../../../components/Buttons/ButtonPrimary";



import data from "../../../data/data.json";
import { useNavigate } from "react-router-dom";

const ZX7Speaker = () => {

    const navigate = useNavigate();
    const ZX7Speaker = data.find(element => element.name.toLowerCase().includes('zx9 speaker'));
    const navigateToProduct = () => {
        navigate(`/product/${ZX7Speaker?.slug}`);
    }


    return (
        <div className="p-5">
            <MaxWidthLayout>
                <div className="relative rounded-xl overflow-hidden">
                    <div className="absolute inset-0 flex p-4 justify-center flex-col max-h-sm ml-[5%]">
                        <h2 className="text-3xl font-semibold">ZX7 SPEAKER</h2>
                        <div className="mt-6">
                            <ButtonPrimary
                                variant={ButtonVariant.OUTLINE}
                                onClickFunction={() => navigateToProduct()}>
                                SEEP PRODUCT
                            </ButtonPrimary>
                        </div>
                    </div>


                    <img src={speakersMobile} alt="Speaker for mobile version viewport" className="sm:hidden max-h-*" />
                    <img src={speakersTablet} alt="Speaker for tablet version viewport" className="hidden sm:flex md:hidden rounded-xl" />
                    <img src={speakersDesktop} alt="Speaker for desktop version viewport" className="hidden md:flex w-full" />
                </div>
            </MaxWidthLayout >
        </div>
    )
}


export default ZX7Speaker
