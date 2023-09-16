import { configureStore } from "@reduxjs/toolkit";
import { CategorySlice } from "./Slices/CategoriesSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { MealsSlice } from "./Slices/MealsSlice";
import { CartSlice } from "./Slices/CartSlice";


export const store = configureStore({
    reducer: {
        categories: CategorySlice.reducer,
        meals: MealsSlice.reducer,
        cart: CartSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector