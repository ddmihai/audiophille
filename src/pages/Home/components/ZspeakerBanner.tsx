import MaxWidthLayout from "../../../Layouts/MaxWidthLayout"
import zSpeakerMobile from '../../../assets/home/mobile/image-speaker-zx9.png'

import bgShapes from '../../../assets/home/desktop/pattern-circles.svg'
import ButtonPrimary, { ButtonVariant } from "../../../components/Buttons/ButtonPrimary"

const ZspeakerBanner = () => {
    return (
        <section className="mt-10 rounded-xl m-5 overflow-hidden">
            <MaxWidthLayout>
                <div className="bg-primary-brown relative flex h-[550px] md:h-[680px] lg:h-[470px] rounded-xl">
                    {/* background image */}
                    <img src={bgShapes} alt="Shapes white for background" className="h-[100%] w-[100%] object-cover object-top" />


                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center lg:flex-row 
                    lg:justify-between lg:w-[800px] lg:mx-auto">
                        <img src={zSpeakerMobile} alt="Mobile view speaker" className="w-32 md:w-44 md:mt-6 lg:w-80 lg:mt-auto lg:-mb-3" />
                        <div className="lg:text-left">
                            <h1 className="text-white text-4xl my-5 flex flex-col md:text-6xl md:my-7 lg: lg:gap-4">
                                <span>ZX9 </span>
                                <span> SPEAKER</span>
                            </h1>
                            <p className="text-white font-thin mb-5 p-4 max-w-xs lg:p-0 lg:my-10 lg:mb-12">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <div className="max-w-fit mx-auto lg:min-w-full">
                                <ButtonPrimary
                                    onClickFunction={() => console.log(12)}
                                    variant={ButtonVariant.DARK}>SEE PRODUCT</ButtonPrimary>
                            </div>
                        </div>
                    </div>

                </div>
            </MaxWidthLayout>
        </section>
    )
}

export default ZspeakerBanner
