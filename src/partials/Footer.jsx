import { Link } from 'react-router-dom';
import { useState } from 'react';

function Footer () {
    // const [showFooter, setShowFooter] = useState(false);
    const email = 'info@thegallery.zest';
    const tele = '555555555'

    // const handleMouseDown = () => {
    //     if (showFooter) {
    //         setShowFooter(false)
    //     } else {
    //         setShowFooter(true)
    //     }
    // }

    return (
        <div className='wave-3 p-8 hover:bg-black drop-shadow-md text-[#444444] hover:text-white'>
            <div className='h-[90px] hover:h-auto active:h-auto focus:h-auto overflow-hidden w-full'>
                <div className='flex flex-col md:flex-row justify-start md:justify-evenly items-start mt-16'>
                    <div className='flex flex-col p-3'>
                        <h3 className='tracking-[0.2rem] font-semibold lowercase pointer-events-none select-none'>THE GALLERY.</h3>
                        <Link className="font-bold text-[#444444] uppercase pt-2 pb-2 hover:text-white" to={"/items/all/"}>ART</Link>
                        <Link className="font-bold text-[#444444] uppercase pt-2 pb-2 hover:text-white" to={"/creators/all/"}>CREATORS</Link>
                        <Link className="font-bold text-[#444444] uppercase pt-2 pb-2 hover:text-white" to={"/events/"}>EVENTS</Link>
                    </div>
                    <div className='flex flex-col mt-6 md:mt-0 p-3'>
                        <h3 className="tracking-[0.2rem] font-semibold lowercase pointer-events-none select-none">GET IN TOUCH.</h3>
                        <Link className="font-bold text-[#444444] uppercase pt-2 pb-2 hover:text-white" to={`https://www.google.com/maps/search/411+Yabba+Zabba+Blvd,+Houston,+Texas+77003/@29.7490957,-95.3541626,15z/`}>411 Yabba Zabba Blvd <br></br>Houston, Texas 77003</Link>
                        <Link className="font-bold text-[#444444] uppercase pt-2 pb-2 hover:text-white" to={`mailto:${email}`}>Email Us</Link>
                        <Link className="font-bold text-[#444444] uppercase pt-2 pb-2 hover:text-white" to={`tel:${tele}`}>Call Us</Link>
                        <Link to={"http://www.instagram.com/thegallerythegallerythegallery/"}>
                            <img className='hover:cursor-pointer w-[2rem] pt-2' src="https://i.imgur.com/SILGJAg.png" alt="ig logo" />
                        </Link>
                    </div>
                    <div className='flex flex-col pointer-events-none mt-6 md:mt-0 select-none p-3'>
                        <h3 className='tracking-[0.2rem] font-semibold lowercase'> HOURS. </h3>
                        <p className='font-bold text-[#444444] uppercase pt-2 '>MONDAY - SATURDAY: 10am - 5pm </p>
                        <p className='font-bold text-[#444444] uppercase pb-2'>SUNDAY: Closed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer