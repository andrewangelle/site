import { redirect } from 'remix'
import sendgrid from '@sendgrid/mail';

const msg = {
  to: 'andrewangelle@gmail.com', // Change to your recipient
  from: 'andrewangelle.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

export async function action({request}: {request: Request}){
  sendgrid.setApiKey(process.env.SEND_GRID_API_KEY!)
  await sendgrid.send(msg)


  const body = JSON.stringify({});
  
  const options = {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  };

  return new Response(body, options)
}

export async function loader(){
  return redirect('/contact')
}