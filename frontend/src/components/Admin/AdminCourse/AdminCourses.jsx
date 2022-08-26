import { Grid, Box, Heading, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, HStack,Button, Image, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import cursor from '../../../assets/images/cursor.png'
import CourseModal from './CourseModal'
import Sidebar from '../Sidebar'

const AdminCourses = () => {

 const courses = [{
  _id:"xxdx",
  title:"html css course",
  poster:{
    url:"https://static.vecteezy.com/system/resources/previews/000/689/056/original/web-development-landing-page-template-with-header-vector.jpg",
  },
  category:"web development",
  createdBy: "X-dev",
  views:33,
  numOfVideos:9
 },
]

 const {isOpen, onClose, onOpen} = useDisclosure()

 const courseDetailsHandler = (userId) => {
    onOpen()
 }

 const deleteButtonHandler = userId =>{
  console.log(userId)
}

const deleteLectureButtonHandler = (courseId, LectureId) =>{
  console.log(courseId)
  console.log(LectureId)
}

const addLectureHandler = (e,courseId,title,decription,video) => {
 e.preventDefault()
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
       children='All Courses'
       my='16'
       textAlign={['center', 'left']}
  />
  <TableContainer w={['100vw','full']}>
    <Table variant={'simple'} size='lg'>
      <TableCaption>All avialble Coursess in the Database</TableCaption>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Title</Th>
          <Th>Poster</Th>
          <Th>Category</Th>
          <Th>Creator</Th>
          <Th isNumeric>Views</Th>
          <Th isNumeric>Lectures</Th>
          <Th isNumeric>Action</Th>
        </Tr>
      </Thead>

      <Tbody>
        {
          courses.map(item=>(
           <Row courseDetailsHandler={courseDetailsHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item} />
          ))
        }
    
      </Tbody>
    </Table>
  </TableContainer>
  
  <CourseModal 
    isOpen={isOpen} 
    onClose={onClose}
    id={'dhhdgg'}
    courseTitle="Html CSS Course"
    deleteButtonHandler={deleteLectureButtonHandler}
    addLectureHandler={addLectureHandler}
  />

 </Box>
 <Sidebar />
   </Grid>
  )
}


function Row({item, courseDetailsHandler, deleteButtonHandler}){
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.title}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button onClick={()=> courseDetailsHandler(item._id)} variant={'outline'} color='purple.500'>View Lectures</Button>
          <Button onClick={()=> deleteButtonHandler(item._id)} color='purple.600'>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}

export default AdminCourses