import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import './footer.css'

const Footer: React.FunctionComponent = () => {

    const inlineStyles = { buttonStyles: { fontWeight: 'bold' } }
    
    return (
        <Box
            component={'div'}
            id='footer_container_background'
        >
            <Box
                component={'div'}
            >
                <Button variant='text' color='inherit' style={inlineStyles.buttonStyles} >TERMS</Button>
                <Button variant='text' color='inherit' style={inlineStyles.buttonStyles} >SHIPPING</Button>
                <Button variant='text' color='inherit' style={inlineStyles.buttonStyles} >RETURN</Button>
                <Button variant='text' color='inherit' style={inlineStyles.buttonStyles} >LICENSES</Button>
                <Button variant='text' color='inherit' style={inlineStyles.buttonStyles} >STYLES</Button>

            </Box>


            <Typography
                variant='body2'
                color={'white'}
            >
                © Xercise-2023, All Right Reserved.
            </Typography>


            <Box
                component={'div'}
            >
                <Button variant='text' color='inherit' style={inlineStyles.buttonStyles} >FACEBOOK</Button>
                <Button variant='text' color='inherit' style={inlineStyles.buttonStyles} >TWITTER</Button>
                <Button variant='text' color='inherit' style={inlineStyles.buttonStyles} >INSTAGRAM</Button>
                <Button variant='text' color='inherit' style={inlineStyles.buttonStyles} >YOUTUBE</Button>

            </Box>

        </Box>
    )
}


export default Footer