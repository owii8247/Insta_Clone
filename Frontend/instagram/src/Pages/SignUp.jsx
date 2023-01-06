import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup } from '../Redux/auth/action'
import { Box, Button, FormControl, Image, Input, Text, useToast } from '@chakra-ui/react'

const SignUp = () => {
    
    const [username, setUserName] = useState("")
    const [fullname, setUserFullName] = useState("")
    const [email, setUserEmail] = useState("")
    const [password, setUserPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toast = useToast()

    const handleSignUp = () => {
        const payload = {
            username: username,
            fullname: fullname,
            email: email,
            password: password
        }
        console.log(payload)
        dispatch(signup(payload))
            .then((res) => {
                toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
            })
    }

    useEffect(() => {

        dispatch(signup())

    }, [dispatch])

    // const handleSignUp =(e) =>{
        
    //     const payload ={
    //         username,
    //         fullname,
    //         email,
    //         password
    //     }
    //     console.log(payload)
    //     fetch("https://insta-backend-deploy.onrender.com/signup",{
    //         method : "POST",
    //         mode: 'cors',
    //         headers : {
    //             "Content-Type" : "application/json"
                
    //         },
    //         body : JSON.stringify(payload)
    //     })
    //     .then((res)=> res.json())
    //     .then((res)=>{
    //         localStorage.setItem("token", res.token)
    //         alert("Signup Success")
    //         //navigate("/todos")
    //     })
    //     .catch((err)=>{
    //         console.log(err)
            
    //     })

    // }

  return (
    <Box w={400} border={"0.5px solid gray"} p={10}>
        <Image w={175} h={50} margin={"auto"} src="https://fontmeme.com/images/instagram-new-logo.png"/>
        <Text>Sign up to see photos and videos from your friends.</Text>
        <Button type='submit' w={"full"} colorScheme='facebook'>Log in with Facebook</Button>
         <FormControl >
                
                <Input type='text' placeholder='Fullname' onChange={(e) => setUserFullName(e.target.value)} />
                <Input type='text' placeholder='Username' onChange={(e) => setUserName(e.target.value)} />
                <Input type='email' placeholder='Email' onChange={(e) => setUserEmail(e.target.value)} />
                <Input type='text' placeholder='Password' onChange={(e) => setUserPassword(e.target.value)} /><br /><br />
                <Button type='submit' w={"full"} colorScheme='linkedin' onClick={handleSignUp}>Sign Up</Button>
            </FormControl>
            <Text>People who use our service may have uploaded your contact information to Instagram. Learn more</Text>
            <Text>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy</Text>
    </Box>
  )
}

export default SignUp