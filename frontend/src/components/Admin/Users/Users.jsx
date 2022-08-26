import { Grid, Box, Heading, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, HStack,Button } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'

const Users = () => {

 const users = [{
  _id:"xxdx",
  name:"John",
  email:"abc@email.com",
  role:"admin",
  subscription:{
    status:"active",
  }
 }]

 const updateHandler =(userId)=>{
    console.log(userId)
 }

 const deleteUserHandler =(userId)=>{
  console.log(userId)
}

  return (
    <Grid 
    css={{
      cursor: `url(${cursor}), default`,
    }}
    minH={'100vh'} 
    templateColumns={["1fr","5fr 1fr"]}
   >

 <Box p={['0','16']} overflowX='auto'>
  <Heading
       textTransform={'uppercase'}
       children='All Users'
       my='16'
       textAlign={['center', 'left']}
  />
  <TableContainer w={['100vw','full']}>
    <Table variant={'simple'} size='lg'>
      <TableCaption>All avialble Users in the Database</TableCaption>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
          <Th>Subscription</Th>
          <Th isNumeric>Action</Th>
        </Tr>
      </Thead>

      <Tbody>
        {
          users.map(item=>(
           <Row updateHandler={updateHandler} deleteUserHandler={deleteUserHandler} key={item._id}item={item} />
          ))
        }
    
      </Tbody>
    </Table>
  </TableContainer>
 </Box>
 <Sidebar />
   </Grid>
  )
}

export default Users

function Row({item, updateHandler, deleteUserHandler}){
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status === 'active' ? 'Active' :'Not Active'}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button onClick={()=> updateHandler(item._id)} variant={'outline'} color='purple.500'>Change Role</Button>
          <Button onClick={()=> deleteUserHandler(item._id)} color='purple.600'>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}