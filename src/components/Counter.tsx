import React from 'react'
import { Box, Stack, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { decrease, increase } from '../redux/Slices/CartSlice';
type counterProps = {
    color: string,
    id: number
}
const Counter = ({ color, id }: counterProps) => {
    const { order_items } = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()
    const item = order_items.find(item => item.meal_id === id)
    let quntity = 1
    if (item) {
        quntity = item.quantity
    }
    const increaseQunHandler = () => {
        dispatch(increase({ id }))
    }
    const decreaseQunHandler = () => {
        dispatch(decrease({ id }))
    }
    return (
        <Stack direction={'row'} gap={2} sx={{
            background: color,
            padding: ' 0.3rem 0.1rem',
            borderRadius: '5px',
            fontSize: '1rem'
        }}>
            <button onClick={increaseQunHandler}><AddIcon sx={{ fontSize: '1rem' }} /></button>
            <Typography fontSize={'1rem'} fontWeight={'bold'}>{quntity}</Typography>
            <button onClick={decreaseQunHandler}><RemoveIcon sx={{ fontSize: '1rem' }} /></button>
        </Stack>
    )
}

export default Counter