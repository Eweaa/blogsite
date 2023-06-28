import React, { useRef, useState } from 'react'
import { useAuth } from '../../Auth/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Card, Form, Button } from 'react-bootstrap'

const SignUp = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async e => {
      e.preventDefault()

      if (passwordRef.current.value !== passwordConfirmRef.current.value)
      setError('Passwords do not match')


      try {
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        navigate('/')
      } catch {
        setError('Falied to create an account')
      }
      setLoading(false)
    }
  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>

            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>

            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required/>
            </Form.Group>

            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} required/>
            </Form.Group>

            <Button className='w-100 mt-2' type='submit' disabled={loading}>Sign Up</Button>

          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? <Link to='/login'>Log In</Link>
      </div>
    </div>
  )
}

export default SignUp