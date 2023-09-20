import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './user/userSlice'
import cartReducer from './cart/cartSlice'
import emailVerifyReducer from './emailVerify/emailVerifySlice'
import categoriesReducer from './categories/categoriesSlice'
import productReducer from './products/productSlice'
import directoryCategoriesReducer from './categories/directoryCategories/directoryCategoriesSlice'
import productFilterReducer from './products/ProductFilter/productsFilterSlice'
import orderIntentReducer from './order/orderIntent/orderIntentSlice'
import shippingDetailsReducer from './order/shippingDetails/shippingDetailsSlice'
import orderConfirmReducer from './order/orderConfirm/orderConfirmSlice'
import RecentlyAddedReducer from './products/RecentlyAdded/RecentlyAddedSlice'
import sizeReducer from './size/sizeSlice'

const userPersistConfig = {
    key: 'user',
    storage,
    whitelist: ['currentUser', 'jwt']
}

const cartPersistedConfig = {
    key: 'cart',
    storage,
    whitelist: ['cartItems', 'cartCount', 'cartSum', 'userCartMerged']
}

const orderIntentPersistedConfig = {
    key: 'orderIntent',
    storage,
    whitelist: ['item', 'validUntil']
}

const userPersistedReducer = persistReducer(userPersistConfig, userReducer)
const cartPersistedReducer = persistReducer(cartPersistedConfig, cartReducer)
const orderIntentPersistedReducer = persistReducer(orderIntentPersistedConfig, orderIntentReducer)

const combinedReducers = combineReducers({
    user: userPersistedReducer,
    cart: cartPersistedReducer,
    emailVerify: emailVerifyReducer,
    categories: categoriesReducer,
    directoryCategories: directoryCategoriesReducer,
    products: productReducer,
    productsFilter: productFilterReducer,
    orderIntent: orderIntentPersistedReducer,
    shippingDetails: shippingDetailsReducer,
    orderConfirm : orderConfirmReducer,
    recentlyAddedProducts : RecentlyAddedReducer,
    size : sizeReducer
})

export const store = configureStore({
    reducer: combinedReducers
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
