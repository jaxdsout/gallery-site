import {
  OPEN_CART,
  CLOSE_CART,
  INSERT_CART

} from './types'

export const close_cart = () => dispatch => {
    try {
        dispatch({
            type: CLOSE_CART
        });
    } catch(err) {
        console.error(err)
    }
}

export const open_cart = () => dispatch => {
    try {
        dispatch({
            type: OPEN_CART
        });
    } catch(err) {
        console.error(err)
    }
}

export const insert_cart = (item) => dispatch => {
    try {
        console.log(item)

        dispatch({
            type: INSERT_CART,
            payload: item
        });
    } catch(err) {
        console.error(err)
    }
}