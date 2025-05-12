import { Link } from 'react-router-dom';
import { useNavigate, useLocation, matchPath } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { close_cart, open_cart } from '../store/actions';
import { isMatch } from 'date-fns';

function Header ({ cartVisible, close_cart, open_cart }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [cartPath, setCartPath] = useState(false);

    const toggleCart = () => {
        if (cartVisible) {
            close_cart();
            console.log(cartVisible)
        } else {
            open_cart()
            console.log(cartVisible)

        }
    }
    

    useEffect(() => {
        if (
            location.pathname === '/items/all' ||
            location.pathname === '/items/featured' ||
            matchPath({ path: '/items/:id', end: true }, location.pathname)
        ) {
            setCartPath(!!isMatch)
        }
    }, [location.pathname])



    return (
        <div className='wave-1 p-8 hover:bg-black drop-shadow-md'>
            <div className='flex flex-row justify-between items-center h-[130px] -mt-8 mb-4'>
                <div>
                <Link to={"/"}>
                    <p className="text-3xl md:text-5xl text-white tracking-widest lowercase select-none font-bold text-nowrap hover:text-black">THE GALLERY.</p>
                </Link>
                </div>
                <div className='flex flex-row items-baseline'>
                    <div onClick={() => navigate("/items/all")} className='cursor-pointer mx-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="size-8 hover:stroke-black">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </div>
                    <div onClick={() => navigate("/events")} className='cursor-pointer mx-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="size-8 hover:stroke-black">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                    </div>
                    {cartPath && (
                        <div onClick={() => toggleCart()} className='cursor-pointer mx-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="size-8 hover:stroke-black">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>
                    )}
                  
                </div>
            </div>
           
        </div>
    )
}

const mapStateToProps = state => ({
    cartVisible: state.cartVisible,
})

export default connect(mapStateToProps, { close_cart, open_cart })(Header);