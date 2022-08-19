import React from 'react'
import { Avatar, Box, Button, Container, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import introVideo from "../../assets/videos/intro.mp4"
import {RiSecurePaymentFill} from "react-icons/ri"
import termsAndCondition from "../../assets/docs/termsAndCondition"

const Founder = () => (
    <Stack 
      direction={["column", "row"]}
      spacing={["4", "16"]}
      padding={"8"}
    >
        <VStack>
           <Avatar src="https://avatars.githubusercontent.com/u/87115527?v=4" boxSize={["40", "48"]} />
           <Text children="Co-Founder" opacity={0.7}/>
        </VStack>

        <VStack justifyContent={"center"} alignItems={["center","flex-start"]} >
            <Heading children="Gokul_Js" size={["md", "xl"]} />
            <Text textAlign={["center", "left"]} children={`Hi, I am a ReactJs Developer. I am so passionate about to build new JS Projects. `} />
        </VStack>
    </Stack>
)

const VideoPlayer = ()=>(
    <Box>
        <video 
      autoPlay
      loop
      muted
      controls 
      controlsList='nodownload nofullscreen noremoteolayback' 
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
      ></video>

    </Box>
)

const TandC = () => (
   <Box>
     <Heading size={'md'} children="Terms and Condition" textAlign={["center","left"]} my={'4'} />
     <Box>
        <Box h="sm" p="4" overflow={'scroll'}>
            <Text fontFamily={"heading"} letterSpacing={"wildest"} textAlign={['center', 'left']} >{termsAndCondition}</Text>
            <Heading my={'4'} size={'xs'}
            children="Refund only applicable for cancellation within 7 days"
        />
        </Box>
     </Box>
   </Box>


)

const About = () => {
  return <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
    <Heading children="About Us" textAlign={['center', 'left']} />
    
    <Founder />
    <Stack m="8" direction={["column", "row"]} alignItems="center">
        <Text fontFamily={"cursive"} m="8" textAlign={["center", "left"]}>
            We are a online course streaming Platform with Some Premium Perks for MyAcademy Members.
        </Text>

        <Link to="/subscribe">
            <Button variant={"ghost"} colorScheme="yellow">Checkout our Plan</Button>
        </Link>
    </Stack>

    <VideoPlayer />

    <TandC termsAndCondition={"termsAndCondition"} />

    <HStack my="4" p={'4'}>
        <RiSecurePaymentFill />
        <Heading 
          size={'xs'} 
          fontFamily="sans-serif" 
          children={"Payment is secured by Razorpay"} />
    </HStack>
  </Container>
}

export default About