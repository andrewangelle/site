import { useState } from 'react';
import sendgrid from '@sendgrid/mail';
import { StyledContactForm } from '~/styles'

const msg = {
  to: 'andrewangelle@gmail.com', // Change to your recipient
  from: 'andrewangelle.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

export function ContactForm(){
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function onSubmit(){
    const body = JSON.stringify({name, subject, message})
    sendgrid.setApiKey(process.env.SEND_GRID_API_KEY!)
    sendgrid.send(msg).then(res => console.log(res)).catch(e => console.log(e))
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