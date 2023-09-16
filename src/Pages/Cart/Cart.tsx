import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import Heading from '../../components/Heading'
import CartItem from './components/CartItem'
import Bill from './components/Bill'
import { useLocation } from 'react-router-dom'
import { motion } from "framer-motion"
import { useAppSelector } from '../../redux/store'

const Cart = () => {
    const location = useLocation()

    useEffect(() => {
        const element = document.getElementById('root') as HTMLElement;

        if (location.pathname === '/cart') {
            element.style.maxHeight = '55vh'
            element.style.overflowY = 'auto'
        }
        return () => {
            element.style.maxHeight = '100vh'
            element.style.overflowY = 'auto'
        }
    }, [])

    const cart = useAppSelector(state => state.cart)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Heading name="my cart" />
            {cart.order_items.length === 0 ? <Box sx={{ textAlign: 'center', fontSize: '1.2rem', color: '#333', fontWeight: 'bold', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>Your Cart Is Empty</Box> : <> <Box >
                <Grid spacing={2} container>
                    {cart.order_items.map((item) => {
                        return <Grid item xs={12} md={6} lg={4} ><CartItem item={item} /></Grid>
                    })}
                </Grid>
            </Box>
                <Bill /> </>}
        </motion.div>
    )
}

export default Cart