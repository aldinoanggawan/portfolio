import Axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import ContactForm from './ContactForm'
import { H1, Container, ScrollAnchor, Section } from '../styles/contentStyle'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { errors, formState, handleSubmit, register } = useForm({ mode: 'onChange' })

  const formHook = {
    errors,
    formState,
    handleSubmit,
    register,
  }

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
      toast.error('Uh oh something went wrong, please try again ! 😊', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
      setIsLoading(false)
    }
  }

  return (
    <Section>
      <ScrollAnchor id='contact' />
      <Container center>
        <H1 dark>Contact Me</H1>
        <ContactForm formHook={formHook} isLoading={isLoading} onSubmit={onSubmit} />
      </Container>
    </Section>
  )
}

export default Contact
