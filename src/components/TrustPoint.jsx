import React from 'react'
import {Box, Heading, Text} from "@chakra-ui/react"

const TrustPoint = ({trust_point}) => {
    let {point, description} = trust_point;
  return (
    <Box>
        <Heading as="h5" fontSize="1.2rem">{point}</Heading>
        <Text>{description}</Text>
    </Box>
  )
}

export default TrustPoint