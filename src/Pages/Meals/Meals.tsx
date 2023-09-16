import React, { useEffect } from 'react'
import Heading from '../../components/Heading'
import { Stack, Box, Typography, Grid } from '@mui/material'
import CategorySlider from './components/CategorySlider'
import mealImage from '../../assets/meal.jpg'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MealItem from './components/MealItem'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchMeals } from '../../redux/Slices/MealsSlice'
import MealsList from './components/MealsList'

const Meals = () => {






    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Heading name='categories' />
            <CategorySlider />
            <MealsList />
        </motion.div>
    )
}

export default Meals