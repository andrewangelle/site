import { Link, LoaderFunction, useLoaderData, useTransition } from "remix";

import { Wrapper, SplitLeft, SplitRight, NavItem, NavList, ContactWrapper, CenterItems } from "~/styles";
import { CatchBoundary, ContactForm } from "~/components";
import { ContactPageIcon } from "~/components/ContactPageIcon";
import { ContactIconData } from "~/utils";

const contactDataPath = 'http://andrewangelle.com/resources/contact';

export const loader: LoaderFunction = async args => {
  const response = await fetch(contactDataPath);
  const data = await response.json();
  return data
}

export function ErrorBoundary({error}: {error: Error}){
  return (
    <CatchBoundary error={error} />
  )
}

export default function Contact(){
  const data = useLoaderData<ContactIconData[]>();
  const transition = useTransition();
  return (
    <Wrapper>
      <SplitLeft>
        <CenterItems>
          <div>
            <ContactWrapper>
              {transition.state === 'loading' && null}
              {transition.state !== 'loading' && data.map((iconData, index) => (
                <ContactPageIcon key={index} {...iconData} index={index} />
              ))}  
            </ContactWrapper>
            <ContactForm />
          </div>
        </CenterItems>
      </SplitLeft>
    
      <SplitRight>
        <NavList>
          <NavItem>
            <Link to='/' style={{color: 'white', textDecoration: 'none'}}>Home</Link>
          </NavItem>
          <NavItem>
            <Link to='/portfolio' style={{color: 'white', textDecoration: 'none'}}>Portfolio</Link>
          </NavItem>
        </NavList>
      </SplitRight>
    </Wrapper>
  )
}