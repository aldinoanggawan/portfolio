import Axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import {
  H1,
  Container,
  Form,
  FormError,
  Input,
  Label,
  ScrollAnchor,
  Section,
  Textarea,
} from '../styles/contentStyle'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { errors, formState, handleSubmit, register } = useForm({ mode: 'onChange' })

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const onSubmit = async data => {
    try {
      setIsLoading(true)
      const response = await Axios.post(process.env.REACT_APP_CONTACT_API, data, config)
      console.log(response.data.message)
      setIsLoading(false)
      toast.info('Your 📧 is successfully sent ! \n I will get back to you ASAP 😊', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <Section>
      <ScrollAnchor id='contact' />
      <Container center>
        <H1 dark>Contact Me</H1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor='name'>
            Name:
            <Input
              name='name'
              ref={register({ required: true, maxLength: 50 })}
              id='name'
              type='text'
              placeholder='Enter your name...'
            />
            {errors.name?.type === 'required' && <FormError>Name is required</FormError>}
            {errors.name?.type === 'maxLength' && (
              <FormError>Name exceeded maximum length</FormError>
            )}
          </Label>
          <Label htmlFor='email'>
            Email:
            <Input
              name='email'
              ref={register({
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              id='email'
              type='text'
              placeholder='Enter your email address...'
            />
            {errors.email?.type === 'required' && <FormError>Email is required</FormError>}
            {errors.email?.type === 'pattern' && <FormError>Incorrect email</FormError>}
          </Label>
          <Label htmlFor='message'>
            Message:
            <Textarea
              name='text'
              ref={register({ required: true })}
              id='message'
              type='text'
              placeholder='Enter your message...'
            />
            {errors.text?.type === 'required' && <FormError>Message is required</FormError>}
          </Label>
          <Input
            submit
            disabled={!formState.isValid || isLoading}
            type='submit'
            value={isLoading ? 'Loading...' : 'SUBMIT'}
          />
        </Form>
      </Container>
    </Section>
  )
}

export default Contact
