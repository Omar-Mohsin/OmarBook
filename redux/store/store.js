import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/redux/auth/authSlice";
import postReducer from "@/redux/posts/postSlice"
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducers = combineReducers({

    auth  : authReducer,
    post  : postReducer,


})
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  
  };

  const persistedReducer = persistReducer(persistConfig, rootReducers);



export const store = configureStore({
    reducer: persistedReducer,
  

});


export const persistor = persistStore(store);

