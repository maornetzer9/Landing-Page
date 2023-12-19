import { Box } from '@mui/material'
import React from 'react'
import MembershipCart from '../Membership-Cart/MembershipCart'
import frame1 from '../../assets/backgrounds/Frame-Background-1.png'
import frame2 from '../../assets/backgrounds/Frame-Background-2.png'
import frame3 from '../../assets/backgrounds/Frame-Background-3.png'
import frame4 from '../../assets/backgrounds/Frame-Background-4.png'

const Memberships: React.FunctionComponent = () => {
  return (
    <Box
        component={'div'}
        display={'flex'}
        justifyContent={'center'}
        id='memberships_container'
    >
        <MembershipCart membershipOption='BRONZE'    backgroundUrl={frame1}/>
        <MembershipCart membershipOption='SILVER'    backgroundUrl={frame2}/>
        <MembershipCart membershipOption='GOLD'      backgroundUrl={frame3} borderOption='none'/>
        <MembershipCart membershipOption='PLATINIUM' backgroundUrl={frame4}/>
    </Box>
  )
}

export default Memberships
