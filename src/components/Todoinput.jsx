import React from 'react'
import { useState } from 'react'
import { Input } from '@chakra-ui/react'
import { InputGroup } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import styles from './input.module.css'

const Todoinput = ({addTodo}) => {
     const [value, setValue] = useState("")
  return (
    <div>
        

          <div className={styles.inputbar}>
      <InputGroup mx='auto' width='md' size='md' >
      <Input
        onChange={(e)=>{
            setValue(e.target.value)
        }}
        pr='4.5rem'
        type="text"
        color='black'
        backgroundColor='white'
        placeholder='Write Something'
      /> 
     
        <Button mx='1' onClick={()=>{console.log(value)
        addTodo(value)
        }}>
          +
        </Button>
      </InputGroup>
   </div>
    </div>
  )
}

export default Todoinput