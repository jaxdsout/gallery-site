import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { close_cart, open_cart } from '../store/actions';
import { motion, AnimatePresence } from 'framer-motion';

function Cart ({ cartVisible, open_cart, close_cart, cart }) {

    const toggleCart = () => {
        if (cartVisible) {
            close_cart();
            console.log(cartVisible)
        } else {
            open_cart()
            console.log(cartVisible)

        }
    }
    return (
        <>
            {cartVisible && (
                <AnimatePresence>
                <motion.div 
                    className='absolute top-0 right-0 flex flex-col items-center justify-start p-10 z-50 bg-black w-1/3 h-screen'
                    initial={{ right: '-100%' }}
                    animate= {{ right: 0 }}
                    exit={{ right: '-100%'}}
                    transition={{  duration: 0.2, delay: 0.1 }}
                >
                    <div onClick={() => toggleCart()} className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                  
                    </div>
                    {cart.length === 0 && (
                        <p className='text-white mt-10'>The cart is empty.</p>
                    )}
            
                </motion.div>
                </AnimatePresence>
        
            )}
        </>
 

    )

}

const mapStateToProps = state => ({
    cartVisible: state.cartVisible,
    cart: state.cart
})

export default connect(mapStateToProps, { close_cart, open_cart })(Cart);