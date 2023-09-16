import { Grid } from '@mui/material'
import React from 'react'
import MealItem from './MealItem'
import { useAppSelector } from '../../../redux/store'
import Loader from '../../../components/loader/loader'
import { Meal } from '../../../redux/Slices/MealsSlice'

const MealsList = () => {
    const { isLoading, isError, meals } = useAppSelector(state => state.meals)

    if (isLoading) {
        return <Loader />
    }

    return (
        <Grid spacing={2} container >

            {meals.map((meal: Meal, index) => {

                return <Grid key={index} item xs={12} md={6} lg={4} >
                    <MealItem meal={meal} />
                </Grid>

            })}

        </Grid>
    )
}

export default MealsList