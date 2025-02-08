import { Link } from 'react-router-dom';

function Footer () {
    const email = 'info@thegallery.zest';
    const tele = '555555555'

    return (
        <div className='wave-3 p-10 hover:bg-black'>
            <div className='h-[30px] hover:h-auto focus:h-auto overflow-hidden'>
                <div className='mt-10 flex flex-col md:flex-row  items-start justify-around text-white'>
                    <div className='flex flex-col mt-3'>
                        <h3 className='tracking-[0.2rem] font-semibold lowercase pointer-events-none'>THE GALLERY.</h3>
                        <Link className="font-bold text-[#444444] uppercase pt-2 pb-2 hover:text-white" to={"/items/all/"}>ART</Link>
                        <Link className="font-bold text-[#444444] uppercase pt-2 pb-2 hover:text-white" to={"/creators/all/"}>CREATORS</Link>
                        <Link className="font-bold text-[#444444] uppercase pt-2 pb-2 hover:text-white" to={"/events/"}>EVENTS</Link>
                    </div>
                    <div className='flex flex-col mt-6 md:mt-0'>
                        <h3 className="tracking-[0.2rem] font-semibold lowercase pointer-events-none">GET IN TOUCH.</h3>
                        <Link className="font-bold text-[#444444] uppercase pt-2 pb-2 hover:text-white" to={`https://www.google.com/maps/search/411+Yabba+Zabba+Blvd,+Houston,+Texas+77003/@29.7490957,-95.3541626,15z/`}>411 Yabba Zabba Blvd <br></br>Houston, Texas 77003</Link>
                        <Link className="font-bold text-[#444444] uppercase pt-2 pb-2 hover:text-white" to={`mailto:${email}`}>Email Us</Link>
                        <Link className="font-bold text-[#444444] uppercase pt-2 pb-2 hover:text-white" to={`tel:${tele}`}>Call Us</Link>
                        <Link to={"http://www.instagram.com/thegallerythegallerythegallery/"}>
                            <img className='hover:cursor-pointer w-[2rem] pt-2' src="https://i.imgur.com/SILGJAg.png" alt="ig logo" />
                        </Link>
                    </div>
                    <div className='flex flex-col pointer-events-none mt-8 md:mt-0'>
                        <h3 className='tracking-[0.2rem] font-semibold lowercase'> HOURS. </h3>
                        <p className='font-bold text-[#444444] uppercase pt-2 pb-2 hover:text-white '>MONDAY - SATURDAY: 10am - 5pm </p>
                        <p className='font-bold text-[#444444] uppercase pt-2 pb-2 hover:text-white'>SUNDAY: Closed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer