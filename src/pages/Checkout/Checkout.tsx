import { useLocation, useNavigate } from "react-router-dom"
import MaxWidthLayout from "../../Layouts/MaxWidthLayout";
import TextInput from "../../components/Input/TextInput";
import { INewProduct } from "../../components/Cart/Cart";
import ButtonPrimary, { ButtonVariant } from "../../components/Buttons/ButtonPrimary";







const Checkout = () => {

    const payload = useLocation();
    const { state } = payload;

    console.log(state.products);


    const navigate = useNavigate();

    const calculateSumOfProducts = () => {
        return state.products?.reduce((total: number, product: INewProduct) => total + product.itemIndividualPrice * product.qty, 0)
    };


    return (
        <div className="p-5 bg-gray">
            <MaxWidthLayout>
                <p role="button" className="text-slate-400 mt-10 ml-5" onClick={() => navigate(-1)}>Go Back</p>

                {/* Main container */}
                <section className="p-5 py-10 flex flex-col lg:flex-row">
                    <aside className="flex-1 p-4 bg-white rounded-xl py-14">
                        <h1 className="text-4xl">Checkout</h1>

                        {/* billing address */}
                        <div className="">
                            <p className="text-xl uppercase mt-10 text-primary-brown">Billing details</p>

                            <div>
                                <div className="sm:flex sm:gap-4">
                                    <div className="my-3 flex-1">
                                        <TextInput placeholder="Alexei Ward" label="Name" type="text" required />
                                    </div>
                                    <div className="my-3 flex-1">
                                        <TextInput placeholder="alexeiward@mail.com" label="Email Address" type="email" required />
                                    </div>
                                </div>
                                <div className="my-3 sm:max-w-sm">
                                    <TextInput placeholder="+281820901" label="Phone Number" type="tel" required />
                                </div>
                            </div>
                        </div>

                        {/* Shipping address */}
                        <div className="mt-16">
                            <p className="text-xl uppercase mt-10 text-primary-brown">Shipping details</p>

                            <div>
                                <div className="my-3 flex-1">
                                    <TextInput placeholder="1137 Williams Avenue" label="Address" type="text" required />
                                </div>
                                <div className="sm:flex sm:gap-4">
                                    <div className="my-3 flex-1">
                                        <TextInput placeholder="10001" label="Zip Code" type="number" required />
                                    </div>
                                    <div className="my-3 flex-1">
                                        <TextInput placeholder="New York" label="City" type="text" required />
                                    </div>
                                </div>
                                <div className="my-3 sm:max-w-sm">
                                    <TextInput placeholder="United States" label="Country" type="text" required />
                                </div>
                            </div>
                        </div>


                        {/* payment details */}
                        <div className="mt-16">
                            <p className="text-xl uppercase mt-10 text-primary-brown">Payment details</p>

                            <div className="my-3 flex-1">
                                <TextInput placeholder="Mastercard" label="Card Number" type="text" required />
                            </div>
                            <div className="sm:flex sm:gap-4">
                                <div className="my-3 flex-1">
                                    <TextInput placeholder="11/22" label="Expiry Date" type="text" required />
                                </div>
                                <div className="my-3 flex-1">
                                    <TextInput placeholder="123" label="CVC" type="text" required />
                                </div>
                            </div>
                        </div>

                    </aside>


                    {/* Right side  */}
                    <aside className="flex-1 p-10 lg:max-w-md lg:ml-5 bg-white rounded-xl h-fit">
                        <h1 className="text-2xl my-5 mb-7">Summary</h1>
                        <div>
                            {
                                state.products?.map((product: INewProduct, index: number) => {
                                    return (
                                        <div key={index} className="flex gap-5 my-5">
                                            <img src={product.image} alt={`${product.name} image `} width={100} height={100} className="rounded-xl" />
                                            <div className="flex flex-col justify-evenly">
                                                <p className="text-xl fonr-semibold">{product.name.includes('Headphones') ? product.name.split('Headphones') : product.name}</p>
                                                <p className="text-slate-400">{product.itemIndividualPrice}</p>
                                            </div>
                                            <p className="ml-auto text-slate-400 my-auto text-lg font-semibold">&times;{product.qty}</p>
                                        </div>
                                    )
                                })
                            }

                            {/* Total price */}
                            <p className="flex justify-between mt-10">
                                <span className="text-xl text-slate-500 uppercase">TOTAL</span>
                                <span className="text-xl font-semibold">$ {calculateSumOfProducts()}</span>
                            </p>
                            <p className="flex justify-between mt-2">
                                <span className="text-xl text-slate-500 uppercase">SHIPPING</span>
                                <span className="text-xl font-semibold">$ 50</span>
                            </p>
                            <p className="flex justify-between mt-2">
                                <span className="text-xl text-slate-500 uppercase">VAT (INCLUDED)</span>
                                <span className="text-xl font-semibold">$ {(11 / 100) * Number(calculateSumOfProducts())}</span>
                            </p>
                            <p className="flex justify-between my-10">
                                <span className="text-xl text-slate-500 uppercase">GRAND TOTAL</span>
                                <span className="text-xl font-semibold text-primary-brown">$ {calculateSumOfProducts() + 50}</span>
                            </p>

                            <ButtonPrimary onClickFunction={() => console.log(12)} variant={ButtonVariant.FILL}>
                                CONTINUE & PAY
                            </ButtonPrimary>
                        </div>
                    </aside>

                </section>
            </MaxWidthLayout>
        </div>
    )
}

export default Checkout
