export type ContactIconData = {
  href: string;
  iconName: string;
}

export async function loader(){
  const contactIcons: ContactIconData[] = [
    {href: 'http://www.github.com/andrewangelle', iconName: 'faGithub'},
    {href: 'https://www.linkedin.com/in/andrew-angelle-21299774/', iconName: 'faLinkedin'},
    {href: 'mailto:andrewangelle@gmail.com?&subject=Development Services Inquiry', iconName: 'faEnvelopeSquare'}
  ];
  
  return new Response(JSON.stringify(contactIcons), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  })
}