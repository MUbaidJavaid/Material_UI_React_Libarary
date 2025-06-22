import type { JSX } from "@emotion/react/jsx-runtime"
import { Slider } from "@mui/material"
import React from "react";


export const MySlider = (): JSX.Element => {
     const [value, setValue] = React.useState<number[]>([30, 60]);

     const handleChangeCommitted = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        console.log(newValue);
    }
    const handleChange = (event: Event, newValue: number | number[]) => {
        console.log(newValue);
    }
    const mark = [
        {
            value: 0,
            label: "0%",
        },
        {
            value: 20,
            label: "20%",
        },
        {
            value: 40,
            label: "40%",
        },
        {
            value: 60,
            label: "60%",
        },
        {
            value: 80,
            label: "80%",
        },
        {
            value: 100,
            label: "100%",
        },
    ]
    return (
        <div className='flex justify-center ml-40 mx-auto items-center h-96 w-96'  >
            {/* <input type="range" min="0" max="100" className="slider" /> */}
            <Slider
                defaultValue={30}
                aria-label="Default"
                valueLabelDisplay="auto"
                step={10}
                marks={mark}
                orientation="vertical"
                min={0}
                max={100}
                onChange={handleChange}
                sx={{
                    width: "10px",
                    height: "200px",
                    color: "#0a8c77",
                    "& .MuiSlider-track": {
                        border: "none",
                    }
                }}
            />
            <Slider
                defaultValue={30}
                aria-label="Default"
                valueLabelDisplay="auto"
                step={10}
                marks={mark}
                orientation="vertical"
                value={value}
                min={0}
                max={100}
                onChange={handleChangeCommitted}
                sx={{
                    width: "10px",
                    height: "200px",
                    color: "#0a8c77",
                    "& .MuiSlider-track": {
                        border: "none",
                    }
                }}
            />
        </div>
    )
}