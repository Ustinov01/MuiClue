import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';


export const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>(null);
    console.log(formats);
    const handleFormatChange = (event: React.MouseEvent<HTMLElement>, updatedFormats: string) => {
        setFormats(updatedFormats);
    }
    return (
        <Stack spacing={2}>
            <Stack spacing={2} direction='row'>
                <Button variant='text'>Text</Button>
                <Button variant='contained'>contained</Button>
                <Button variant='outlined'>outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>primary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>warning</Button>
                <Button variant='contained' color='info'>info</Button>
                <Button variant='outlined' color='success'>success</Button>
                <Button variant='text' color='secondary'>secondary</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>small</Button>
                <Button variant='contained' size='medium'>medium</Button>
                <Button variant='contained' size='large'>large</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' disableElevation startIcon={<SendIcon />} onClick={() => console.log(1)}>Send</Button>
                <Button variant='contained' disableRipple endIcon={<SendIcon />}>Send 2</Button>
                <IconButton aria-label='send' color='primary' size='small'>
                    <SendIcon />
                </IconButton>
            </Stack>
            <Stack direction='row'>
                <ButtonGroup variant='contained' color='success' orientation='vertical'>
                    <Button>primary</Button>
                    <Button>primary</Button>
                    <Button>primary</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup aria-label='text-formatting' value={formats} onChange={handleFormatChange} exclusive>
                    <ToggleButton value='bold'><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value='italic'><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value='underlined'><FormatUnderlinedIcon /></ToggleButton>

                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}
