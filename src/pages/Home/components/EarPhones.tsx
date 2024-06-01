import MaxWidthLayout from "../../../Layouts/MaxWidthLayout"


import earphones from '../../../assets/home/mobile/image-earphones-yx1.jpg'
import ButtonPrimary, { ButtonVariant } from "../../../components/Buttons/ButtonPrimary"


const EarPhones = () => {
    return (
        <section className="p-5">
            <MaxWidthLayout>
                <section className="gap-4 block sm:flex sm:flex-wrap ">
                    <article className="flex-1 basis-[400px]">
                        <img src={earphones} alt="Earphones image" className="rounded-xl " />
                    </article>

                    <article className="flex-1 p-4 basis-[400px] bg-gray rounded-xl flex items-center py-14 mt-2 sm:mt-0">
                        <div className="ml-[10%]">
                            <h2 className="text-3xl font-semibold">ZX7 SPEAKER</h2>
                            <div className="mt-16">
                                <ButtonPrimary onClickFunction={() => console.log(122)} variant={ButtonVariant.OUTLINE}>SEE PRODUCT</ButtonPrimary>
                            </div>
                        </div>
                    </article>
                </section>
            </MaxWidthLayout>
        </section>
    )
}

export default EarPhones
