import React from 'react'
import { Box, Typography } from "@mui/material";

const Landing = () => {
    return (
        <>
            <Box sx={{
                backgroundImage: `url(../../assets/home.jpg)`,
                backgroundPosition: 'center',
                height: '60vh',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '2rem',
                position: 'relative',
                borderRadius: '5px'

            }}>
                <Box sx={{
                    color: 'white',
                    position: 'absolute',
                    bottom: '2rem'

                }}>
                    <Typography fontSize={'1.5rem'}>Welcome To</Typography>
                    <Typography fontWeight={'bold'} fontSize={'2rem'}>Le Salon </Typography>
                </Box>
            </Box>
            <Box color={'#333'} my={'1rem'}>
                <Typography fontSize={'1.5rem'}>What would you like</Typography>
                <Typography mt={'0'} fontWeight={'bold'} fontSize={'2rem'}>to order ?</Typography>
            </Box>
        </>
    )
}

export default Landing