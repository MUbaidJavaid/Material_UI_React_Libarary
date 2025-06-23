import type { JSX } from "@emotion/react/jsx-runtime";
import { Favorite } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import React from "react";



export const MyCheckBox = (): JSX.Element => {
    // const [checked, setChecked] = React.useState<boolean>(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       console.log(event.target.checked);
    }
    return (
        <>
            <div className='flex justify-center items-center w-full '>
                <h1 className="text-2xl font-bold text-start">Checkbox Component</h1>
                <Checkbox 
                //  checked={checked}
                color="primary" 
                value={"checkbox"}
                 onChange={handleChange}
                  />
                <label htmlFor="checkbox">Checkbox</label>
                <br />
                <Checkbox
                    // checked={checked}
                    onChange={handleChange}
                    color="secondary"
                   
                />
                <label htmlFor="checkbox">Checkbox</label>
                <br />
                <Checkbox
                    // checked={checked}
                    indeterminate
                    onChange={handleChange}
                    color="secondary"
                    
                />
                <label htmlFor="checkbox">Checkbox</label>
                <br />
                <Checkbox
                    // checked={checked}
                    onChange={handleChange}
                    color="secondary"
                    icon={<Favorite />}
                    checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
                <label htmlFor="checkbox">Checkbox</label>
                <br />
            </div>
        </>
    )
}