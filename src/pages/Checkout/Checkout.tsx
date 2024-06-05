import { useLocation, useNavigate } from "react-router-dom"
import MaxWidthLayout from "../../Layouts/MaxWidthLayout";
import TextInput from "../../components/Input/TextInput";


const Checkout = () => {

    const payload = useLocation();
    const { state } = payload;
    console.log(state.products);

    const navigate = useNavigate();



    return (
        <div className="p-5 bg-gray">
            <MaxWidthLayout>
                <p role="button" className="text-slate-400 my-10" onClick={() => navigate(-1)}>Go Back</p>

                {/* Main container */}
                <div className="bg-white rounded-xl p-5 py-10">
                    <h1 className="text-4xl">Checkout</h1>

                    {/* Billing details (email address, name, phone number) */}
                    <div>
                        <h2 className="text-2xl mt-10 text-primary-brown">Billing Details</h2>
                        <div>
                            <div className="flex flex-col sm:flex-row">
                                <TextInput placeholder={'Alexei Ward'} label={'Name'} type='text' required />
                                <TextInput placeholder={'alexeiward@mail.com'} label={'Email Address'} type='email' required />
                            </div>
                            <TextInput placeholder={'+1 234 567 89'} label={'Phone Number'} type='tel' required />
                        </div>


                    </div>
                </div>
            </MaxWidthLayout>
        </div>
    )
}

export default Checkout
