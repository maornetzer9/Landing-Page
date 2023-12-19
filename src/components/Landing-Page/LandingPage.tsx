import { Box } from '@mui/material'
import React from 'react'
import Section from '../Section/Section'
import Navbar from '../Navbar/Navbar'
import Newsletter from '../Newsletter/Newsletter'
import image1 from '../../assets/images/Exercises-1.png'
import image2 from '../../assets/images/Exercises-2.png'
import image3 from '../../assets/images/Exercises-3.png'
import descriptionBackgroundMale from '../../assets/images/Description-Background-Male.png'
import descriptionBackgroundFemale from '../../assets/images/Description-Background-Female.png'
import Opinions from '../Opinions/Opinions'
import WifiIcon from '@mui/icons-material/Wifi';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExplicitIcon from '@mui/icons-material/Explicit';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import Memberships from '../Memberships/Memberships'
import Location from '../Location/Location'
import './landingPage.css'
import Footer from '../Footer/Footer'
import ContactUs from '../Contact-Us/ContactUs'
import Background from '../Background/Background'
import ContentBox from '../Content-Box/ContentBox'
import Description from '../Description/Description'


const LandingPage: React.FunctionComponent = () => {


    const listItemMale = [
        {
            text: 'Free Wifi',
            icon: <WifiIcon color='error' />,
        },
        {
            text: 'Free Parking',
            icon: <LocalParkingIcon color='error' />,
        },
        {
            text: 'Free Wights',
            icon: <FitnessCenterIcon color='error' />,
        },
        {
            text: '+50 Trainers',
            icon: <FitnessCenterIcon color='error' />,
        },
        {
            text: '+50k Clients',
            icon: <PeopleAltIcon color='error' />,
        },
        {
            text: '+50 Arenas',
            icon: <ExplicitIcon color='error' />,
        },
    ];
    
    const listItemFemale = [
        {
            text: 'Cardio',
            icon: <VolunteerActivismIcon color='error' />,
        },
        {
            text: 'Aerobic',
            icon: <DirectionsRunIcon color='error' />,
        },
        {
            text: 'Fitness',
            icon: <FitnessCenterIcon color='error' />,
        },
        {
            text: 'Cycling',
            icon: <DirectionsBikeIcon color='error' />,
        },
        {
            text: 'Yoga',
            icon: <SelfImprovementIcon color='error' />,
        },
        {
            text: 'Muai Tai',
            icon: <SportsKabaddiIcon color='error' />,
        },
    ]

    const firstChild = '5 DYNAMIC STRETCHES FOR YOUR UPPER BODY';
    const secondChild = 'ARE BULGARIAN BAGS THE BEST NEW FITNESS TOOL?';
    const thirdChild = '3 POST-WORKOUT MISTAKES AND HOW TO FIX THEM';

    const text1 = 'HABITS';
    const text2 = 'EXERCISE';
    const text3 = 'NUTRiTION';

    return (
        <Box component={'div'}>

            <Section key={1}>
                <Background />
                <Navbar />
                <Newsletter />
            </Section>

            <Section key={2}>
                <Box
                    component={'div'}
                    id='contentBoxContainer'
                >
                    <ContentBox id='contentBox_image'    path={image1} children={firstChild} text={text1} />
                    <ContentBox id='contentBox_image_3' path={image3} children={secondChild} text={text3} />
                    <ContentBox id='contentBox_image'   path={image2} children={thirdChild}  text={text2} />
                </Box>
            </Section>

            <Section key={3}>
                <Description
                    url={descriptionBackgroundMale}
                    header='RESPECT YOUR BODY, IT`S THE ONLY ONE YOU GET'
                    listItem={listItemMale}
                />
            </Section>

            <Section key={4}> <Opinions /> </Section>

            <Section key={5}>
                <Description
                    marginLeft='5%'
                    // marginRight='5%'
                    rowReverse='row-reverse'
                    header='THE BEST WAY TO PREDICT THE FUTURE IS TO CREATE IT'
                    url={descriptionBackgroundFemale}
                    listItem={listItemFemale}
                />
            </Section>

            <Section key={6}> <Memberships/> </Section>
            <Section key={7}> <Location/> </Section>
            <Section key={8}> <ContactUs/> </Section>
            <Section key={9}> <Footer/> </Section>

        </Box>
    )
}


export default LandingPage