import { Box } from '@mui/material'
import React from 'react'

interface ISection {  }

const Section: React.FunctionComponent<React.PropsWithChildren<ISection>> = ( {children} ) => {
    return (
        <Box
            component={'div'}
        >
            {children}
        </Box>
    )
}


export default Section