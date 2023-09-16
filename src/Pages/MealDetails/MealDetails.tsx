import { Box, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import mealDetails from "../../assets/mealDetails.jpg";
import Heading from "../../components/Heading";

import Counter from "../../components/Counter";
import { motion } from 'framer-motion'
import { useParams } from "react-router-dom";
import { BaseURL, ImageURL } from "../../API/BaseURL";
import { Meal } from "../../redux/Slices/MealsSlice";
import { addToCart } from "../../redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

type MealInfoState = {
    isLoading: boolean,
    isError: boolean,
    meal: Meal
}

const mealStateInitialState: MealInfoState = {
    isLoading: false,
    isError: false,
    meal: {
        id: 0,
        name: '',
        description: '',
        image: '',
        price: 0,
    }

}

const MealDetails = () => {
    const { id } = useParams();
    const [mealInfo, setMealInfo] = useState<MealInfoState>(mealStateInitialState)
    const dispatch = useDispatch()
    const noteRef = useRef<HTMLInputElement | null>(null)
    const addToCartHandler = () => {
        let note;
        if (noteRef?.current) {
            note = noteRef.current.value
            console.log(noteRef.current.value)
        }
        dispatch(addToCart({
            meal_id: Number(mealInfo.meal?.id),
            image: mealInfo?.meal?.image,
            quantity: 1,
            note: note ? note : '',
            meal_name: mealInfo.meal.description,
            total_price: mealInfo.meal.price,
            price_per_one: mealInfo.meal.price,
        }))

    }

    const getMeal = async () => {
        setMealInfo(prev => {
            return { ...prev, isLoading: true }
        })

        try {
            const response = await fetch(`${BaseURL}/meals/${id}`, {
                method: 'GET',
            })
            const data = await response.json();
            setMealInfo(prev => {
                return { ...prev, isLoading: false, meal: data.data }
            })

        } catch (error) {
            setMealInfo(prev => {
                return { ...prev, isLoading: false, isError: true }
            })
        }

    }
    useEffect(() => {
        getMeal()
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* BAckgorund IMAGE */}
            <Box
                sx={{
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "60vh",
                    position: "absolute",
                    backgroundImage: `url(${ImageURL}${mealInfo.meal?.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    top: '0',
                    left: '0',
                    zIndex: '-1'

                }}
            ></Box>
            <Box
                sx={{
                    position: 'absolute'
                    ,
                    padding: '2rem',
                    top: '55vh',
                    textAlign: 'center',
                    width: '100%',
                    left: '0',
                    background: '#eee',
                    borderRadius: '20px 20px 0 0',
                    opacity: '0.9',
                    filter: 'drop-shadow(8px -35px 32px black)'

                }}>

                <Typography color={"#333"} fontWeight={'600'} fontSize={'1.3rem'}>{mealInfo?.meal?.name}</Typography>
                <Typography color={"#333"} m={"0 auto"} sx={{
                    width: { xs: '98%', sm: '80%', md: '70%', lg: '60%' }
                }}>{mealInfo.meal?.description}</Typography>
                <Box sx={{ textAlign: 'center', margin: '1rem auto', width: '60%' }}>
                    <Heading name={"note to kitchen"} />
                    <TextField
                        fullWidth
                        rows={2}
                        multiline
                        inputRef={noteRef}

                    />
                </Box>

                <Stack sx={{
                    width: { xs: '98%', sm: '80%', md: '70%', lg: '60%' },
                    margin: '2rem auto 1rem'

                }} justifyContent={'center'} direction={'row'}>

                    <Link to={'/cart'} onClick={addToCartHandler} style={{
                        background: '#333',
                        padding: '0.5rem 1rem',
                        color: '#eee',
                        borderRadius: '10px',
                        fontWeight: "bold"
                    }}>Add To Cart</Link>
                </Stack>
            </Box>
        </motion.div>
    );
};

export default MealDetails;
