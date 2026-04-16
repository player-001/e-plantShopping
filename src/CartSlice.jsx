import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload
        const existingItem = state.items.find((item) => item.name === name)
        if (isPresent){
            existingItem.quantity ++;
        }
        else{
            state.items.push({...action.payload, quantity: 1})
        }
        
    
    },
    removeItem: (state, action) => {
        state.items.filter((name) => (name != action.payload))
    },
    updateQuantity: (state, action) => {
        const {name, amount} = action.payload
        const existingItem = state.items((item) => (item.name === name))
        if (existingItem){
            existingItem.quantity = amount
        }

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

