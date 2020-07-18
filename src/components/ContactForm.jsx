import PropTypes from 'prop-types'
import React from 'react'

import { Form, FormError, Input, Label, Row, Textarea } from '../styles/contentStyle'

const ContactForm = ({ formHook, isLoading, onSubmit }) => {
  const { errors, formState, handleSubmit, register } = formHook

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row form='true'>
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
          {errors.name?.type === 'maxLength' && <FormError>Name exceeded maximum length</FormError>}
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
      </Row>
      <Label message htmlFor='message'>
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
  )
}

ContactForm.propTypes = {
  formHook: PropTypes.shape({
    errors: PropTypes.any.isRequired,
    formState: PropTypes.any.isRequired,
    handleSubmit: PropTypes.any.isRequired,
    register: PropTypes.any.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default ContactForm
