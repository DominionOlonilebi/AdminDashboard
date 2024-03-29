//Sidebar imports
import{
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal,
} from '@iconscout/react-unicons';

import img11 from '../imgs/img11.jpg'
import img12 from '../imgs/img12.png'
import img13 from '../imgs/img13.jpg'

//Sidebar Data
export const SidebarData=[
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },
    {
        icon: UilUsersAlt,
        heading: "Customers",
    },
    {
        icon: UilPackage,
        heading: "Products",
    },
    {
        icon: UilChart,
        heading: "Analytics",
    },
];

export const CardsData =[
    {
        title: "Sales",
    color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
    }, 
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
        {
            name: "Sales",
            data: [31, 40, 28, 51, 42, 109, 100],
        }
    ]
    },
    {
        title: "Revenue",
    color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
    }, 
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
        {
            name: "Revenue",
            data: [10, 100, 50, 70, 80, 30, 40],
        }
    ]
    },
    {
        title: "Expenses",
    color: {
        backGround: "#F9D59B",
        boxShadow: "0px 10px 20px 0px #F9D59B",
    }, 
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
        {
            name: "Expenses",
            data: [10, 25, 15, 30, 12, 15, 20],
        }
    ]
    },
]

//Updates card data
export const UpdatesData =[
    {
        img: img11,
        name: "Andrew Thomas",
        not1: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
    },
    {
        img: img12,
        name: "James Andrew",
        not1: "has received Samsung gadget for charging battery.",
        time: "30 minutes ago",
    },
    {
        img: img13,
        name: "Iro Man",
        not1: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
        time: "2 hours ago",
    },
    
]