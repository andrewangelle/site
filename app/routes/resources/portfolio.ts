export async function loader(){
  const data = [
    {
      title: 'React Glide',
      description: 'a multi purpose carousel module built in react',
      githubLink: 'http://www.github.com/andrewangelle/react-glide',
      demoLink: 'https://codesandbox.io/s/r7166733lm',
      demoText: 'Demo'
    },
    {
      title: 'React PayPal Button',
      description: 'A button component to implement PayPal\'s Express Checkout in React',
      githubLink: 'http://www.github.com/andrewangelle/react-paypal-button',
      demoLink: '',
      demoText: ''
    },
    {
      title: 'Websynth',
      description: 'A synthesizer built as a webapp using the Web Audio API',
      githubLink: 'https://github.com/andrewangelle/websynth',
      demoLink: '',
      demoText: '' 
    }
  ];

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  })
}