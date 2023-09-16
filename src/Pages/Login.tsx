import { Box, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';

const Login = () => {
    return (
        <Box sx={{
            background: '#eee',
            height: '100vh',
            width: '100%',
        }}>
            <Box sx={{
                position: 'absolute',
                top: "50%",
                left: "50%",
                transform: 'translate(-50%,-50%)',
                background: 'white',
                padding: '1rem '
            }}>
                <Typography>Login</Typography>

                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>
        </Box>

    )
}

export default Login