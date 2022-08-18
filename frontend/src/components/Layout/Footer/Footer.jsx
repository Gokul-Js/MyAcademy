import React from 'react'
import { Box, Heading, HStack, Stack, VStack} from '@chakra-ui/react'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular} from "react-icons/ti"
import {DiGithub} from "react-icons/di"

const Footer = () => {
  return <Box padding={"4"} bg="blackAlpha.900" minH={'10vh'}>

    <Stack direction={["column","row"]} >
      <VStack alignItems={["center","flex-start"]} width="full">
      <Heading children="All Rights Reserved" color={'white'} />
      <Heading fontFamily={'body'} size="sm" children="@Gokul-Js" color={'yellow.400'} />
      </VStack>

      <HStack spacing={["2","10"]} justifyContent="center" color={'white'} fontSize="50">
       <a href="https://youtube.com/CricketOutbreaks12" target={'blank'}>
          <TiSocialYoutubeCircular />
       </a>
       <a href="https://www.instagram.com/cricket_outbreaks/" target={'blank'}>
          <TiSocialInstagramCircular />
       </a>
       <a href="https://github.com/Gokul-Js" target={'blank'}>
          <DiGithub />
       </a>
      </HStack>
    </Stack>

  </Box>
}

export default Footer