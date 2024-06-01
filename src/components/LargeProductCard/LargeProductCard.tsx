import MaxWidthLayout from "../../Layouts/MaxWidthLayout"


import ButtonPrimary, { ButtonVariant } from "../Buttons/ButtonPrimary";
import React from "react";
import { useNavigate } from "react-router-dom";


interface ILargeProduct {
    inversed: boolean,

    // images
    mobileImage: string,
    tabletImage: string,
    desktopImage: string,

    title: string,
    content: string,
    hrefLink: string
}


const LargeProductCard: React.FC<ILargeProduct> = ({ inversed, mobileImage, tabletImage, desktopImage, title, content, hrefLink }) => {

    const navigate = useNavigate();

    return (
        <article className="p-5">
            <MaxWidthLayout>
                <section className={`lg:flex ${inversed ? 'lg:flex-row-reverse' : 'lg:flex '}`}>
                    <aside className="[&>img]:rounded-xl [&>img]:overflow-hidden lg:flex-1">
                        {/* Mobile image */}
                        <img src={mobileImage} alt="Mobile headphones presentation" className="md:hidden" />

                        {/* Tablet image */}
                        <img src={tabletImage} alt="Mobile headphones presentation" className="hidden md:flex lg:hidden" />

                        {/* Desktop image */}
                        <img src={desktopImage} alt="Mobile headphones presentation" className="hidden lg:flex" />
                    </aside>

                    <aside className="md:flex md:flex-col items-center justify-center lg:flex-1 ">
                        <div className="text-center py-14 p-2 md:max-w-lg mx-auto lg:text-left">
                            <p className="text-primary-brown text-center lg:text-left" style={{ letterSpacing: '15px' }}>NEW PRODUCT</p>
                            <h2 className="text-4xl my-7">{title}</h2>
                            <p className="text-slate-400 mb-7">{content}</p>
                            <ButtonPrimary variant={ButtonVariant.FILL} onClickFunction={() => navigate(hrefLink)}>SEE PRODUCT</ButtonPrimary>
                        </div>
                    </aside>
                </section>
            </MaxWidthLayout>
        </article>
    )
}

export default LargeProductCard
