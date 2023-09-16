import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { type } from 'os';

type HeadingProps = {
    name: string
}
const Heading = ({ name }: HeadingProps) => {
    return (
        <Box
            color={"#333"}

        >
            <Typography textTransform={'capitalize'} fontSize={"1.3rem"} fontWeight={"600"}>
                {name}
            </Typography>

        </Box>
    )
}

export default Heading