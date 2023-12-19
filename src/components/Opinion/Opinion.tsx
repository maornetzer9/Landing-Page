import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import ImageHover from '../ImageHover/ImageHover'
import unRatedIcon from '../../assets/icons/blank-rating-icon.png'
import ratedIcon from '../../assets/icons/full-rating-icon.png'
import './opinion.css'

interface IOpinion { url?: string; name?: string }

const Opinion: React.FunctionComponent<IOpinion> = ({ url, name }) => {

    const [rate, setRate] = useState(false);

    const [ratingIcons, setRatingIcons] = useState([
        { icon: unRatedIcon },
        { icon: unRatedIcon },
        { icon: unRatedIcon },
        { icon: unRatedIcon },
        { icon: unRatedIcon },
    ]);

    const handleRating = (index: number) => {
        setRate(true)
        setRatingIcons((prevIcons) => prevIcons.map((icon, i) => (i === index ? { icon: ratedIcon } : icon)));
    }
    const handleUnRating = (index: number) => {
        setRate(false)
        setRatingIcons((prevIcons) => prevIcons.map((icon, i) => (i === index ? { icon: unRatedIcon } : icon)));
    }

    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book';

    return (
        <Box
            id='opinion_container'
            component={'div'}
            height={'500px'}
            width={'500px'}
        >
            <Box
                component={'div'}
            >
                <Box
                    id='opinion_content_container'
                    component={'div'}
                >
                    <ImageHover
                        url={url as string}
                        style={{
                            height: '100px',
                            width: '100px'
                        }}
                    />

                    <Box
                        id='opinion_header_container'
                        component={'div'}
                    >
                        <Typography
                            variant='body1'
                            color={'white'}
                        >
                            Trainer
                        </Typography>
                        <Typography
                            variant='h5'
                            color={'white'}
                            textTransform={'inherit'}
                            fontWeight={'bold'}
                        >
                            {name}
                        </Typography>
                    </Box>
                </Box>


                <Box
                    id='opinion_text_container'
                    component={'div'}

                >
                    <Box
                        component={'div'}
                        width={'89%'}
                    >
                        <Typography
                            variant='h5'
                            color={'white'}
                        >
                            {text}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                id='opinion_rating_container'
                component={'div'}
            >
                {ratingIcons.map((rating, index) => (
                    <Button
                        key={index}
                        variant='text'
                        endIcon={<img alt='rating-icon' src={rating.icon}
                            onClick={() => (rate ? handleUnRating(index) : handleRating(index))}
                        />}
                    />
                ))}

            </Box>
        </Box>
    )
}


export default Opinion