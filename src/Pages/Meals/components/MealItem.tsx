import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import mealImage from '../../../assets/meal.jpg'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom';
import { Meal } from '../../../redux/Slices/MealsSlice'
import { ImageURL } from '../../../API/BaseURL';
import { useAppDispatch } from '../../../redux/store';
import { addToCart } from '../../../redux/Slices/CartSlice';

type MealItemProps = {
    meal: Meal
}

const MealItem = ({ meal }: MealItemProps) => {

    const dispatch = useAppDispatch()



    const addToCartHandler = () => {
        dispatch(addToCart({
            meal_id: meal.id,
            image: meal.image,
            quantity: 1,
            note: '',
            meal_name: meal.name,
            total_price: meal.price,
            price_per_one: meal.price,
        }))
    }

    return (

        <Stack mt={4} sx={{
            background: '#eee',
            padding: '0 0 0 0.2rem',

            borderRadius: '10px'
        }} direction={'row'} gap={'1rem'} alignItems={'center'} >
            <Box sx={{
                flexBasis: '40%',


            }} >
                <Box sx={{
                    transform: 'translate(5px , -15%)'
                }}>
                    <img style={{ borderRadius: '10px', maxWidth: '100%', minWidth: '140px' }} loading='lazy' src={`${ImageURL}${meal.image}`} />
                </Box>
            </Box>
            <Box sx={{
                flex: '1',
                flexBasis: '60%',
                padding: '0.5rem'
            }}>
                <Stack justifyContent={'space-between'} direction={'row'}>
                    <Link to={`/meal/${meal.id}`}>
                        <Typography color={'#333'} fontWeight={'600'} fontSize={'1rem'}>{meal.name}</Typography>
                    </Link >
                    <Link to={`/meal/${meal.id}`} className='bump' style={{ color: '#5998c7' }}><AddCircleOutlineIcon /></Link>
                </Stack>

                <Typography>
                    <span style={{ color: "#428bc1", fontWeight: '600' }}>Description:</span> {meal.description}
                </Typography> <Typography color={'#333'} fontWeight={'600'} fontSize={'0.9rem'}> <span style={{ color: "#428bc1", fontWeight: '600' }}>Price:</span> {meal.price} SR</Typography>

            </Box>
        </Stack>

    )
}

export default MealItem