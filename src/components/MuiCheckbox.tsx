import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material';
import { useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
export const MuiCheckbox = () => {
    const [checked, setChecked] = useState(false);
    const [skills, setSkills] = useState<string[]>([]);

    const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }

    const handleChangeSkills = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if (index === -1) {
            setSkills([...skills, event.target.value]);
        } else { setSkills(skills.filter(skill => skill !== event.target.value)) }
    }

    console.log({ skills });
    return (
        <Box>
            <Box>
                <FormControlLabel label='I accept terms and conditions' control={<Checkbox checked={checked} onChange={handleChangeChecked} color='secondary' />} />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    onChange={handleChangeChecked}
                    checked={checked}
                />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel label='HTML' control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleChangeSkills} />} />
                        <FormControlLabel label='CSS' control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleChangeSkills} />} />
                        <FormControlLabel label='Javascript' control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handleChangeSkills} />} />
                    </FormGroup>

                </FormControl>
            </Box>
        </Box>
    )
}
