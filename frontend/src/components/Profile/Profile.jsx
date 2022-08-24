import React,{useState} from 'react'
import {Avatar, Button, Container, Heading, HStack, Stack, Text, VStack, Image, Modal, ModalBody, ModalOverlay, ModalCloseButton, ModalContent, Input, ModalFooter, useDisclosure, ModalHeader} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { fileUploadCss } from '../Auth/Register'

const Profile = () => {

  const user = {
    name: "Gokul",
    email: "gokul@gmail.com",
    createdAt: String(new Date().toISOString()),
    role: "user",
    subscription: {
      status:"active"
    },
    playlist:[
      {
        course:"abvcf",
        poster:"https://static.vecteezy.com/system/resources/previews/000/689/056/original/web-development-landing-page-template-with-header-vector.jpg",
      }
    ]
  }

  const removeFromPlaylistHandler = id => {
    console.log(id)
  }

  const ChangeImageSubmitHandler =(e, image) => {
    e.preventDefault();
    console.log(image)
  }
      

  const {isOpen, onClose, onOpen} = useDisclosure()

  return (
   <Container minH={"95vh"} maxW="container.lg" py="8">
    <Heading children="Profile" m="8" textTransform={'uppercase'} />

    <Stack
     justifyContent={'flex-start'}
     direction={['column','row']}
     alignItems={'center'}
     spacing={["8","16"]}
     padding={"8"}
    >
     <VStack>
      <Avatar boxSize={'48'}/>
      <Button onClick={onOpen} colorScheme={'yellow'} variant='ghost'>Change Photo</Button>
     </VStack>

     <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
       <HStack>
         <Text children="Name" fontWeight={'bold'} />
         <Text children={user.name} />
       </HStack>
       <HStack>
         <Text children="Email" fontWeight={'bold'} />
         <Text children={user.email} />
       </HStack>
       <HStack>
         <Text children="CreatedAt" fontWeight={'bold'} />
         <Text children={user.createdAt.split("T")[0]} />
       </HStack>
       
        {user.role !=="admin" && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription.status ==="active"?(
                  <Button color={'yellow.500'} variant="unstyled">Cancel Subscription</Button>
                ):(
                  <Link to="/subscribe">
                    <Button colorScheme={'yellow'}>Subscribe</Button>
                  </Link>
                )
              }
            </HStack>
            )}
        
        <Stack 
          direction={['column','row']}
          alignItems={'center'}
        >
         <Link to="/updateprofile">
          <Button>Update Profile</Button>
         </Link>
         
         <Link to="/changepassword">
          <Button>Change Password</Button>
         </Link>
        </Stack>
     </VStack>
    </Stack>

     <Heading children="Playlist" size={'md'} my="8" />
      {
        user.playlist.length > 0 && (
          <Stack 
           direction={['column','row']}
           alignItems={'center'}
           flexWrap="wrap"
           p="4"
          >

            {
              user.playlist.map((element)=>(
                <VStack w="48" m="2" key={element.course}>
                  <Image boxSize={"full"} objectFit="contain" src={element.poster} />
                  <HStack >
                    <Link to={`/course/${element.course}`}>
                      <Button variant={'ghost'} colorScheme={'yellow'}>Watch Now</Button>
                    </Link>
                    <Button onClick={()=> removeFromPlaylistHandler(element.course)}>
                      <RiDeleteBin7Fill />
                    </Button>
                  </HStack>
                </VStack>
              ))
            }
          </Stack>
        )
      }
    
     <ChangePhotoBox 
       ChangeImageSubmitHandler={ChangeImageSubmitHandler}
       isOpen={isOpen} 
       onClose={onClose}  />


  </Container>
  )
}

export default Profile

function ChangePhotoBox({isOpen,onClose,ChangeImageSubmitHandler}){

 const [image,setImage] = useState('')
 const [imagePrev, setImagePrev] = useState('')

  const changeImage = e =>{
    const file = e.target.files[0]
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
        setImagePrev(reader.result)
        setImage(file)
    }
  }

  const closeHandler = ()=>{
    onClose();
    setImagePrev('')
    setImage('')
  }

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}> 
      <ModalOverlay backdropFilter={'blur(10px'} />
      <ModalContent>
       <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
         <Container>
            <form onSubmit={e =>ChangeImageSubmitHandler(e, image)}>
              <VStack spacing={"8"}>
                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}
                <Input type={"file"} css={{"&::file-selector-button":fileUploadCss}} onChange={changeImage} />
                <Button w="full" colorScheme='yellow' type='submit'>Change</Button>
              </VStack>
            </form>
         </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr="3" onClick={closeHandler}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}