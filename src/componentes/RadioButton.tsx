import type { JSX } from "@emotion/react/jsx-runtime";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";


export const MyRadioButton = (): JSX.Element => {
    const [value, setValue] = React.useState<string>("Male");

    const getRadioButtonValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        console.log(event.target.value);
    }
    return (
        <div className='flex justify-center items-center w-full '>
            <h1 className="text-2xl font-bold text-start">Radio Button Component</h1>
            <br />
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Male"
                value={value}
                onChange={getRadioButtonValue}
                name="radio-buttons-group"
            >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
        </div>
    );
}