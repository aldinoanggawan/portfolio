import React from 'react'

import {
  H1,
  Container,
  Form,
  Input,
  Label,
  Section,
  Textarea,
} from '../styles/content'

const Contact = () => (
  <Section>
    <Container center>
      <H1 dark>Contact</H1>
      <Form>
        <Label htmlFor='name'>
          Name:
          <Input id='name' type='text' placeholder='Enter your name...' />
        </Label>
        <Label htmlFor='email'>
          Email:
          <Input
            id='email'
            type='text'
            placeholder='Enter your email address...'
          />
        </Label>
        <Label htmlFor='message'>
          Message:
          <Textarea
            id='message'
            type='text'
            placeholder='Enter your message...'
          />
        </Label>
        <Input submit type='submit' value='SUBMIT' />
      </Form>
    </Container>
  </Section>
)

export default Contact
