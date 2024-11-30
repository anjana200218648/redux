import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    products:[],
}

const cardSlice = createSlice({
    name:'card',
    initialState,
    reducers:{
        

    },
   
})

export const {setProducts}=cardSlice.actions;
export default cardSlice.reducer