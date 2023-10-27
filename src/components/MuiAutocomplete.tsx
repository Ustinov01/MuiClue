import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
    id: number,
    label: string
}

export const MuiAutocomplete = () => {
    const [value, setValue] = useState<null | string>(null);
    const [skill, setSkill] = useState<Skill | null>(null)
    const skills = ['HTML', 'CSS', 'Javascript', 'Typescript'];
    const skillsOptions = skills.map((skill, index) => ({
        id: index + 1,
        label: skill
    }))

    console.log(value);
    console.log({ skill });

    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete options={skills} renderInput={(params) => <TextField {...params}
                label='Skills' />} value={value} onChange={(e: any, newValue: string | null) => setValue(newValue)} freeSolo />
            <Autocomplete options={skillsOptions} renderInput={(params) => <TextField {...params}
                label='Skills' />} value={skill} onChange={(e: any, newValue: Skill | null) => setSkill(newValue)} />
        </Stack>
    )
}
