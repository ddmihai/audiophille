import { Link } from "react-router-dom";
import MaxWidthLayout from "../../Layouts/MaxWidthLayout";
import audiophile from '../../assets/audiophile.png';
import { IoMdCart } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import MobileNav from "./MobileNav";




const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const switchHeaderMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-secondary-black px-5 z-50">
            <MaxWidthLayout>
                <div className="flex wrap items-center py-8 border-b border-white">
                    <IoIosMenu size={30} color="white" className="flex lg:hidden" onClick={switchHeaderMenu} />
                    <img
                        src={audiophile}
                        alt="AUDIOPHILE"
                        className="ml-auto md:ml-4"
                    />

                    <nav className="hidden lg:flex text-white mx-auto text-md font-thin [&>a]:mx-5 z-40">
                        <Link className="hover:text-primary-brown" to="/" onClick={() => console.log('Navigating to Home')}>HOME</Link>
                        <Link className="hover:text-primary-brown" to="/headphones" onClick={() => console.log('Navigating to Headphones')}>HEADPHONES</Link>
                        <Link className="hover:text-primary-brown" to="/speakers" onClick={() => console.log('Navigating to Speakers')}>SPEAKERS</Link>
                        <Link className="hover:text-primary-brown" to="/earphones" onClick={() => console.log('Navigating to Earphones')}>EARPHONES</Link>
                    </nav>

                    {/* Mobile Navigation */}
                    {isOpen && <MobileNav />}

                    <IoMdCart size={23} color="white" className="ml-auto" />
                </div>
                {isOpen && <MobileNav />}
            </MaxWidthLayout>
        </header>
    );
};

export default Header;
