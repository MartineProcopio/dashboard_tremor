import {Card,Metric,Text,Flex, ProgressBar} from '@tremor/react'
import React from "react";

const CardBase = ()=>{
    return (

        <Card>
            <Text>Sales</Text> 
            <Metric>$71.2</Metric>
            <Flex>
                <Text>32% PAX</Text>
                <Text>$255.000</Text>
            </Flex>
            <ProgressBar percentageValue={30}/>
        </Card>

    )
}

export default CardBase;