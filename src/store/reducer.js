import {
    OPEN_CART, 
    CLOSE_CART,
    INSERT_CART,
    REMOVE_CART,
    DROP_CART
} from './types';

const initialState = {
    cartVisible: false,
    cart: []
};

export default function rootReducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case OPEN_CART:
            return {
                ...state,
                cartVisible: true
            }
        case CLOSE_CART:
            return {
                ...state,
                cartVisible: false
            }
        case INSERT_CART:
            return {
                ...state,
                cart: [...state.cart, payload ]
            }
        case REMOVE_CART:
            return {
                ...state,
                cart: [...state.cart.filter(payload => payload.id !== payload )]
            }
        case DROP_CART:
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}