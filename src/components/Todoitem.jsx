
import React from 'react'
import { Radio } from '@chakra-ui/react'
import { Tag } from '@chakra-ui/react'
import { TagLabel } from '@chakra-ui/react'
import { TagCloseButton } from '@chakra-ui/react'



const Todoitem = ({value,deleteTodo,id}) => {
  return (
    <div>
   

    <Tag
      mx='auto' width='md'
      size='lg'
      key='lg'
      marginTop='2'
      borderRadius='md'
      variant='solid'
      backgroundColor='white'
      color='black'
    >
      <TagLabel>{value}</TagLabel>

           <Radio mx='10' size='lg' name='1' colorScheme='blue'>
      
    </Radio>
    
    <TagCloseButton ml='-10' onClick={()=>{
      deleteTodo(id)
    console.log(id)}} />
     
    </Tag>
     </div>
     
  )
}

export default Todoitem