import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import drinks from "../../../assets/drinks.png"
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/store';
import { fetchMeals } from '../../../redux/Slices/MealsSlice';

type CategoryProps = {
    image: string,
    name: string,
    id: number,
}

export const CategoryItem = ({ image, name, id }: CategoryProps) => {

    const dispatch = useAppDispatch()

    const chooseCategoryHandler = () => {
        dispatch(fetchMeals({ id }));

    }
    return (
        <Link onClick={chooseCategoryHandler} to={`/meals`}>
            <Stack mb={2} alignItems={'center'} direction={'row'} justifyContent={'space-between'} sx={{ background: '#eee', padding: '0.5rem 1rem', borderRadius: '5px' }}>
                <Stack alignItems={'center'} gap={2} direction={'row'}>
                    <Box sx={{
                        padding: '0.4rem',
                        borderRadius: '5px',
                        color: '#b56c00',
                        width: "80px"

                    }}><img style={{ maxWidth: '100%', borderRadius: '5px' }} loading="lazy" src={image} /></Box>
                    <Typography style={{ textTransform: 'capitalize', fontSize: '1.2rem', color: '#333', fontWeight: '600' }}>{name}</Typography>
                </Stack>
                <ChevronRightRoundedIcon className="right" />
            </Stack>
        </Link>
    )
}
