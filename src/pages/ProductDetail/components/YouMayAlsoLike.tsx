import { useNavigate } from "react-router-dom";
import MaxWidthLayout from "../../../Layouts/MaxWidthLayout"
import ButtonPrimary, { ButtonVariant } from "../../../components/Buttons/ButtonPrimary";




interface Image {
    mobile: string;
    tablet: string;
    desktop: string;
}

interface Product {
    slug: string;
    name: string;
    image: Image;
}





const YouMayAlsoLike = ({ alternativeProducts }: { alternativeProducts: Product[] }) => {

    const navigate = useNavigate();

    function getImgUrl(name: string) {
        let image = new URL(`${name}`, import.meta.url).href;
        let splittedImage = process.env.NODE_ENV === 'development' ? image.split('/pages/ProductDetail/components').join('') :
            image.replace('/assets/assets', '/assets');
        return splittedImage;
    };


    return (
        <div className="p-5">
            <MaxWidthLayout>
                <h2 className="mt-20 mb-10 text-3xl uppercase text-center">You may also like</h2>
                <div className="justify-between sm:flex sm:flex-wrap sm:gap-5">

                    {alternativeProducts.map((element, index) => (
                        <div key={index} className="flex-1">
                            <div className="[&>img]:rounded-xl">
                                <img src={getImgUrl(element.image.mobile)} alt="Alternative product" className="sm:hidden w-full h-full object-cover" />
                                <img src={getImgUrl(element.image.tablet)} alt="Alternative product" className="hidden sm:flex md:hidden w-full h-full object-cover" />
                                <img src={getImgUrl(element.image.desktop)} alt="Alternative product" className="hidden md:flex w-full h-full object-cover" />
                            </div>
                            <div className="text-center">
                                <p className="uppercase text-3xl my-10">{element.name}</p>
                                <ButtonPrimary
                                    variant={ButtonVariant.FILL}
                                    onClickFunction={() => navigate(`/product/${element.slug}`)}
                                >SEE PRODUCT</ButtonPrimary>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthLayout>
        </div>
    )
}

export default YouMayAlsoLike
