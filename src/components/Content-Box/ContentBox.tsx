import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import './contentBox.css'

interface IContentBox { path?: string, style?: React.CSSProperties; children?: React.ReactNode; text?: string; id?: string; }

const ContentBox: React.FunctionComponent<IContentBox> = ({ path, style, children, text, id }) => {


    return (
        <Box
            className='contentBox_container'
            component={'div'}

        >
            <Box
                className='contentBox_image'
                component={'div'}
                style={style}
                id={id}

            >
                <img src={path} alt="img" />

                <Box
                    className='content_container'
                    component={'div'}
                >
                    <Typography
                        variant='body1'
                        fontSize={'12px'}
                        style={{ color: 'white' }}
                    >
                        {text}
                    </Typography>
                    <Typography
                        variant='h4'
                        fontSize={'20px'}
                        fontWeight={'bold'}
                        style={{ color: 'white' }}
                        fontFamily={'inherit'}
                    >
                        {children}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}


export default ContentBox