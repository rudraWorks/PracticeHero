import React, { useEffect, useContext } from 'react'
import { Typography } from '@mui/material'
import UserContext from '../Contexts/User/UserContext'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

function Login() {

    const { user, dispatch } = useContext(UserContext)
    const navigate = useNavigate()

    async function handleCallbackResponse(response) {
        const userObject = jwt_decode(response.credential)
        const { name, picture, email, sub } = userObject
        dispatch({ type: 'LOGIN', user: { name, picture, email } })
        console.log(userObject)
    }
    useEffect(() => {

        if (user) {
            navigate('/')
        }

        /* global google */
        setTimeout(() => {
            window.google.accounts.id.initialize({
                client_id: '488871700296-s99bcv7h5vgda1irc0pthfr43l5q9ano.apps.googleusercontent.com',
                callback: handleCallbackResponse
            })

            window.google.accounts.id.renderButton(
                document.getElementById('signinDiv'),
                {
                    theme: "dark",
                    size: "large",
                }
            )
            // window.google.accounts.id.prompt()
        }, 300)
    }, [user])
    return (
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant='h4'>Login</Typography>
            <div style={{marginTop:'30px'}} id='signinDiv'></div>
        </div>
    )
}

export default Login