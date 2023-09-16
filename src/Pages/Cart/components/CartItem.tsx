import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import mealImage from "../../../assets/meal.jpg";
import Counter from "../../../components/Counter";
import { MealItem } from "../../../redux/Slices/CartSlice";
import { ImageURL } from "../../../API/BaseURL";
import { Link } from "react-router-dom";

type CartItemsProps = {
    item: MealItem
}
const CartItem = ({ item }: CartItemsProps) => {


    return (
        <Stack
            mt={4}
            sx={{
                background: "#eee",
                padding: "0 0 0 0.2rem",

                borderRadius: "10px",
            }}
            direction={"row"}
            gap={"1rem"}
            alignItems={"center"}
        >
            <Box
                sx={{
                    flexBasis: "40%",
                }}
            >
                <Box>
                    <img
                        style={{
                            borderRadius: "10px",
                            maxWidth: "100%",
                            minWidth: "140px",
                        }}
                        loading="lazy"
                        src={`${ImageURL}${item.image}`}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    flex: "1",
                    flexBasis: "60%",
                    padding: "0.8rem 0.5rem",
                }}
            >
                <Stack justifyContent={"space-between"} direction={"row"}>
                    <Link to={`/meal/${item.meal_id}`}>
                        <Typography sx={{ textDecoration: 'underline' }} color={"#333"} fontWeight={"600"} fontSize={"1rem"}>
                            {item.meal_name}
                        </Typography>
                    </Link>
                </Stack>

                <Typography>
                    <span style={{ color: "#428bc1", fontWeight: '600' }}>Note:</span> {item.note}
                </Typography>
                <Stack gap={1} direction={'column'} justifyContent={"start"} alignItems={"start"}>
                    <Typography sx={{ flex: '1' }} color={"#333"} fontWeight={"600"} fontSize={"0.9rem"}>
                        <span style={{ color: "#428bc1", fontWeight: '600' }}>Price: </span> {item.total_price} SR
                    </Typography>
                    <Counter id={item.meal_id} color="#ddd" />
                </Stack>
            </Box>
        </Stack>
    );
};

export default CartItem;
