import { FormEvent, useState } from 'react';
import { useTransition } from 'remix';

import { ErrorMessage, StyledContactForm, StyledFieldSet, SuccessMessage, SuccessX } from '~/styles'

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

  async function onFormSubmission(){
    try {
      const response = await submitForm();
      if(response.message === 'success'){
        setRequestState('success')
      }

      if(response.message === 'error'){
        setRequestState('error')
      }

      setName('')
      setSubject('')
      setMessage('')
    } catch (e) {
      setRequestState('error')
    }
  }

  function onSubmit(event?: FormEvent<HTMLFormElement>){
    event?.preventDefault();
    return onFormSubmission()
  }

  return (
    <StyledContactForm onSubmit={onSubmit}>
      {requestState === 'success' && (
        <SuccessMessage>
          <div>Success!</div>
          <SuccessX onClick={() => setRequestState('idle')}>X</SuccessX>
        </SuccessMessage>
      )}

      {requestState === 'error' && (
        <ErrorMessage>
          <div>Error!</div>
          <SuccessX onClick={() => setRequestState('idle')}>X</SuccessX>
        </ErrorMessage>
      )}

      <StyledFieldSet disabled={transition.state === 'submitting'} >
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
      </StyledFieldSet>

      <button 
        type='submit' 
        disabled={transition.state === 'submitting'}
      >
        Submit
      </button>
    </StyledContactForm>
  )
}