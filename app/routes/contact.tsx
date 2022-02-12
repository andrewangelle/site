import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from '@fortawesome/free-brands-svg-icons'
import * as Iconz from '@fortawesome/free-solid-svg-icons'
import { Link } from "remix";

import { Wrapper, SplitLeft, SplitRight, NavItem, NavList, ContactWrapper } from "~/styles";

export default function Contact(){
  return (
    <Wrapper>
      <SplitLeft>
        <ContactWrapper>
          <a
            href="http://www.github.com/andrewangelle"
            target="_blank"
            style={{ color: 'inherit' }}
          >
            <FontAwesomeIcon
              icon={Icons.faGithub}
              size="6x"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-angelle-21299774/"
            target="_blank"
            style={{ color: 'inherit' }}
          >
            <FontAwesomeIcon
              icon={Icons.faLinkedin}
              size="6x"
            />
          </a>
          <a
            href="mailto:andrewangelle@gmail.com?&subject=Development Services Inquiry"
            style={{ color: 'inherit' }}
          >
            <FontAwesomeIcon
              icon={Iconz.faEnvelopeSquare}
              size="6x"
            />
          </a>
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