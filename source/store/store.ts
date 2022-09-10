import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slice/userSlice";

import messagesSlice from "./slice/messagesSlice";

import displaySlice from "./slice/displaySlice";

import querySlice from "./slice/querySlice";

import loadingSlice from "./slice/loadingSlice";

import cartSlice from "./slice/cartSlice";


const store = configureStore({

  reducer: {

    user: userSlice,

    cart: cartSlice,

    query: querySlice,

    display: displaySlice,

    messages: messagesSlice,

    loading: loadingSlice

  }

});


export default store;