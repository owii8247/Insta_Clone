import { Box, Button, FormControl, Image, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../Redux/auth/action'
import SignUp from './SignUp'

const SignIn = () => {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toast = useToast()

    const handleLogin = () => {
        if (userName && userEmail && userPassword) {
            dispatch(login({ userName, userEmail, userPassword }))
                .then((res) => {
                    toast({
                        title: 'Account logedin.',
                        description: "We've loged in your account.",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })
                })
                .catch((err) => {
                    navigate(<SignUp />)
                })
        }
    }

    const signupButton = () => {
        navigate("/signup")
    }
    return (
        <>
            <Box w={400} border={"0.5px solid gray"} p={10}>
                <Image w={175} h={50} margin={"auto"} src="https://fontmeme.com/images/instagram-new-logo.png" />

                <FormControl >
                    <Input type='text' placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <Input type='email' placeholder='Email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                    <Input type='password' placeholder='Password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} /><br /><br />
                    <Button type='submit' w={"full"} colorScheme='linkedin' onClick={handleLogin}>Sign In</Button>
                </FormControl>


            </Box>

            <Box w={400} border={"0.5px solid gray"} p={10}>
                <Button type='submit' w={"full"} colorScheme='linkedin' onClick={signupButton}>Sign Up</Button>
            </Box>
        </>
    )
}

export default SignIn