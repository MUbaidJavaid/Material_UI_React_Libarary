import type { JSX } from "@emotion/react/jsx-runtime"
import { MenuItem, Select } from "@mui/material"
import type { SelectChangeEvent } from "@mui/material/Select"
import React from "react";


export const MySelect = (): JSX.Element => {
    const [value, setValue] = React.useState<string>('');
    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
        console.log(event.target.value);
    }
    return (
        <>
            <div className='flex justify-center w-72 items-center w-full '>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                    value={value}
                    label="Age"
                    onChange={handleChange}
                    sx={{ width: 200 }}
                >
                    <MenuItem value=''>Select Option</MenuItem>
                    <MenuItem value={'10'}>Ten</MenuItem>
                    <MenuItem value={'20'}>Twenty</MenuItem>
                    <MenuItem value={'30'}>Thirty</MenuItem>
                </Select>
            </div>
        </>
    )
}