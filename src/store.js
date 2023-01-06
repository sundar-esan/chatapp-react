//this store is used to hold the reducers and state
import {configureStore} from '@reduxjs/toolkit';
import userSlice from './features/userSlice';
import appApi from './services/appApi';

//persist our store(used to save the user )
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

//thunk is used to make asynchronous operations like signup the user 
import thunk from "redux-thunk";

//reducers 
const reducer = combineReducers({
    user: userSlice,
    [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    blackList: [appApi.reducerPath],
};

//persist our store 
const persistedReducer = persistReducer(persistConfig, reducer);

//creating our store 
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, appApi.middleware],
});

export default store;
