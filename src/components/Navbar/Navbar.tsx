import { Box, Button } from '@mui/material'
import React from 'react'
import logo from '../../assets/logo/logo.png'
import textIcon from '../../assets/icons/textIcon.png'
import textIcon2 from '../../assets/icons/textIcon-2.png'
import './navbar.css'

const Navbar: React.FunctionComponent = () => {

    return (
        <Box
            component={'div'}
        >
            <Box
                component={'div'}
                id='navbar_container'
            >
                <Box
                    component={'div'}
                    id='icons_container'
                >
                    <img src={logo} alt="Logo" />
                </Box>

                <Box
                    id='navigation_container'
                    component={'div'}
                >
                    <Button
                        variant='text'
                        color='primary'
                        size='large'
                        style={{ color: 'white' }}
                    >
                        Home
                    </Button>
                    <Button
                        variant='text'
                        color='primary'
                        size='large'
                        style={{ color: 'white' }}
                    >
                        About
                    </Button>
                    <Button
                        variant='text'
                        color='primary'
                        size='large'
                        style={{ color: 'white' }}
                    >
                        Gallery
                    </Button>
                    <Button
                        color='primary'
                        variant='text'
                        size='large'
                        style={{ color: 'white' }}
                    >
                        Pricing
                    </Button>
                    <Button
                        color='primary'
                        variant='text'
                        size='large'
                        style={{ color: 'white' }}
                    >
                        Contact-us
                    </Button>
                </Box>
            </Box>

            <Box
                id='text_icon_2'
                component={'div'}
            >
                <img src={textIcon} alt="textIcon" />
                <img src={textIcon2} alt="Text-Icon-2" />
            </Box>

        </Box>
    )
}

export default Navbar
