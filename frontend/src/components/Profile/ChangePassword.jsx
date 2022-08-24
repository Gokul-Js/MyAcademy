import { Container, VStack, Input, Heading, Button } from '@chakra-ui/react'
import React, { useState }  from 'react'


const ChangePassword = () => {

    const [oldpassword, setOldPassword] = useState('')
    const [newpassword, setNewPassword] = useState('')
  return (
    <Container py="16" minH={'90vh'}>
        <form>
            <Heading 
              textTransform={'uppercase'}
              children ="Change Password"
              my="16" 
              textAllign={['center', 'left']}
            />

            <VStack spacing={'8'}>
            <Input
              required 
              id="password" 
              value={oldpassword} 
              onChange={e=>setOldPassword(e.target.value)}
              placeholder="Old Password"
              type={"password"}
              focusBorderColor="yellow.500"
            />

            <Input
              required id="password" 
              value={newpassword} 
              onChange={e=>setNewPassword(e.target.value)}
              placeholder="New Password"
              type={"password"}
              focusBorderColor="yellow.500"
            />

            <Button w='full' colorScheme={'yellow'} type="submit">Change</Button>
            </VStack>
        </form>

    </Container>
  )
}

export default ChangePassword