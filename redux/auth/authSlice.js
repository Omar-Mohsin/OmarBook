import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user : null,
    id : null,
    
}
export const authSlice = createSlice({
name : "auth", 
initialState , 
reducers :{

    setUser: {
    reducer (state, action){
        state.user = action.payload;
        state.id = action.payload.uid;

    }},
    removeUser: {
        reducer (state , action){
            state.user = null;
            state.id = null;

        }},

}, 



})




export const SelectUser =(state)=>{
    return state.auth.user;

}
export const SelectId =(state)=>{
    return state.auth.id;

}

export default authSlice.reducer;

export const {setUser , removeUser} = authSlice.actions;