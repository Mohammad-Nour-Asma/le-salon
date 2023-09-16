import React from 'react'
import { Typography } from '@mui/material'
import { fetchMeals } from '../../../redux/Slices/MealsSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { useSelector } from 'react-redux';

type categoryButtonProps = {
    name: string,
    id: number,
}
const CategoryButton = ({ name, id }: categoryButtonProps) => {
    const dispatch = useAppDispatch();
    const handleSelectCategory = () => {
        dispatch(fetchMeals({ id }));
    }

    const mealsCategoryId = useAppSelector(state => state.meals.category_id);

    return (
        <button style={{
            display: 'block',
            margin: '0 auto',
            background: mealsCategoryId === id ? '#333' : '#eee',
            borderRadius: '6px',
        }}
            onClick={handleSelectCategory}

        >

            <Typography sx={{
                fontSize: '1.2',
                padding: '0.4rem 0.8rem',
                width: 'fit-content',
                color: mealsCategoryId === id ? '#eee' : '#333',
                fontWeight: '600',


            }}>{name}</Typography>
        </button>
    )
}

export default CategoryButton