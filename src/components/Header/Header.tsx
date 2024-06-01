import { Link } from "react-router-dom";
import MaxWidthLayout from "../../Layouts/MaxWidthLayout"
import audiophile from '../../assets/audiophile.png';
import { IoMdCart } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import MobileNav from "./MobileNav";


const Header = () => {


    // Toggle between the header menu hide/reveal by state
    const [isopen, setisOpen] = useState<boolean>(false);
    const switchHeaderMenu = () => setisOpen(!isopen);




    return (
        <header className="bg-secondary-black px-5">
            <MaxWidthLayout>
                <div className="flex wrap items-center py-8 border-b border-white">
                    <IoIosMenu size={30} color="white" className="flex lg:hidden" onClick={switchHeaderMenu} />
                    <img
                        src={audiophile}
                        alt="AUDIOPHILE"
                        className="ml-auto md:ml-4"
                    />

                    <nav className="hidden lg:flex text-white gap-7 mx-auto text-md font-thin flex-1 justify-center">
                        <Link className="hover:text-primary-brown" to={'/'}>HOME</Link>
                        <Link className="hover:text-primary-brown" to={'/headphones'}>HEADPHONES</Link>
                        <Link className="hover:text-primary-brown" to={'/speakers'}>SPEAKERS</Link>
                        <Link className="hover:text-primary-brown" to={'/earphones'}>EARPHONES</Link>
                    </nav>

                    <IoMdCart size={23} color="white" className="ml-auto" />
                </div>

                {isopen && <MobileNav />}
            </MaxWidthLayout>
        </header>

    )
}

export default Header
