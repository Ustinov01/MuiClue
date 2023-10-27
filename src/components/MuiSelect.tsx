import { Box, TextField, MenuItem } from '@mui/material'
import { count } from 'console';
import { useState } from 'react'

export const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([]);

    const handleChangeCountry = (event: React.ChangeEvent<HTMLInputElement>) => {

        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value);
    }

    console.log(countries);

    return (
        <Box width='250px'>
            <TextField label='Select Country' value={countries} select onChange={handleChangeCountry} fullWidth SelectProps={{ multiple: true }}
                color='secondary' size='small' helperText='please select countries'>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='RU'>Russia</MenuItem>
            </TextField>
        </Box>
    )
}
