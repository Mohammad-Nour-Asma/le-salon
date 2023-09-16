import { Box, Stack } from '@mui/material'
import React from 'react'
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import Logo from '../../assets/Le-salon-logoDD 1.png'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const Navbar = () => {
    const { order_items } = useAppSelector(state => state.cart)
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <Stack color={'#333'} fontSize={'1rem'} p={3} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            {location.pathname === '/' ?
                <Box sx={{}}>< img style={{ transform: 'scale(0.6) translate(-134px, 19px)', maxWidth: '100%' }} src={Logo} /> </Box> :
                <button onClick={() => { if (location.pathname === '/cart') navigate('/meals'); else if (location.pathname === '/meals') navigate('/'); else navigate(-1) }} ><ChevronLeftIcon style={{ fontSize: '2rem' }} /></button>
            } <Link style={{ color: '#333', position: 'relative' }} to={'/cart'}><LocalMallRoundedIcon style={{
                fontSize: '1.8rem'
            }} />
                <Box sx={{
                    background: '#fe3939',
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '-3px',
                    right: '-9px',
                    fontSize: '0.8rem'

                }}><Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>{order_items.length}</Box></Box>
            </Link>
        </Stack>
    )
}

export default Navbar