import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { close_cart, open_cart } from '../store/actions';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Cart ({ cartVisible, open_cart, close_cart, cart }) {
    const navigate = useNavigate();

    const calculateCart = () => cart.reduce((total, item) => total + item.current_price, 0);
    let cartTotal = calculateCart();

    const toggleCart = () => {
        if (cartVisible) {
            close_cart();
            console.log(cartVisible)
        } else {
            open_cart()
            console.log(cartVisible)
        }
    }

    const handleItemClick = (item) => {
        close_cart();
        navigate(`/items/${item.id}/`);
    };

    useEffect(() => {
        if (cart.length > 0) {
            calculateCart()
        }
    }, [cart])

    if (cartVisible) return (
        <motion.div 
            className='fixed top-0 right-0 flex flex-col items-center justify-between p-10 z-50 bg-[#0b0b0b] hover:bg-black w-full md:w-1/3 h-full'
            initial={{ right: '-100%' }}
            animate= {{ right: 0 }}
            exit={{ right: '-100%'}}
            transition={{  duration: 0.25 }}
        >
            <div className='flex flex-col items-center justify-center'>
                <div onClick={() => toggleCart()} className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <div className='flex flex-row items-center justify-center mb-5 mt-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="size-8 hover:stroke-black">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <p className='text-white px-2 font-base text-xl'>
                        CART (<span>{cart.length}</span>)
                    </p>
                </div>
                {cart.length === 0 && (
                        <p className='text-white mt-10'>The cart is empty.</p>
                    )}
            </div>
          
            <div className='flex flex-col items-center justify-center'>
                {cart.length > 0 && (
                    <>
                    <div className='overflow-y-scroll h-[30rem] w-full flex flex-col items-center justify-start mt-5'>
                        {cart.map((item, index) => (
                            <div id={index} className='flex flex-row items-center justify-between mb-5 w-full' style={{ color: 'white' }}>
                                <img
                                    className='tile w-[7rem] h-[7rem] object-cover rounded-lg drop-shadow-md fancy-hover'
                                    src={item.image} 
                                    alt={item.title}
                                    onClick={() => handleItemClick(item)}
                                />
                                <div className='flex flex-row items-center justify-center mx-5'>
                                    <span className='text-sm mx-1'>
                                        {item.title.length > 50
                                        ? item.title.substring(0, 40) + '...'
                                        : item.title}
                                    </span> 
                                    <span className='text-sm font-bold mx-1'>
                                        ${item.current_price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='pb-5 mb-24 flex flex-col items-center justify-center'>
                        <span className='text-white font-bold mb-3'>Total ${cartTotal}</span>
                        <button className='bg-[#00cf29] text-xl font-semibold hover:bg-[#0b8c0b] cursor-pointer px-6 py-2 rounded-lg text-white tracking-widest'>CHECKOUT</button>
                   </div>
                   </>
                )}
            </div>
            
         

        </motion.div>
    )
}

const mapStateToProps = state => ({
    cartVisible: state.cartVisible,
    cart: state.cart
})

export default connect(mapStateToProps, { close_cart, open_cart })(Cart);