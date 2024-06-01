import MaxWidthLayout from '../../../Layouts/MaxWidthLayout';
import mobileFace from '../../../assets/shared/mobile/image-best-gear.jpg';
import tabletFace from '../../../assets/shared/tablet/image-best-gear.jpg';
import desktoptFace from '../../../assets/shared/desktop/image-best-gear.jpg';

const AudioGear = () => {
    return (
        <div className='p-5 mt-14'>
            <MaxWidthLayout>
                <div className='md:flex lg:h-[500px] lg:flex-row-reverse'>

                    <div className='flex-1 basis-96 [&>img]:rounded-xl'>
                        <img src={mobileFace} alt="Sugestion of presentation" className='sm:hidden' />
                        <img src={tabletFace} alt="Sugestion of presentation" className='hidden sm:flex md:hidden' />
                        <img src={desktoptFace} alt="Sugestion of presentation" className='hidden md:flex w-full max-h-full object-cover' />
                    </div>

                    <div className='flex-1 basis-96 flex justify-center flex-col items-center'>
                        <div className='max-w-sm p-5'>
                            <h1 className='text-[28px] text-center mt-4 lg:text-left'>
                                BRINGING YOU THE <span className='text-primary-brown'> BEST </span> AUDIO GEAR
                            </h1>
                            <p className='text-sm text-center text-slate-500 my-7 lg:text-left'>
                                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                            </p>
                        </div>
                    </div>

                </div>
            </MaxWidthLayout>
        </div>
    )
}

export default AudioGear
