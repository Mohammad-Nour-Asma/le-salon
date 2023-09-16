import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { BaseURL } from "../../../API/BaseURL";
import { emptyCart } from "../../../redux/Slices/CartSlice";
import Loader from "../../../components/loader/loader";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


type Order_Item = {
    meal_id: number,
    note: string,
    quantity: number,
}


type Order = {
    order_items: Order_Item[],
    table_id: number
}

type OrderState = {
    isLoading: boolean,
    isError: boolean,
    order: Order
}

const initialStateOrder: OrderState = {
    isLoading: false,
    isError: false,
    order: {
        table_id: 1,
        order_items: []
    }

}


const Bill = () => {
    const cart = useAppSelector(state => state.cart)
    const [orderInfo, setOrderInfo] = useState<OrderState>(initialStateOrder)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const sendOrder = async () => {
        const orderItems = (cart.order_items.map((item) => { return { meal_id: item.meal_id, note: item.note, quantity: item.quantity } }));

        setOrderInfo(prev => {
            return {
                ...prev, isLoading: true, order: {
                    table_id: 1,
                    order_items: orderItems
                }
            }
        })


        axios.post(`${BaseURL}/orders`, {
            table_id: 1,
            order_items: orderItems
        })
            .then((response) => {
                dispatch(emptyCart());
                navigate('/')

            })
            .catch((error) => {
                console.error(error);
            });


    }


    return (
        <Box
            sx={{
                padding: "2rem",
                background: "#eee",
                position: "fixed",
                width: "100%",
                height: "33vh",
                bottom: "0",
                left: "0",
                borderRadius: '20px 20px 0 0',
                opacity: '0.9',
                filter: 'drop-shadow(3px 0px 27px #999)'
            }}
        >
            {orderInfo.isLoading ? <Loader /> : <>
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    my={3}
                    px={'1rem'}
                >
                    <Typography fontSize={"1.2rem"}>Total payable</Typography>
                    <Typography fontSize={"1.4rem"}>{cart.total}SR</Typography>
                </Stack>
                <button
                    onClick={() => { sendOrder() }}
                    style={{
                        color: 'white',
                        background: '#313131',
                        fontWeight: 'bold',
                        width: '100%',
                        fontSize: '1rem',
                        borderRadius: '10px',
                        padding: '1rem '
                    }}>Confirm Order</button></>}
        </Box>
    );
};

export default Bill;
