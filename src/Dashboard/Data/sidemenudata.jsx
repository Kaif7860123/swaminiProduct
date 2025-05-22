import { AiOutlineDashboard } from "react-icons/ai";
import { HiUserAdd } from "react-icons/hi";
import { RiProfileLine } from "react-icons/ri";
import { IoIosSettings, IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RxDrawingPinFilled } from "react-icons/rx";
import { FaArrowRightToBracket, FaEarthEurope, FaLayerGroup, FaMoneyBill, FaRegFolderOpen, FaRocketchat } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";
import { FaPinterestP, FaTicketAlt, FaUserSecret } from "react-icons/fa";
import React from "react";
export const sidemenudata = [
    {
        id:1,
        logo:<AiOutlineDashboard size={25} />,
        name:"Dashboard",
        path:"user/Dashboard"
    },
    {
        id:2,
        logo:<HiUserAdd  size={25} />,
        name:"New Register",
        path:"user/New_Register"

    },
    {
        id:3,
        logo:<FaPinterestP  size={25} />,
        name:"View Pin",
        path:"user/view_pin"
        
    },
    {
        id:4,
        logo:<FaUserSecret  size={25} />,
        name:"Join User",
        path:"user/join_user"
    },
    {
        id:5,
        logo:<FaArrowRightToBracket  size={25} />,
        name:"Add Request",
        path:"user/add_request"
    },
    {
        id:6,
        logo1:<RiProfileLine  size={25} />,
        logo2:<IoMdArrowDropdown  size={25} />,
        logo3:<IoMdArrowDropup  size={25} />,
        ids:"one",
        name1:"Profile Management",
        h:"100px",
        sublist:[
           
            {
                id:1,
                name:"My Profile",
                namepath:"user/profile_overview"
            },
            {
                id:2,
                name:"Welocome Kit",
                namepath:"user/welcome_kit"

            }
        ]
    },
    {
        id:7,
        logo1:<RxDrawingPinFilled  size={25} />,
        logo2:<IoMdArrowDropdown  size={25} />,
        logo3:<IoMdArrowDropup  size={25} />,
        ids:"two",
        name1:"e-Pin Management",
        h:"95px",
        sublist:[
            {
                id:3,
                name:"Transfer",
                namepath:"user/transfer"

            },
            {
                id:4,
                name:"My e-pins",
                namepath:"user/my_epins"
            },
            
        ]
    },
    {
        id:8,
        logo1:<FaEarthEurope  size={25} />,
        logo2:<IoMdArrowDropdown  size={25} />,
        logo3:<IoMdArrowDropup  size={25} />,
        ids:"three",
        name1:"My Network",
        h:"160px",
        sublist:[
            {
                id:5,
                name:"Direct Member",
                namepath:"user/direct_member"

            },
            {
                id:6,
                name:"Downline Member",
                namepath:"user/downline_member"

            },
            {
                id:7,
                name:"Mother Tree",
                namepath:"user/mother_tree"
            },
            {
                id:8,
                name:"Gold Downline Member",
                namepath:"user/gold_downline_member"
            }
        ]
    },
    {
        id:9,
        logo1:<FaRegFolderOpen  size={25} />,
        logo2:<IoMdArrowDropdown  size={25} />,
        logo3:<IoMdArrowDropup  size={25} />,
        ids:"four",
        name1:"Reports",
        h:"130px",
        sublist:[
            {
                id:9,
                name:"Silver Binary Income",
                namepath:"user/silver_binary_income"
            },
            {
                id:10,
                name:"Gold Counting",
                namepath:"user/gold_counting"
            },
            {
                id:11,
                name:"Gold Binary Income",
                namepath:"user/gold_binary_income"

            },
            
        ]
    },
    {
        id:10,
        logo1:<FaMoneyBill  size={25} />,
        logo2:<IoMdArrowDropdown  size={25} />,
        logo3:<IoMdArrowDropup  size={25} />,
        ids:"five",
        name1:"Daily Payout",
        h:"131px",
        sublist:[
            {
                id:12,
                name:"Processed Payout",
                namepath:"user/processed_payout"
            },
            {
                id:13,
                name:"Reimbursement of Expenditure",
                namepath:"user/reimbursement_of_expenditure"
            },
            {
                id:14,
                name:"TDS Charge",
                namepath:"user/tds_charge"


            },
            
        ]
    },
    {
        id:11,
        logo:<FaTicketAlt  size={25} />,
        name:"Promotion Reward ",
        path:"user/promotion_reward"
    },
    {
        id:12,
        logo:<FaMoneyBill  size={25} />,
        name:"Income History ",
        path:"user/income_history"
    },
    {
        id:13,
        logo:<FaLayerGroup  size={25} />,
        name:"Payment Received History",
        path:"user/payment_received_history"

        
    },
    {
        id:14,
        logo:<FaRocketchat  size={25} />,
        name:"Chat Support ",
        path:"user/chat_support"

    },
    {
        id:15,
        logo1:<IoIosSettings  size={25} />,
        logo2:<IoMdArrowDropdown  size={25} />,
        logo3:<IoMdArrowDropup  size={25} />,
        ids:"six",
        name1:"Setting",
        h:"101px",
        sublist:[
            {
                id:15,
                name:"Change Password",
                namepath:"user/change_password"
            },
            {
                id:16,
                name:"Change Transection Pass...",
                namepath:"user/change_transection_password"
            },
            
        ]
    },
    {
        id:16,
        logo:<IoLogOutOutline  size={25} />,
        name:"Logout",
        path:"Logout"
    },
]