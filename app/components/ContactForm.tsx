import { useEffect, useState } from 'react';
import { useTransition } from 'remix';

import { StyledContactForm, SuccessMessage, SuccessX } from '~/styles'

import styled from 'styled-components';



export function ContactForm(){
  const transition = useTransition();
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [requestState, setRequestState] = useState('idle');

  async function submitForm(){
    const body = JSON.stringify({name, subject, message})
    const response = await fetch('/resources/contact-form', {method: 'post', body});
    const data = await response.json();
    return data
  }

  function onSubmit(){
    return submitForm()
      .then(res => {
        setRequestState('success')
        setName('')
        setSubject('')
        setMessage('')

      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    if(transition.state === 'submitting'){
      setRequestState('submitting');
    }
  }, [transition, setRequestState]);

  return (
    <StyledContactForm onSubmit={onSubmit}>
      {requestState === 'success' && (
        <SuccessMessage>
          <div>Success!</div>
          <SuccessX onClick={() => setRequestState('idle')}>X</SuccessX>
        </SuccessMessage>
      )}
      <fieldset 
        disabled={transition.state === 'submitting'} 
        style={{display: 'flex', flexDirection: 'column', border: 'none'}}
      >
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
      </fieldset>
      <button 
        type='submit' 
        disabled={transition.state === 'submitting'}
      >
        Submit
      </button>
    </StyledContactForm>
  )
}