import {TabList, Tab} from '@tremor/react'
import {HandThumbUpIcon,HandThumbDownIcon} from '@heroicons/react/24/solid'
import React from "react";

const TabListBase = ()=>{
    return (

        <TabList defaultValue={1} marginTop='mt-6'>
            <Tab value={1} text='pestana 1' icon={HandThumbUpIcon}/>
            <Tab value={2} text='pestana 2' icon={HandThumbDownIcon}/>

        </TabList>

    )
}

export default TabListBase;