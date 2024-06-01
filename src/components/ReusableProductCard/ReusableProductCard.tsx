import { useNavigate } from 'react-router-dom';
import ButtonPrimary, { ButtonVariant } from '../Buttons/ButtonPrimary';


// { title, image, hrefLink }: { title: string, image: string, hrefLink: string }
const ReusableProductCard = ({ title, image, hrefLink }: { title: string, image: string, hrefLink: string }) => {

    const navigate = useNavigate();


    return (
        <aside className='min-h-[310px] flex-1 max-w-[450px] flex flex-col basis-[250px]'>
            <article className='bg-gray mt-auto flex-1 max-h-[60%] flex rounded-xl justify-center'>

                <div className='text-center flex justify-center flex-col items-center mt-14'>
                    <img src={image} alt="Image presentation" width={200} height={200} className='-mt-[80%]' />
                    <h2 className='text-xl text-center'>{title}</h2>
                    <ButtonPrimary
                        onClickFunction={() => navigate(hrefLink)}
                        variant={ButtonVariant.GHOST}>SHOP</ButtonPrimary>
                </div>
            </article>
        </aside>
    )
}

export default ReusableProductCard
