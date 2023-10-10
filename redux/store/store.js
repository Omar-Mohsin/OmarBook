import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/redux/auth/authSlice";


const rootReducers = combineReducers({

    auth  : authReducer,

})


export const store = configureStore({
    reducer: rootReducers,
  

});


