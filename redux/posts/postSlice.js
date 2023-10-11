import { createSlice } from "@reduxjs/toolkit";


const initialState ={

    posts : []

};


 const postSlice = createSlice({
    name  : 'post', 
    initialState , 

    reducers  : {
        addPost :{
            reducer(state , action ){    

                state.posts.push(action.payload);
            }
        }
    }
 })


 export default postSlice.reducer;
 export const {addPost} = postSlice.actions;

 export const SelectAllPosts = (state) => {
    return state.post.posts;

}
