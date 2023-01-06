import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'


const Home = () => {
    
  return (
    
        <Flex justifyContent={"center"}>
            <Image w={680} h={680} src="https://i.insider.com/5fad6ca0355f4100197e5dd7?width=1136&format=jpeg"/>
            <Box p={20}>
                {/* {true ? <><SignIn /></> : <><SignUp /></>} */}
                <SignIn />
            
            </Box>
        </Flex>

  )
}

export default Home