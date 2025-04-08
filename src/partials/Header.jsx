import { Link } from 'react-router-dom';

function Header () {
    return (
        <div className='wave-1 p-8 hover:bg-black drop-shadow-md'>
            <div className='flex flex-row justify-between items-center h-[130px] -mt-8 mb-4'>
                <div>
                <Link to={"/"}>
                    <p className="text-3xl md:text-5xl text-white tracking-widest lowercase select-none font-bold text-nowrap">THE GALLERY.</p>
                </Link>
                </div>
                <div className='flex flex-row items-baseline'>
                    <Link to={"/items/all/"}><button className='ml-2 mr-2 md:ml-0 md:mr-4 rounded-md bg-[#1b1b1b] text-white pl-6 pr-6 pt-2 pb-2 tracking-widest text-sm font-semibold border-2 border-[#242424] hover:bg-[#848484] g-button'>ART</button></Link>
                    <Link to={"/events/"}><button className='mr-2 md:mr-4 rounded-md bg-[#1b1b1b] text-white pl-6 pr-6 pt-2 pb-2 tracking-widest text-sm font-semibold border-2 border-[#242424] hover:bg-[#848484] g-button'>EVENTS</button></Link>
                </div>
            </div>
           
        </div>
    )
}

export default Header