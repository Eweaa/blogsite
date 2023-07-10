import React, { useRef, useState } from 'react'
import { useAuth } from '../../Auth/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { Alert, Card, Form, Button } from 'react-bootstrap'
import LoginCSS from './Login.module.css'

const LogIn = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [ error, setError ] = useState()
    const [ loading, setLoading ] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Failed To Sign In')
        }

        setLoading(false)
    }

  return (
    <div className={LoginCSS.Login}>
        <div className={[LoginCSS.LS, 'p-1'].join(' ')}>
            <div>
            </div>
        </div>
        <div className={[LoginCSS.RS, 'p-1'].join(' ')}>
            <h1>The Blog</h1>
            <div className={LoginCSS.form}>
                <h1 className='text-center'>Welcome Back</h1>
                <h6 className='text-center mb-4'>Please Enter Your Details</h6>
                {error && <Alert variant='danger'>{error}</Alert>}
                <form onSubmit={handleSubmit}>

                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required />
                    </Form.Group>

                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required />
                    </Form.Group>

                    <Button className='w-100 mt-2' type='submit' disabled={loading}>Log In</Button>
                    <div className='w-100 text-center mt-2'>
                        <Link to='/forgot-password'>Forgot Password</Link>
                    </div>
                </form>
                <p className='text-center'>
                    Don't Have An Account? <Link to='/signup'>Sign Up</Link>
                </p>
            </div>

        </div>
    </div>
  )
}

export default LogIn