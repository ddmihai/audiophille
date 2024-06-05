import React, { FC } from "react";
import MaxWidthLayout from "../../../Layouts/MaxWidthLayout";



interface IInsedeBoxElements {
    quantity: number,
    item: string
};

interface IFeatures {
    features: string;
    inTheBox: IInsedeBoxElements[]
};




const ProductFeatures: FC<IFeatures> = ({ features, inTheBox }) => {


    const splitFeaturesParagraph = (features: string) => {
        const textWithBreaks = features.split('\n').map((text, index) => (
            <React.Fragment key={index}>
                <p className="text-slate-400">{text}</p>
                <br />
            </React.Fragment>
        ));

        return <div>{textWithBreaks}</div>;
    }

    return (
        <article className="p-5">
            <MaxWidthLayout>
                <div className="lg:flex">
                    <div className="basis-[500px] flex-1">
                        <h2 className="mt-16 mb-10 text-3xl">FEATURES</h2>
                        {splitFeaturesParagraph(features)}
                    </div>

                    {/* Box includes */}
                    <div className="md:flex md:justify-between px-5 max-w-lg lg:flex-col basis-[400px] flex-1 lg:justify-normal">
                        <div className="max-w-fit lg:ml-20">
                            <h2 className="mb-5 mt-16 text-3xl">IN THE BOX</h2>
                            <ul className="md:mt-10 lg:mt-8 list-none">
                                {
                                    inTheBox.map((element, index) => (
                                        <li key={index} className="my-4">
                                            <span className="text-primary-brown pr-4 font-semibold">{element.quantity}x </span>
                                            <span className="text-slate-400">{element.item}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </MaxWidthLayout>
        </article>
    );
}

export default ProductFeatures;
