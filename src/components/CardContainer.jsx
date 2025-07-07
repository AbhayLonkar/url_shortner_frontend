import React from 'react'
import Card from "./Card.jsx";
import {GiHumanTarget, GiLaptop} from "react-icons/gi";
import {MdOutlineAnalytics} from "react-icons/md";

const CardContainer = () => {

    const cards = [
        {
            icon: <GiHumanTarget size={40}/>,
            title: "Smart Targeting",
            subtitle : "Target your customers to increase your reach and redirect them to relevant page. Add a pixel to retarget them to your social media and campaign to capture them.",
        },
        {
            icon: <MdOutlineAnalytics  size={40}/>,
            title: "Smart Targeting",
            subtitle : "Target your customers to increase your reach and redirect them to relevant page. Add a pixel to retarget them to your social media and campaign to capture them.",
        },        {
            icon: <GiLaptop  size={40}/>,
            title: "Smart Targeting",
            subtitle : "Target your customers to increase your reach and redirect them to relevant page. Add a pixel to retarget them to your social media and campaign to capture them.",
        },
    ]

    return (
        <div className={'mt-10 flex p-3 justify-center items-center gap-2 flex-wrap '}>
            {
                cards.map((card,index) =><Card key={index} icon={card.icon} title={card.title} subtitle={card.subtitle}/>)
            }
        </div>
    )
}
export default CardContainer
