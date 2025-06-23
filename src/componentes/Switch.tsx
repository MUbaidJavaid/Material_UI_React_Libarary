import type { JSX } from "@emotion/react/jsx-runtime";
import { Switch } from "@mui/material";


export const MySwitch = (): JSX.Element => {

    return (
        <div className="flex flex-col mx-auto w-72 mt-4 gap-4">
            <h1 className="text-2xl font-bold text-start">Switch Component</h1>
            <Switch
                defaultChecked
                color="primary"
                size="medium"
                inputProps={{ "aria-label": "controlled" }}
                onChange={(event) => {
                    console.log(event.target.checked);
                }}
            />
        </div>
    );
};