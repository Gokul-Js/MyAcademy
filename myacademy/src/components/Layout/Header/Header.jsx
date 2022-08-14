import React from 'react'
import { Link } from 'react-router-dom'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react'
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri"

const LinkButton = ({url="/", title="Home"}) =>
(
    <Link to={url}>
    <Button variant={'ghost'}>{title}</Button>
 </Link>
)
const Header = () => {

  const {isOpen, onOpen, onClose} = useDisclosure()

  const isAuthenticated = true;
  const user ={
    role: 'admin',
  }
  const logoutHandler = ()=> {
    console.log("Logout")
  }
  return <>
    <ColorModeSwitcher />

    <Button 
      onClick={onOpen}
      colorScheme={'yellow'}
      width="12" 
      height={'12'} 
      rounded='full' 
      position={'fixed'}
      top="6"
      left="6"
    >
     <RiMenu5Fill />
    </Button>
     
    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay backdropFilter={'blur(1px)'}/>
       <DrawerContent>
        <DrawerHeader borderBottomWidth={'1px'}>MY ACADEMY</DrawerHeader>
        <DrawerBody>
           <VStack spacing={'4'} alignItems='flex-start'>
           b <LinkButton url="/" title='Home'/>
             <LinkButton url="/courses" title='Browse All Courses'/>
             <LinkButton url="/request" title='Request a Course'/>
             <LinkButton url="/contact" title='Contact Us'/>
             <LinkButton url="/about" title='About'/>

             <HStack 
               justifyContent={'space-evenly'} 
               position="absolute"
               bottom={"2rem"}
               width="80%"
            >
                {isAuthenticated?(
                <>
                <VStack>
                  <HStack>
                  <Link to="/profile">
                    <Button variant={"ghost"}colorScheme={'yellow'}>Profile</Button>
                </Link>
                    <Button variant={"ghost"} onClick={logoutHandler}>
                      <RiLogoutBoxLine />
                      Logout</Button>
                  </HStack>

                  {
                    user && user.role==='admin' && 
                     <Link to="/admin/dashboard">
                      <Button colorScheme={'purple'} variant='ghost'>
                        <RiDashboardFill />
                        Dashboard
                      </Button>
                    </Link>
                  }
                </VStack>
                </>):(<>
                <Link to="/login">
                    <Button colorScheme={'yellow'}>Login</Button>
                </Link>

                <p>OR</p>

                <Link to="/register">
                    <Button colorScheme={'yellow'}>SignUp</Button>
                </Link>
                </>
                )}
             </HStack>
            </VStack> 
        </DrawerBody>
       </DrawerContent>
    </Drawer>
    </>
}

export default Header

