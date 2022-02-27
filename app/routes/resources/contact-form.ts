import { redirect } from 'remix'
import sendgrid from '@sendgrid/mail';

export async function action({request}: {request: Request}){
  const data = await request.json();
  const msg = {
    to: 'andrewangelle@gmail.com', // Change to your recipient
    from: `websiteMessage@andrewangelle.com`, // Change to your verified sender
    subject: `${data.name}-${data.subject}`,
    text: data.message
  }
  sendgrid.setApiKey(process.env.SEND_GRID_API_KEY!)
  await sendgrid.send(msg).then(res => res).catch(e => e.message)


  const body = JSON.stringify({ message: 'success'});
  
  const options = {
    status: 200,
    headers: {
      "Access-Controll-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  };

  return new Response(body, options)
}

export async function loader(){
  return redirect('/contact')
}