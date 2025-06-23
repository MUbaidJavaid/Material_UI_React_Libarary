import type { JSX } from "@emotion/react/jsx-runtime"
import { Box, Container } from "@mui/material"


export const MyContainerLayout = (): JSX.Element =>{
    return (
        <>
        <Container
            maxWidth="lg"
            disableGutters
            className="flex bg-gray-200 flex-col mx-auto w-full mt-4 gap-4"
            // sx={{
            //     bgcolor: "primary.main",
            //     // width: "100%",
            //     // height: "100vh",
            //     display: "flex",
            //     flexWrap: "wrap",
            //     justifyContent: "center",
            //     alignItems: "center",
            //     padding: 2,
            //     gap: 2,
            // }}
            >
                <h1 className="text-2xl font-bold text-start">Container | lg size Component</h1>
                <Box sx={{ bgcolor: "primary.main", display: "flex", flexWrap: "wrap", justifyContent: "center" }} >
                    <Box sx={{ width: 100, height: 100, bgcolor: "secondary.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "error.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "warning.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "info.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "success.main", m: 1 }} />
                </Box>
            </Container>
            <Container
                maxWidth="md"
                disableGutters
                className="flex flex-col bg-gray-300 mx-auto w-full mt-4 gap-4"
                // sx={{
                //     bgcolor: "secondary.main",
                //     // width: "100%",
                //     // height: "100vh",
                //     display: "flex",
                //     flexWrap: "wrap",
                //     justifyContent: "center",
                //     alignItems: "center",
                //     padding: 2,
                //     gap: 2,
                // }}
            >
                <h1 className="text-2xl font-bold text-start">Container | md size Component</h1>
                <Box sx={{ bgcolor: "secondary.main", display: "flex", flexWrap: "wrap", justifyContent: "center" }} >
                    <Box sx={{ width: 100, height: 100, bgcolor: "primary.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "error.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "warning.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "info.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "success.main", m: 1 }} />
                </Box>
            </Container>
        <Container
            maxWidth="sm"
            disableGutters
            className="flex flex-col mx-auto bg-gray-400 w-full mt-4 gap-4"
            // sx={{
            //     bgcolor: "error.main",
            //     // width: "100%",
            //     // height: "100vh",
            //     display: "flex",
            //     flexWrap: "wrap",
            //     justifyContent: "center",
            //     alignItems: "center",
            //     padding: 2,
            //     gap: 2,
            // }}
            >
                <h1 className="text-2xl font-bold text-start">Container | sm size Component</h1>
                <Box sx={{ bgcolor: "error.main", display: "flex", flexWrap: "wrap", justifyContent: "center" }} >
                    <Box sx={{ width: 100, height: 100, bgcolor: "primary.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "secondary.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "warning.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "info.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "success.main", m: 1 }} />
                </Box>
            </Container>
        <Container
            maxWidth="xs"
            disableGutters
            className="flex flex-col bg-gray-500 mx-auto w-full mt-4 gap-4"
            // sx={{
            //     bgcolor: "warning.main",
            //     // width: "100%",
            //     // height: "100vh",
            //     display: "flex",
            //     flexWrap: "wrap",
            //     justifyContent: "center",
            //     alignItems: "center",
            //     padding: 2,
            //     gap: 2,
            // }}
            >
                <h1 className="text-2xl font-bold text-start">Container | xs size Component</h1>
                <Box sx={{ bgcolor: "warning.main", display: "flex", flexWrap: "wrap", justifyContent: "center" }} >
                    <Box sx={{ width: 100, height: 100, bgcolor: "primary.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "secondary.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "error.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "info.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "success.main",m: 1 }} />
                </Box>
            </Container>
            <Container
             fixed
            disableGutters
            className="flex flex-col bg-gray-500 mx-auto w-full mt-4 gap-4"
            // sx={{
            //     bgcolor: "warning.main",
            //     // width: "100%",
            //     // height: "100vh",
            //     display: "flex",
            //     flexWrap: "wrap",
            //     justifyContent: "center",
            //     alignItems: "center",
            //     padding: 2,
            //     gap: 2,
            // }}
            >
                <h1 className="text-2xl font-bold text-start">Container | fixed size Component</h1>
                <Box sx={{ bgcolor: "warning.main", display: "flex", flexWrap: "wrap", justifyContent: "center" }} >
                    <Box sx={{ width: 100, height: 100, bgcolor: "primary.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "secondary.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "error.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "info.main", m: 1 }} />
                    <Box sx={{ width: 100, height: 100, bgcolor: "success.main",m: 1 }} />
                </Box>
            </Container>
        </>
    )
}