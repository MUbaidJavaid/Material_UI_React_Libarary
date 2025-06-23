import type { JSX } from "@emotion/react/jsx-runtime";
import { Box } from "@mui/material";


export const MyBox = (): JSX.Element => {
    return (
        <div className="flex flex-col mx-auto w-72 mt-4 gap-4">
            <h1 className="text-2xl font-bold text-start">Box Component</h1>
            <Box sx={{ bgcolor: "primary.main", width: 600, display: "flex", flexWrap: "wrap", justifyContent: "center" }} >
                <Box sx={{ width: 100, height: 100, bgcolor: "secondary.main", m: 1 }} />
                <Box sx={{ width: 100, height: 100, bgcolor: "error.main", m: 1 }} />
                <Box sx={{ width: 100, height: 100, bgcolor: "warning.main", m: 1 }} />
                <Box sx={{ width: 100, height: 100, bgcolor: "info.main", m: 1 }} />
                <Box sx={{ width: 100, height: 100, bgcolor: "success.main", m: 1 }} />
            </Box>

        </div>
    );
}