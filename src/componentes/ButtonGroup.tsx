import Button from '@mui/material/Button';
import type { JSX } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup'
export const MyButtonGroup = ({}): JSX.Element => {

    return(
        <>
        <div className='flex justify-center items-center w-full '>
            <h1 className="text-2xl font-bold text-start">Button Group Component</h1>
        <ButtonGroup
        orientation='vertical'
          variant="text"
          color="primary" 
          aria-label=""
                     >
            <Button>Click 01</Button>
            <Button>Click 02</Button>
            <Button>Click 03</Button>
            <Button>Click 04</Button>
            <Button>Click 05</Button>
            <Button>Click 06</Button>
        </ButtonGroup>    

           </div>
        </>
    )

}