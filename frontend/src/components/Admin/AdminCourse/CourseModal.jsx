import { Box, Button, Grid, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from '@chakra-ui/react'
import React, {useState} from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'

const CourseModal = ({ 
    isOpen, 
    onClose,
    id,
    deleteButtonHandler,
    addLectureHandler, 
    courseTitle, 
    lectures = [], 
}) => {

 const [title, setTitle] = useState('')
 const [description, setDescription] = useState('')
 const [video, setVideo] = useState('')
 const [videoPrev, setVideoPrev] = useState('')

  return (
    <Modal isOpen={isOpen} size="full">

      <ModalOverlay />

      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton />

        <ModalBody p="16">
        <Grid templateColumns={["1fr","3fr 1fr"]} >
        <Box px={['0','16']} >
            <Box my="5">
              <Heading children={courseTitle} />
              <Heading children={`#${id}`} size='sm' opacity={0.4} />
            </Box>
            <Heading children={'Lectures'} size="lg" />
            
            <VideoCard 
              title="Intro Html"
              description="This is a Intro of course where you will learn basic of Html"
              num={1}
              lectureId="ghdsas"
              courseId={id}
              deleteButtonHandler={deleteButtonHandler}
            />
        </Box>

        <Box>
          <form onSubmit={e=>addLectureHandler(e,id,description,video)}>

          </form>
        </Box>
        </Grid>
        </ModalBody>
      </ModalContent>

    </Modal>
  )
}

export default CourseModal

function VideoCard({title,description,num,lectureId,courseId,deleteCourseHandler}){
    return (
    <Stack 
      direction={["column","row"]} 
      my='8' borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.5'}
      justifyContent={['flex-start', 'space-between']}
      p={["4","8"]}
      >
     <Box>
      <Heading size={'sm'} children={`#${num} ${title}`}/>
      <Text children={description} />
     </Box> 

     <Button 
      color={'purple.600'}
      onClick={() => deleteCourseHandler(courseId, lectureId)}
    >
        <RiDeleteBin7Fill />
     </Button>

    </Stack>
    )
}
