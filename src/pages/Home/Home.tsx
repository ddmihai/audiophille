import AudioGear from "./components/AudioGear"
import Banner from "./components/Banner"
import EarPhones from "./components/EarPhones"
import Products from "./components/Products"
import ZX7Speaker from "./components/ZX7Speaker"
import ZspeakerBanner from "./components/ZspeakerBanner"


const Home = () => {
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
