import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name:'cart',
    initialState:{
        cartItems: []
    },

    reducers:{
        addItemToCart:(state,action) =>{
            const timeId = new Date().getTime()
            state.cartItems.push({
                id: timeId,
                dressId: action.payload.dress.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity*action.payload.dress.price
            })
        },
        removeItemToCart: (state,action) =>{
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id!==action.payload.cartItemId)
        },
        deleteAll:(state,action)=>{
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id!==action.payload.cartItemId)
            return []
        }
        }
    }
)


export const getTotalPrice = state =>{
    return state.cart.cartItems.reduce((total,cartItems) =>{
        return cartItems.totalPrice + total
    },0)
}
export const getCartItems = state=>state.cart.cartItems;
export const {addItemToCart,removeItemToCart, deleteAll} = slice.actions;
export default slice.reducer;





