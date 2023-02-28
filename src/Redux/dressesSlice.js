import {createSlice} from '@reduxjs/toolkit';

export const dressesSlice = createSlice ({
    name: 'dresses',
    initialState:{
        selectedCategory: 'CASUAL DRESSES'
    },

    reducers:{
    fileredCategory:(state,action)=>{
        state.selectedCategory=action.payload
    }
    }
})

export  default dressesSlice.reducer;
export const getSelectedCategory = state =>state.dresses.selectedCategory;
export const {fileredCategory}=dressesSlice.actions;
