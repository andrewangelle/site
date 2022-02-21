import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from '@fortawesome/free-brands-svg-icons'
import * as Iconz from '@fortawesome/free-solid-svg-icons'
import { Link, LoaderFunction, useLoaderData, useTransition } from "remix";

import { Wrapper, SplitLeft, SplitRight, NavItem, NavList, ContactWrapper } from "~/styles";
import { CatchBoundary } from "~/components";
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
        <ContactWrapper>
          {transition.state === 'loading' && null}
          {transition.state !== 'loading' && data.map(({href, iconName}, index) => {
            return (
              <a
                key={iconName}
                href={href}
                target="_blank"
                style={{ color: 'inherit' }}
              >
                <FontAwesomeIcon
                  icon={
                    // @ts-expect-error
                    index === 2 ? Iconz[iconName] : Icons[iconName]
                  }
                  size="6x"
                />
              </a>            
            )
          })}
        </ContactWrapper>
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
  );
}