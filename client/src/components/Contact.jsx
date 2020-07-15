import React from 'react'

import {
  H1,
  Container,
  Form,
  Input,
  Label,
  ScrollAnchor,
  Section,
  Textarea,
} from '../styles/contentStyle'

const Contact = () => (
  <Section>
    <ScrollAnchor id='contact' />
    <Container center>
      <H1 dark>Contact Me</H1>
      <Form>
        <Label htmlFor='name'>
          Name:
          <Input id='name' type='text' placeholder='Enter your name...' />
        </Label>
        <Label htmlFor='email'>
          Email:
          <Input id='email' type='text' placeholder='Enter your email address...' />
        </Label>
        <Label htmlFor='message'>
          Message:
          <Textarea id='message' type='text' placeholder='Enter your message...' />
        </Label>
        <Input submit type='submit' value='SUBMIT' />
      </Form>
    </Container>
  </Section>
)

export default Contact
