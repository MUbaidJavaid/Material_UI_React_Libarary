import {Typography} from '@mui/material'
import EventNoteIcon from '@mui/icons-material/EventNote';

export const TypographyText = () => {

    return(
        <>
              <Typography 

                 sx={{display:"flex", flexDirection:"column", alignItems:"center"}} 
                >
                <EventNoteIcon sx={{color:"#228c42", marginTop:"1rem"}}/>
                <Typography
                  variant="h5"
                  component="h5"
                  fontWeight={"bold"}>
                  TODO REACT + TYPESCRIPT
                </Typography>  
                  
              </Typography>

        </>
    )
}