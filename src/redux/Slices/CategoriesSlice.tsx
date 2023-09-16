import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BaseURL } from '../../API/BaseURL'
export interface Category {
    id: number,
    name: string,
    image: string,
    created_at: string,
    updated_at: string,
}



interface CategoryState {
    categories: Category[]
    isLoading: boolean,
    isError: boolean
}

const initialState: CategoryState = {
    categories: [],
    isLoading: false,
    isError: false
}

export const fetchCategories = createAsyncThunk('category/fetch', async () => {
    const response = await fetch(`${BaseURL}/categories`, {
        method: 'GET',
    })
    const data = response.json();

    return data
})


export const CategorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.categories = action.payload.data
            })
            .addCase(fetchCategories.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false;

            })

    }
})

export default CategorySlice.reducer;
