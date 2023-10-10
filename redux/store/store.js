import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/redux/auth/authSlice";
import postReducer from "@/redux/posts/postSlice"

const rootReducers = combineReducers({

    auth  : authReducer,
    post  : postReducer,


})


export const store = configureStore({
    reducer: rootReducers,
  

});


