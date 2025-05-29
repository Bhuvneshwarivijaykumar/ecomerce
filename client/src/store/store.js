import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductsSlice from "./admin/products-slice";
import adminOrderSlice from "./admin/order-slice";

import shopProductsSlice from "./shop/products-slice";
import shopCartSlice from "./shop/cart-slice";
import shopAddressSlice from "./shop/address-slice";
import shopOrderSlice from "./shop/order-slice";
import shopSearchSlice from "./shop/search-slice";
import shopReviewSlice from "./shop/review-slice";
import commonFeatureSlice from "./common-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,

    adminProducts: adminProductsSlice,
    adminOrder: adminOrderSlice,

    shopProducts: shopProductsSlice,
    shopCart: shopCartSlice,
    shopAddress: shopAddressSlice,
    shopOrder: shopOrderSlice,
    shopSearch: shopSearchSlice,
    shopReview: shopReviewSlice,

    commonFeature: commonFeatureSlice,
  },
});

export default store;
//Here we are using global store to manage the state of the application.
//We are using redux toolkit to create the store.
//We are using configureStore to create the store.
//We are using reducer to manage the state of the application.
//We are using authReducer to manage the state of the authentication.
//We are using adminProductsSlice to manage the state of the admin products.
//We are using adminOrderSlice to manage the state of the admin orders.
//We are using shopProductsSlice to manage the state of the shop products.
//We are using shopCartSlice to manage the state of the shop cart.
//We are using shopAddressSlice to manage the state of the shop address.
//We are using shopOrderSlice to manage the state of the shop order.
//We are using shopSearchSlice to manage the state of the shop search.
//We are using shopReviewSlice to manage the state of the shop review.
//We are using commonFeatureSlice to manage the state of the common feature.
//We are using createSlice to create the slice.
//We are using createAsyncThunk to create the async thunk.
//We are using createSlice to create the slice.
//We are using createAsyncThunk to create the async thunk.
//We are using createSlice to create the slice.
//We are using createAsyncThunk to create the async thunk.                                                