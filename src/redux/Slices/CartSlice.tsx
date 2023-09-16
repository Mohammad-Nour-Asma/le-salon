import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface MealItem {
    meal_id: number,
    image: string,
    quantity: number,
    note: string,
    meal_name: string,
    total_price: number,
    price_per_one: number,
}

interface Cart {
    total: number,
    table_id: number | null,
    order_items: MealItem[]
}

const initialState: Cart = {
    total: 0,
    table_id: null,
    order_items: []
}

export const totalReducer = (state: Cart) => {
    state.total = state.order_items.reduce((total, item) => total + item.total_price, 0);
};

export const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        addToCart: (state, action: PayloadAction<MealItem>) => {
            const item = state.order_items.find(item => item.meal_id === action.payload.meal_id)
            if (item) {
                item.quantity += action.payload.quantity;
                item.total_price = item.quantity * item.price_per_one
                item.note = action.payload.note
            }
            else {
                state.order_items.push(action.payload)
            }
            totalReducer(state);
        },
        increase: (state, action: PayloadAction<{ id: number }>) => {
            const item = state.order_items.find(item => item.meal_id === action.payload.id)
            if (item) {
                item.quantity++
                item.total_price += item.price_per_one
            }
            totalReducer(state);

        },
        decrease: (state, action: PayloadAction<{ id: number }>) => {
            const item = state.order_items.find(item => item.meal_id === action.payload.id)
            if (item && item.quantity > 1) {
                item.quantity--
                item.total_price -= item.price_per_one
            }
            if (item?.quantity === 1) {
                const newOrderItem = state.order_items.filter(item => item.meal_id !== action.payload.id)
                state.order_items = newOrderItem;
            }
            totalReducer(state);

        },
        emptyCart: (state) => {
            return initialState
        }
    }

})

export const { addToCart, increase, decrease, emptyCart } = CartSlice.actions


