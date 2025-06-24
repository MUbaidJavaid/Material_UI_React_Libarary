import React from "react";
import { Box, Grid, ListItem, Typography } from "@mui/material";

export const MyGrid: React.FC = () => {
    return (
        <>
            <Box className="flex flex-col mx-auto w-full mt-4 gap-4">
                <Grid xs={12}>
                        <Typography variant="h5" fontWeight="bold" textAlign="center">
                            Grid Component
                        </Typography>
                    </Grid>
                <Grid container columns={12} rowSpacing={2} columnSpacing={2} justifyContent="center" alignItems="center">


                    <Grid xs={12} sm={3} md={2}>
                        <Box sx={{ bgcolor: "primary.main", width: 100, height: 100, m: 1 }} />
                    </Grid>
                    <Grid xs={12} sm={3} md={2}>
                        <Box sx={{ bgcolor: "secondary.main", width: 100, height: 100, m: 1 }} />
                    </Grid>
                    <Grid xs={12} sm={3} md={2}>
                        <Box sx={{ bgcolor: "error.main", width: 100, height: 100, m: 1 }} />
                    </Grid>
                    <Grid xs={12} sm={3} md={2}>
                        <Box sx={{ bgcolor: "warning.main", width: 100, height: 100, m: 1 }} />
                    </Grid>
                </Grid>
            </Box>

            <Grid container columns={12} rowSpacing={2} columnSpacing={2}>
                <Grid xs={8}>
                    <ListItem>size=8</ListItem>
                </Grid>
                <Grid xs={4}>
                    <ListItem>size=4</ListItem>
                </Grid>
                <Grid xs={4}>
                    <ListItem>size=4</ListItem>
                </Grid>
                <Grid xs={8}>
                    <ListItem>size=8</ListItem>
                </Grid>
            </Grid>
        </>
    );
};
