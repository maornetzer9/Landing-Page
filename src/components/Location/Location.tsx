import { Box } from '@mui/material'
import React from 'react'
import ImageHover from '../ImageHover/ImageHover'
import mapLocation from '../../assets/backgrounds/Map-location.png'

// interface ILocation {  }

const Location: React.FunctionComponent = () => {
  return (
    <Box
        component={'div'}
    >
        <ImageHover url={mapLocation} isHovered={true} style={{width:'100%'}}/>
    </Box>
  )
}

export default Location
