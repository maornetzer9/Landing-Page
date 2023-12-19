import WifiIcon from '@mui/icons-material/Wifi';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExplicitIcon from '@mui/icons-material/Explicit';
import { SvgIconComponent } from '@mui/icons-material';
import { Variant } from '@testing-library/react';


interface IBaseIcon { color?: string; }

type CustomColor = 'error' | 'primary' | 'secondary' | 'customColor1' | 'customColor2';  

export interface IListItem {text?: string; icon?: React.ReactNode; color : CustomColor }


// export const LIST_ITEM_MOCK: IListItem[] = 
// [
//     {
//         text: 'Free Wifi',
//         icon: <WifiIcon color='error' />,
//     },
//     {
//         text: 'Free Parking',
//         icon: <LocalParkingIcon color='error' />,
//     },
//     {
//         text: 'Free Wights',
//         icon: <FitnessCenterIcon color='error' />,
//     },
//     {
//         text: '+50 Trainers',
//         icon: <FitnessCenterIcon color='error' />,
//     },
//     {
//         text: '+50k Clients',
//         icon: <PeopleAltIcon color='error' />,
//     },
//     {
//         text: '+50 Arenas',
//         icon: <ExplicitIcon color='error' />,
//     },
// ]