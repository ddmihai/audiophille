import { useEffect } from "react"
import AudioGear from "./components/AudioGear"
import Banner from "./components/Banner"
import EarPhones from "./components/EarPhones"
import Products from "./components/Products"
import ZX7Speaker from "./components/ZX7Speaker"
import ZspeakerBanner from "./components/ZspeakerBanner"


const Home = () => {



    const createStorage = () => {
        const cart = localStorage.getItem('cart');

        if (!cart) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
    }



    useEffect(() => createStorage(), []);


    return (
        <main>
            <Banner />
            <Products />
            <ZspeakerBanner />
            <ZX7Speaker />
            <EarPhones />
            <AudioGear />
        </main>
    )
}

export default Home
