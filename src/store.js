import { configureStore } from '@reduxjs/toolkit';
//the store contains all the slices
import cartReducer from './CartSlice';
 const store = configureStore({
    reducer: {
        cart: cartReducer,  //we assign cartSlice to store, so we can access it from store later
    },
});
export default store
