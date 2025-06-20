import Button from '@mui/material/Button';
import type { JSX } from 'react';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
export const MyButton = ({}): JSX.Element => {
    const [color, setColor] = React.useState<"primary" | "secondary" | "inherit" | "success" | "error" | "info" | "warning">("primary");
    const [disabled, setDisabled] = React.useState<boolean>(false);
function MyButton() {
    setColor("secondary");
    // setDisabled(true);
    // alert("Hello, this is a button click event!");
}
    return(
        <>
        <div className='flex justify-center items-center w-full '>
            <Button 
            variant="contained"
            color={color}
            disabled={disabled}
            size="large"
            onClick={MyButton}
            startIcon={<DeleteIcon />}
            // startIcon={<span>🚀</span>}
            // endIcon={<span>🚀</span>}
            >Delete</Button>
           </div>
        </>
    )

}