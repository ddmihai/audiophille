import MaxWidthLayout from "../../../Layouts/MaxWidthLayout"
import headphoneBGDesktop from '../../../assets/home/desktop/image-header-removebg-preview-mobile.png';
import ButtonPrimary, { ButtonVariant } from "../../../components/Buttons/ButtonPrimary";


const Banner = () => {
    return (
        <div className="bg-secondary-black">
            <MaxWidthLayout>
                <aside className="flex relative">
                    <div className="absolute z-20 inset-0 w-auto
                    lg:relative lg:z-10 lg:flex-1 lg:max-w-xl flex items-center p-5">

                        <div className="text-center max-w-sm lg:text-left mx-auto lg:mx-0 flex flex-col w-full lg:max-w-auto">
                            <p className="text-slate-500" style={{ letterSpacing: '15px' }}>NEW PRODUCT</p>
                            <h1 className="text-4xl lg:text-6xl my-5 text-white">XX99 MARKII HEADPHONES</h1>
                            <p className="my-5 text-slate-500">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                            <div>
                                <ButtonPrimary variant={ButtonVariant.FILL} onClickFunction={() => console.log(123)}>SEE PRODUCT</ButtonPrimary>
                            </div>
                        </div>
                    </div>

                    <img src={headphoneBGDesktop} alt="Headphones image desktop" className="-mt-24 overflow-hidden mx-auto p-6 relative z-10" />
                </aside>
            </MaxWidthLayout>
        </div >
    )
}

export default Banner
