import { createSlice } from '@reduxjs/toolkit';
//slice is like a container that define the initial state and the various functions(reducers) that modify or change the state

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {   //state is supplied here only, when calling via dispatch no need to supply this
        const {name, image, cost} = action.payload    //spreading the payload
        console.log(cost)
        const existingItem = state.items.find((item) => item.name === name)
        if (existingItem){
            existingItem.quantity ++;
        }
        else{
            state.items.push({...action.payload, quantity: 1})
        }
        
    
    },
    removeItem: (state, action) => {    //here the payload is the name of item itself
        const {name} = action.payload
        state.items = state.items.filter((item) => (item.name !== name))

    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload
        const existingItem = state.items.find((item) => (item.name === name))
        if (existingItem){
            existingItem.quantity = quantity
        }

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

