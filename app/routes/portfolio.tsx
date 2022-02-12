import { Link, LoaderFunction, useLoaderData } from 'remix';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from '@fortawesome/free-brands-svg-icons'

import { Card, Wrapper, SplitLeft, SplitRight, NavItem, NameWrapper, NavList } from '~/styles';

type PortfolioData = {
  title: string;
  description: string;
  githubLink: string;
  demoLink?: string;
  demoText?: string;
}

export const loader: LoaderFunction = async args => {
  return [
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
  ]
}

export default function Portfolio(){
  const data = useLoaderData<PortfolioData[]>();
  return (
    <Wrapper>
      <SplitLeft>
        <NameWrapper>
          <section >
            {data.map((portfolioData, index) => {
              const { title, description, githubLink, demoLink, demoText } = portfolioData;
              return (
                <>
                  {index === 0 && <hr />}
                  <Card>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <footer>
                      <a
                        href={githubLink}
                        target="_blank"
                        style={{ color: 'inherit' }}
                      >
                        <FontAwesomeIcon
                          icon={Icons.faGithub}
                          size="2x"
                        />
                      </a>
                      {demoLink && (
                        <a
                          href={demoLink}
                          target="_blank"
                          style={{ color: 'inherit' }}
                        >
                          <button>{demoText}</button>
                        </a>
                      )}
                    </footer>
                  </Card>
                  <hr />
                </>
              )
            })}
          </section>
        </NameWrapper>
      </SplitLeft>
      
      <SplitRight>
        <NavList>
          <NavItem>
            <Link to='/' style={{color: 'white', textDecoration: 'none'}}>Home</Link>
          </NavItem>
          <NavItem>
            <Link to='/contact' style={{color: 'white', textDecoration: 'none'}}>Contact</Link>
          </NavItem>
        </NavList>
      </SplitRight>
    </Wrapper>
  );
}