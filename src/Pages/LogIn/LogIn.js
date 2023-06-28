import React, { useRef, useState } from 'react'
import { useAuth } from '../../Auth/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { Alert, Card, Form, Button } from 'react-bootstrap'

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
    <div>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Log In</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
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
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Don't Have An Account? <Link to='/signup'>Sign Up</Link>
        </div>
    </div>
  )
}

export default LogIn