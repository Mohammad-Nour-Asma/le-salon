import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BaseURL } from "../../API/BaseURL"

export interface Meal {
    id: number,
    name: string,
    description: string,
    image: string,
    price: number,
}


interface MealsState {
    meals: Meal[],
    category_id: number,
    category_name: string,
    isLoading: boolean,
    isError: boolean
}

const initialState: MealsState = {
    meals: [],
    isLoading: false,
    isError: false,
    category_id: 1,
    category_name: ''
}

export const fetchMeals = createAsyncThunk('Meals/fetch', async (payload: { id: number }, thunkAPI) => {

    const response = await fetch(`${BaseURL}/categories/${payload.id}`, {
        method: 'GET',
    })
    const data = response.json();

    return data
})

export const MealsSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMeals.fulfilled, (state, action) => {
                state.meals = action.payload.data.meals
                state.category_id = action.payload.data.id
                state.category_name = action.payload.data.name
                state.isLoading = false
            })
            .addCase(fetchMeals.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchMeals.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true

            })
    }
})