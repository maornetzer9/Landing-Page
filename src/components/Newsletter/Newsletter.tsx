import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import twitter from '../../assets/icons/twitter.png';
import paperPlane from '../../assets/icons/paper-plane.png';
import './newsletter.css'

// interface INewsletter { }

const Newsletter: React.FunctionComponent = () => {
    return (
        <Box
            id='newsletter_container'
            component={'div'}
        >
            <Box
                id='newsletter_social_icons'
                component={'div'}
            >
                <Button
                    variant='text'
                    endIcon={<img src={twitter} className='social_media_logo'
                        alt="twitter-icon"
                    />}
                />
                <Button
                    variant='text'
                    endIcon={<img src={facebook}
                        className='social_media_logo'
                        alt="facebook-icon"
                    />}
                />
                <Button
                    variant='text'
                    endIcon={<img src={instagram}
                        className='social_media_logo'
                        alt="instagram-icon"
                    />}
                />
            </Box>

            <Box
                component={'div'}
                id='newsletter_input_container'
            >
                <Box
                    position={'relative'}
                    component={'div'}
                    id='newsletter_input_inner_container'
                >
                    <TextField
                        className='newsletter_input_email'
                        variant='outlined'
                        inputMode='email'
                        placeholder='Newsletter enter your email'
                        color='primary'
                        id='email_input'
                        style={{
                            width: '400px',
                            position: 'absolute',
                            right: '0px'
                        }}
                        inputProps={{
                            style: {
                                color: 'white',
                                border: '1px solid #386683'
                            },
                        }}
                    />
                    <Box
                        id='email_button_icon_container'
                        component={'div'}
                    >
                        <Button
                            variant='text'
                            endIcon={<img
                                src={paperPlane}
                                alt='Paper-Plane-Icon'
                                width={'34px'}
                                height={'34px'}
                                style={{ marginRight: '15px' }}
                            />}
                        >
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}


export default Newsletter