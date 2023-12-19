import { Box } from '@mui/material'
import React from 'react'
import background from '../../assets/backgrounds/background.png'
import backgroundShadow from '../../assets/backgrounds/background-shadow.png'
import './background.css'

interface IBackground { }

const Background: React.FunctionComponent<IBackground> = () => {
    return (
        <Box
            component={'div'}
        >
            <img
                src={background}
                alt="background"
                className='backgrounds'
            />
            <img
                src={backgroundShadow}
                alt="background-shadow"
                style={{ opacity: '0.3', width:'100%', height:'596px'}}
            />
        </Box>
    )
}


export default Background