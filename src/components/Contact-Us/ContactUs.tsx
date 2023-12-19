import { Box, Button, Divider, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import emailIcon from '../../assets/icons/Email-Icon.png'
import phoneIcon from '../../assets/icons/Phone-icon.png'
import LocationIcon from '../../assets/icons/Location-Icon.png'
import clockIcon from '../../assets/icons/Clock-Icon.png'
import './contactUs.css'

// interface IMessage { }

const ContactUs: React.FunctionComponent = () => {

    const inlineStyles = {
        inputStyles: { height: '100px', width: '600px' },
        inputPlaceholderStyle: { color: 'white', border: '1px solid #3A596C', fontWeight: 'bold' },
        footerTextStyles: { display: 'flex', alignItems: 'center', color: 'white' }
    }

    return (
        <Box
            component={'div'}
            id='contactUs_background'
        >
            <Box
                component={'div'}
                id='contactUs_header_container'
            >
                <Typography
                    variant='h5'
                >
                    CONTACT
                </Typography>
            </Box>

            <Box
                component={'div'}
                id='contactUs_message_container'
            >
                <Box
                    component={'div'}
                    id='contactUs_message_inner_container'
                >
                    <Box
                        component={'div'}
                        id='contactUs_message_header'
                    >
                        <Typography
                            variant='h3'
                            color={'white'}
                            marginRight={5}
                            marginLeft={8}
                        >
                            MESSAGE
                        </Typography>

                        <Divider
                            variant='fullWidth'
                            component={'article'}
                            style={{
                                borderWidth: 2,
                                backgroundColor: 'white',
                                width: '40%'
                            }} />
                        <Divider
                            variant='fullWidth'
                            component={'article'}
                            style={{
                                borderWidth: 5,
                                backgroundColor: 'red',
                                width: '30%'
                            }} />
                    </Box>

                    <Box
                        id='contactUs_message_input'
                        component={'div'}
                    >
                        <TextField
                            type='text'
                            variant='filled'
                            style={{ height: '300px', width: '700px', border: '1px solid #3A596C' }}
                            inputProps={{
                                placeholder: 'Enter your message...',
                                style: { color: 'white', height: '265px', position:'absolute', marginTop:'5%'},
                            }}
                        />
                    </Box>

                    <Box
                        component={'div'}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'end',
                            marginLeft: '25px',
                            height: '500px',
                            width: '650px',
                        }}
                    >
                        <TextField
                            type='text'
                            variant='filled'
                            style={inlineStyles.inputStyles}
                            inputProps={{
                                placeholder: 'Enter your name...',
                                style: inlineStyles.inputPlaceholderStyle,
                            }}
                        />
                        <TextField
                            type='email'
                            variant='filled'
                            style={inlineStyles.inputStyles}
                            inputProps={{
                                placeholder: 'Enter your email...',
                                style: inlineStyles.inputPlaceholderStyle,
                            }}
                        />
                        <TextField
                            type='text'
                            variant='filled'
                            style={inlineStyles.inputStyles}
                            inputProps={{
                                placeholder: 'Enter your phone...',
                                style: inlineStyles.inputPlaceholderStyle,
                            }}
                        />
                    </Box>

                    <Box
                        component={'div'}
                        style={{ width: '100%', textAlign: 'center' }}
                    >
                        <Button
                            variant='contained'
                            color='error'
                            size='large'
                            style={{ width: '90%' }}
                        >
                            SEND MESSAGE
                        </Button>
                    </Box>

                    <Box
                        id='contactUs_footer_container'
                        component={'div'}
                    >
                        <Typography
                            variant='body1'
                            style={inlineStyles.footerTextStyles}
                        >
                            <img
                                src={clockIcon}
                                style={{ marginRight: '10px' }}
                                alt='Clock-Icon'
                            />
                            MON-SUN:6 AM-8 PM
                        </Typography>
                        <Typography
                            variant='body1'
                            style={inlineStyles.footerTextStyles}
                        >
                            <img
                                src={phoneIcon}
                                style={{ marginRight: '10px' }}
                                alt='Phone-Icon'
                            />
                            (054)-53287381
                        </Typography>
                        <Typography
                            variant='body1'
                            style={inlineStyles.footerTextStyles}
                        >
                            <img
                                src={LocationIcon}
                                style={{ marginRight: '10px' }}
                                alt='Location-Icon'
                            />
                            ISRAEL TEL-AVIV ROTHSCHILD-105
                        </Typography>
                        <Typography
                            variant='body1'
                            style={inlineStyles.footerTextStyles}
                        >
                            <img
                                src={emailIcon}
                                style={{ marginRight: '10px' }}
                                alt='Email-Icon'
                            />
                            INFO@XERCISE.COM
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default ContactUs