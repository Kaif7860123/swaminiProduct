import { FaCircleHalfStroke, FaMoneyBillTransfer, FaMoneyBillTrendUp, FaShieldHalved } from "react-icons/fa6";
import { IoCard, IoNotifications } from "react-icons/io5";
import React from "react";
export const userCardData=[
    {
        id:0,
        text:"Today Income",
        icon:<FaMoneyBillTransfer/>,
        span:"0 ₹",
        bg1:"rgb(61 7 111)",
        bg2:"blueviolet"
    },
    {
        id:1,
        text:"Silver Income",
        icon:<FaMoneyBillTrendUp  />,
        span:" ₹",
        bg1:"rgb(131 78 26)",
        bg2:"rgb(223 137 52)"
    },
    {
        id:2,
        text:"Gold Income Count",
        icon:<IoCard />,
        span:"0",
        bg1:"rgb(129 108 33)",
        bg2:"#ffd500"
    },
    {
        id:3,
        text:"Joining Fast Income",
        icon:<IoCard/>,
        bg1:" rgb(23 94 159",
        bg2:"rgb(9 135 243)",
        link:"add_request_pending"
    },
    {
        id:4,
        text:"Reward",
        icon:<IoCard />,
        bg1:"rgb(237 78 37)",
        bg2:"#bc3908",

         
    },
    {
        id:5,
        text:"Total Income",
        icon:<FaMoneyBillTrendUp />,
        span:"₹",
        
        bg1:"rgb(245 58 129)",
        bg2:"rgb(247 15 33)",
    },
    {
        id:6,
        text:"Available Pin",
        icon:<FaCircleHalfStroke   />,
        span:"8 ",
        bg1:"#0a9396",
        bg2:"#94d2bd",
    },
    {
        id:7,
        text:"Total Team",
        icon:<FaCircleHalfStroke />,
        span:"18 ",
        bg1:"#9e2a2b",
        bg2:"#f4a261",
    },
     
]