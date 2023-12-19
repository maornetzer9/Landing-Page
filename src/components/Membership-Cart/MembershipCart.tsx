import { Box, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './membership.css'

interface IMemberShiptCart { backgroundUrl?: string; membershipOption?: string; borderOption?: string; }

const MembershipCart: React.FunctionComponent<IMemberShiptCart> = ({ backgroundUrl, membershipOption, borderOption }) => {

    const membershipOptionsMock =
        [
            { text: "Sed viverra nunc evarius" },
            { text: "Sed viverra nunc evarius" },
            { text: "Sed viverra nunc evarius" },
            { text: "Sed viverra nunc evarius" },
            { text: "Sed viverra nunc evarius" },
        ];

    return (
        <Box
            id='membership_container'
            component={'div'}
            style={{ backgroundImage: `url(${backgroundUrl})` }}
        >
            <Box
                id='membership_inner_container'
                component={'div'}
                style={{ border: borderOption }}
            >
                <Box
                    id='membership_header_container'
                    component={'div'}
                >
                    <Typography
                        variant='body2'
                        color={'white'}
                        marginLeft={2}
                    >
                        {membershipOption}
                    </Typography>
                    <Typography
                        variant='h4'
                        marginLeft={2}
                        color={'white'}
                        textTransform={'inherit'}
                        fontFamily={'fantasy'}
                    >
                        {'MEMBERSHIP'}
                    </Typography>
                </Box>

                {membershipOptionsMock.map((option, index) => (
                    <List
                        key={index}
                    >
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon
                                    style={{
                                        color: '#9B9B9B',
                                        fontSize: '12px'
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primaryTypographyProps={{ fontSize: '12px', color: '#9B9B9B' }}
                                primary={option.text}
                            />
                        </ListItem>

                    </List>

                ))}

                <Box
                    component={'div'}
                    id='membership_button_container'
                >
                    <Button
                        style={{
                            color: 'white',
                            padding: '20px',
                            width: '300px',
                            border: borderOption
                        }}
                        variant='outlined'
                    >
                        SUBSCRIBE TODAY
                    </Button>
                </Box>

            </Box>
        </Box>
    )
}

export default MembershipCart