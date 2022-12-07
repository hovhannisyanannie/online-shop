const cart = [];

const CartReducer = (state = cart, action) => {

    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((item) => item.id === action.payload.id);
            if(exist) {
                return state.map((item) => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item);
            } else {
                return [
                    ...state,
                    {
                        ...action.payload,
                        qty: 1,
                    }
                ]
            }

           case "REMOVEITEM":                    
                return state.filter((item) => item.id !== action.payload.id)
            case "DELETEITEM":
                const existOne = state.find((item) => item.id === action.payload.id);
                if(existOne.qty === 1) {
                    
                    return state.filter((item) => item.id !== existOne.id);
                } else {
                    return state.map((item) => item.id === action.payload.id ? {...item, qty: item.qty - 1} : item);
                }

            default:
            return state;
    }
}

export default CartReducer
























// import { createSlice } from '@reduxjs/toolkit';
// const HandleCart = createSlice({
//   name: 'cart',
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const itemInCart = state.cart.find((item) => item.id === action.payload.id);
//       if (itemInCart) {
//         itemInCart.quantity++;
//       } else {
//         state.cart.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     incrementQuantity: (state, action) => {
//       const item = state.cart.find((item) => item.id === action.payload);
//       item.quantity++;
//     },
//     decrementQuantity: (state, action) => {
//       const item = state.cart.find((item) => item.id === action.payload);
//       if (item.quantity === 1) {
//         item.quantity = 1
//       } else {
//         item.quantity--;
//       }
//     },
//     removeItem: (state, action) => {
//       const removeItem = state.cart.filter((item) => item.id !== action.payload);
//       state.cart = removeItem;
//     },
//   },
// });


// export const cartReducer = HandleCart.reducer;
// export const {
//   addToCart,
//   incrementQuantity,
//   decrementQuantity,
//   removeItem,
// } = HandleCart.actions;