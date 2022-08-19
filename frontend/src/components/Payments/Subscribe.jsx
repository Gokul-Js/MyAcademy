import React from 'react'
import { Box, Container, Heading, Text, VStack, Button } from '@chakra-ui/react'

const Subscribe = () => {
  return <Container h='90vh' p='16'>
   <Heading children="Welcome" my="8" textAlign={"center"} />

   <VStack 
     boxShadow={"lg"}
     alignItems='stretch'
     borderRadius={'lg'}
     spacing="0"
    >
  <Box bg="yellow.400" p={'4'} css={{borderRadius:"8px 8px 0 0"}}>
    <Text textAlign={"center"} color={"black"} children={`Premium Pack - ₹599.00`} />
  </Box>
  <Box p="4"> 
  <VStack textAlign={'center'} px="8" mt={"4"} spacing="8">
    <Text children={`Join our Premium Pack & Get lifetime Access to all the content`} />
    <Heading size="md" children={"₹599 only "} />
   </VStack>

   <Button my="8" w="full" colorScheme={'yellow'}>Buy Now</Button>
  </Box>
   <Box
     bg="blackAlpha.600"
     p='4'
     css={{ borderRadius: '0 0 8px 8px'}}
   >

    <Heading 
      color={"white"} 
      textTransform="uppercase" 
      size="sm" 
      children={'100% refund at cancellation'}
    />

    <Text fontSize={'xs'} color="white" children={"*Terms & Conditions Apply"} />
   </Box>
    </VStack>
  </Container>



  
}

export default Subscribe