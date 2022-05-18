const initialState = { favorites: [], cart: [] }
export default function reducer(state = initialState, action) {
    if (action.type === 'addToWishList') {
        return { ...state, favorites: state.favorites.concat(action.product) }
    }
    if (action.type === 'addToCart') {
        return { ...state, cart: state.cart.concat(action.product) }
    }
    if (action.type === 'removeFromWishList') {
        return { ...state, favorites: state.favorites.filter(product => product.id !== action.product.id) }
    }
    if (action.type === 'removeFromCart') {
        return { ...state, cart: state.cart.filter(product => product.id !== action.product.id) }
    }

    return state
}