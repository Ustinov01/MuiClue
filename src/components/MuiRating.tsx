import { Stack, Rating } from '@mui/material'
import FavoritIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';


export const MuiRating = () => {
    const [value, setValue] = useState<null | number>(null);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue);
    }

    console.log(value);
    return (
        <Stack spacing={2}>
            <Rating value={value} onChange={handleChange} precision={0.5} icon={<FavoritIcon color='error' />} emptyIcon={<FavoriteBorderIcon />} />
        </Stack>
    )
}
