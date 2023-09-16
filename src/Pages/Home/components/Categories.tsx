import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import drinks from "../../../assets/drinks.png"
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { CategoryItem } from './CategoryItem';
import { useAppSelector } from '../../../redux/store';
import Loader from '../../../components/loader/loader';
import { Category } from '../../../redux/Slices/CategoriesSlice';
import { ImageURL } from '../../../API/BaseURL';

const Categories = () => {

    const categories = useAppSelector(state => state.categories)

    const loading = categories.isLoading
    const error = categories.isError
    const categoryArray = (categories.categories)

    return (
        <> {loading ? <Loader /> : <Box my={3}>
            {categoryArray.map((cat: Category, index) => {

                return <CategoryItem key={index} image={`${ImageURL}${cat.image}`} id={cat.id} name={cat.name} />
            })}
        </Box>

        }
        </>

    )
}

export default Categories