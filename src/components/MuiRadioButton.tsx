import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material'
import { useState } from 'react'


export const MuiRadioButton = () => {
    const [value, setValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    console.log(value);

    return (
        <Box>
            <FormControl id='job-experience-group-label'>
                Years of experience
            </FormControl>
            <RadioGroup name='job-experience-group' aria-label='job-experience-group-label' value={value} onChange={handleChange} row>
                <FormControlLabel control={<Radio color='secondary' />} label='0-2' value='0-2' />
                <FormControlLabel control={<Radio />} label='3-4' value='3-4' />
                <FormControlLabel control={<Radio />} label='5-6' value='5-6' />
            </RadioGroup>
        </Box >
    )
}
