import type { JSX } from "@emotion/react/jsx-runtime"
import { TextField } from "@mui/material"
import React from "react";


export const  MyTextField = ():JSX.Element => {
    const [value, setValue] = React.useState<string>("");
    const [valueEmail, setValueEmail] = React.useState<string>("");
    const [valuePassword, setValuePassword] = React.useState<string>("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setValue(event.target.value);
    }

        const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setValueEmail(event.target.value);
    }
        const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event.target.value);
            setValuePassword(event.target.value);
        }
    return (
        <div  className="flex flex-col mx-auto w-72 mt-4 gap-4">
            <h1 className="text-2xl font-bold text-start text-center">Name: {value}</h1>
            <h1 className="text-2xl font-bold text-start text-center">Email: {valueEmail}</h1>
            <h1 className="text-2xl font-bold text-start text-center">Password: {valuePassword}</h1>
            <TextField
                // helperText="Enter your name"
                label="Name"
                variant="outlined"
                color="primary"
                size="small"
                fullWidth
                type="text"
                value={value}
               onChange={handleChange}
            />
            <TextField
                label="Email"
                variant="outlined"
                color="secondary"
                size="small"
                fullWidth
                type="email"
                value={valueEmail}
                onChange={handleChangeEmail}
                // helperText="Enter your email"
            />
            <TextField
                label="Password"
                variant="outlined"
                color="success"
                size="small"
                fullWidth
                type="password"
                value={valuePassword}
                onChange={handleChangePassword}
                // helperText="Enter your password"
            />
        </div>
    )
}
