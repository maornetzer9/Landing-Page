import { Box, Divider, List, ListItem, ListItemIcon, Grid, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import icon from '../../assets/icons/xercise ARENAS.png'
import './description.css'

interface IDescription {
    text?: string;
    url?: string;
    rowReverse?: string;
    marginLeft?: string;
    marginRight?: string;
    header?: string;
    listItem?: { text: string; icon: React.ReactNode }[]
}

const Description: React.FunctionComponent<IDescription> = ({ url, rowReverse = 'row', marginLeft, marginRight, header, listItem = [] }) => {

    const textContent = [
        { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores expedita fugiat neque, quia est eaque fugit reiciendis! Nisi, nihil vel.' },
        { text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore necessitatibus natus sunt animi illum quasi laboriosam reiciendis suscipit ducimus totam voluptate, distinctio, quisquam recusandae tempora cumque officiis eum beatae enim obcaecati aut. Perferendis modi iusto quidem earum pariatur blanditiis cupiditate recusandae dolorum tempora velit quam ratione nostrum sit nisi nam dignissimos, cum perspiciatis expedita voluptates. Officiis, quod? Iusto, maxime aspernatur.' },
    ]


    return (
        <Box
            id='description_container'
            component={'div'}
        >
            <Box
                id='description_inner_container'
                component={'div'}
                marginLeft={marginLeft ? '5%' : '0%'}
                marginRight={marginRight ? '5%' : '0%'}
                style={{ display: 'flex', flexDirection: rowReverse === 'row' ? 'row' : 'row-reverse' }}
            >
                <img src={url} alt="background" height={'900px'} />

                <Box
                    id='description_content_container'
                    component={'div'}
                >
                    <Box
                        component={'div'}
                        id='description_header_container'
                    >
                        <Box> <img src={icon} alt="arenas-icon" /> </Box>

                        <Divider variant='fullWidth' style={{ borderWidth: 2 }} />
                        <Typography
                            variant='h3'
                            textTransform={'inherit'}
                            fontWeight={'bold'}
                            color={'#031927'}
                        >
                            {header}
                        </Typography>
                        <Divider variant='fullWidth' style={{ borderWidth: 2 }} />

                    </Box>
                    <Box
                        component={'div'}
                        id='description_text_container'
                    >
                        {textContent.map((content, index) =>
                            <Typography
                                key={index}
                                variant='body1'
                                textTransform={'inherit'}
                                fontWeight={'bold'}
                                color={index === 1 ? 'gray' : 'black'}
                            >
                                {content.text}
                            </Typography>
                        )}
                    </Box>

                    <List className='description_list_container'>
                        <Grid container spacing={2}>
                            {listItem.map((item, index) => (
                                <Grid item key={item.text} xl={4}>
                                    <ListItem >
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <Typography
                                            variant="body1"
                                        >
                                            {item.text}
                                        </Typography>
                                    </ListItem>
                                </Grid>
                            ))}
                        </Grid>
                    </List>

                    <Button
                        variant='contained'
                        color='error'
                        size='large'
                        fullWidth={true}
                        style={{
                            textTransform: 'inherit',
                            fontWeight: 'bold',
                            fontSize: '25px'
                        }}
                    >
                        SUBSCRIBE TODAY
                    </Button>
                </Box>
            </Box>

        </Box>
    )
}


export default Description