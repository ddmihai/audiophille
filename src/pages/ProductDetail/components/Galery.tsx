import MaxWidthLayout from "../../../Layouts/MaxWidthLayout"




interface ImageSet {
    mobile: string;
    tablet: string;
    desktop: string;
}

interface IGallery {
    first: ImageSet;
    second: ImageSet;
    third: ImageSet;
}


const Galery = ({ gallery }: { gallery: IGallery }) => {


    function getImgUrl(name: string) {
        let image = new URL(`${name}`, import.meta.url).href;
        let splittedImage = process.env.NODE_ENV === 'development' ? image.split('/pages/ProductDetail/components').join('') :
            image.replace('/assets/assets', '/assets');
        return splittedImage;
    };




    return (
        <section className="p-5">
            <MaxWidthLayout>
                <div className="flex flex-col gap-4 md:flex-row">
                    <aside className="flex-1 flex flex-col gap-4 basis-[400px]">
                        <div className="[&>img]:rounded-xl flex-1">
                            <img src={getImgUrl(gallery.first.mobile)}
                                alt="Small art galery with pictures that involves the object"
                                className="md:hidden object-cover object-center w-full"
                            />
                            <img src={getImgUrl(gallery.first.tablet)}
                                alt="Small art galery with pictures that involves the object"
                                className="hidden md:flex lg:hidden object-cover object-center w-full"
                            />
                            <img src={getImgUrl(gallery.first.desktop)}
                                alt="Small art galery with pictures that involves the object"
                                className="hidden lg:flex object-cover object-center w-full"
                            />
                        </div>

                        <div className="[&>img]:rounded-xl flex-1 ">
                            <img src={getImgUrl(gallery.second.mobile)}
                                alt="Small art galery with pictures that involves the object"
                                className="md:hidden object-cover object-center w-full"
                            />
                            <img src={getImgUrl(gallery.second.tablet)}
                                alt="Small art galery with pictures that involves the object"
                                className="hidden md:flex lg:hidden object-cover object-center w-full"
                            />
                            <img src={getImgUrl(gallery.second.desktop)}
                                alt="Small art galery with pictures that involves the object"
                                className="hidden lg:flex object-cover object-center w-full"
                            />
                        </div>
                    </aside>


                    <aside className="flex-1 max-w [&>img]:rounded-xl  object-cover basis-[500px]">
                        <img src={getImgUrl(gallery.third.mobile)}
                            alt="Small art galery with pictures that involves the object"
                            className="md:hidden object-cover w-full h-full"
                        />
                        <img src={getImgUrl(gallery.third.tablet)}
                            alt="Small art galery with pictures that involves the object"
                            className="hidden md:flex lg:hidden object-cover w-full h-full"
                        />
                        <img
                            src={getImgUrl(gallery.third.desktop)}
                            alt="Small art gallery with pictures that involves the object"
                            className="hidden lg:flex object-cover w-full h-full"
                        />
                    </aside>
                </div>
            </MaxWidthLayout>
        </section>
    )
}

export default Galery
