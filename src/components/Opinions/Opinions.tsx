import { Box } from '@mui/material'
import React from 'react'
import ImageHover from '../ImageHover/ImageHover'
import image1 from '../../assets/images/Exercises-1.png'
import image2 from '../../assets/images/Exercises-2.png'
import image3 from '../../assets/images/Exercises-3.png'
import backgroundShadow from '../../assets/backgrounds/background-shadow.png'
import './opinions.css'
import userImage1 from '../../assets/images/user-image-1.png'
import userImage2 from '../../assets/images/user-image-2.png'

import Opinion from '../Opinion/Opinion'

const Opinions: React.FunctionComponent = () => {

    return (
        <Box
            component={'div'}
            style={{ backgroundImage: `url(${backgroundShadow})` }}
        >
        <Box
            component={'div'}
            id='opinions_background_container'
        >
            <Box
                width={'100%'}
                component={'div'}
                display={'flex'}
                justifyContent={'space-evenly'}
            >
                <Opinion name='AUDREY BROWN' url={userImage2}/>
                <Opinion name='RACHEL GREEN' url={userImage1}/>
                <Opinion name='DAVID SMITH' url={userImage2}/>
                
            </Box>

            <Box
                component={'div'}
                display={'flex'}
            >
                <ImageHover url={image1} isHovered={true} style={{ width: 'fit-content', height: '600px' }} />
                <ImageHover url={image2} isHovered={true} style={{ width: 'fit-content', height: '600px' }} />
                <ImageHover url={image3} isHovered={true} style={{ width: 'fit-content', height: '600px' }} />
                <ImageHover url={image1} isHovered={true} style={{ width: 'fit-content', height: '600px' }} />
            </Box>
        </Box>
        </Box>
    )
}


export default Opinions