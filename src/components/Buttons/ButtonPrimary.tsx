import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export enum ButtonVariant {
    FILL = 'FILL',
    OUTLINE = 'OUTLINE',
    GHOST = 'GHOST',
    DARK = 'DARK'
}

interface ButtonPrimaryProps {
    children: React.ReactNode;
    variant: ButtonVariant;
    onClickFunction: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, variant, onClickFunction }) => {
    let classStringStyles: string = '';

    switch (variant) {
        case ButtonVariant.FILL:
            classStringStyles = 'text-sm bg-primary-brown text-white py-3 px-7 hover:bg-secondary-brown';
            break;
        case ButtonVariant.OUTLINE:
            classStringStyles = 'text-sm bg-transparent py-3 px-7 text-black border border-black hover:bg-secondary-black hover:text-white';
            break;
        case ButtonVariant.GHOST:
            classStringStyles = 'text-sm flex bg-transparent items-center py-3 px-7 text-slate-500 hover:text-primary-brown';
            break;
        case ButtonVariant.DARK:
            classStringStyles = 'text-sm flex bg-black text-white items-center py-3 px-7 text-slate-500 hover:bg-secondary-black';
            break;
    }

    return (
        <button className={classStringStyles} onClick={onClickFunction}>
            {children}
            {variant === ButtonVariant.GHOST && <IoIosArrowForward size={23} className="text-primary-brown" />}
        </button>
    );
}

export default ButtonPrimary;
