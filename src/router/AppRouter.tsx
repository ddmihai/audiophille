import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Headphones from "../pages/Headphones/Headphones";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Speakers from "../pages/Speakers/Speakers";
import EarPhones from "../pages/EarPhones/EarPhones";




const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/headphones" element={<Headphones />} />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/earphones" element={<EarPhones />} />
                <Route path="/product/:slug" element={<ProductDetail />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;
