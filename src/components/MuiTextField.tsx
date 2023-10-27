import { Stack, TextField, InputAdornment } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useState } from 'react';



export const MuiTextField = () => {
    const [value, setValue] = useState('');
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <TextField label='Name' variant='outlined' />
                <TextField label='Name' variant='standard' />
                <TextField label='Name' variant='filled' />
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField label='Small secondary' color='secondary' size='small' />
                <TextField label='Name' size='medium' />
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField label='Form input' required value={value} onChange={e => setValue(e.target.value)} error={!value} helperText={!value ? 'Required' : 'please do not share your pass to anyone'} />
                <TextField label='Form input' type='password' disabled helperText='do not show your pass' required />
                <TextField label='Form input hehe' required InputProps={{ readOnly: true }} />
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField label='Amount' InputProps={{ startAdornment: <InputAdornment position='start'><AttachMoneyIcon /></InputAdornment> }} />
                <TextField label='Weight' InputProps={{ endAdornment: <InputAdornment position='end'></InputAdornment> }} />
            </Stack>
        </Stack>
    )
}
