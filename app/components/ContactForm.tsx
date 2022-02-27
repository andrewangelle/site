import { useState } from 'react';

import { StyledContactForm } from '~/styles'

export function ContactForm(){
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function onSubmit(){
    const body = JSON.stringify({name, subject, message})
    fetch('http://andrewangelle.com/resources/contact-form', {method: 'post', body})
  }

  return (
    <StyledContactForm onSubmit={onSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        name='name' 
        type='text' 
        value={name} 
        onChange={event => setName(event.target.value)} 
      />

      <label htmlFor='name'>Subject</label>
      <input
        name='subject' 
        type='text' 
        value={subject} 
        onChange={event => setSubject(event.target.value)} 
      />

      <label htmlFor='name'>Message</label>
      <input
        name='message' 
        type='textarea' 
        value={message} 
        onChange={event => setMessage(event.target.value)} 
      />

      <button type='submit'>Submit</button>
    </StyledContactForm>
  )
}