import { Fragment } from 'react';
import { Link, LoaderFunction, useLoaderData, useTransition } from 'remix';
import { PortfolioCard } from '~/components/PortfolioCard';

import {  Wrapper, SplitLeft, SplitRight, NavItem, NameWrapper, NavList } from '~/styles';

const portfolioDataPath = 'http://andrewangelle.com/resources/portfolio';

export type PortfolioData = {
  title: string;
  description: string;
  githubLink: string;
  demoLink?: string;
  demoText?: string;
}

export const loader: LoaderFunction = async args => {
  const response = await fetch(portfolioDataPath);
  const data = await response.json();
  return data
}

export default function Portfolio(){
  const transition = useTransition();
  const data = useLoaderData<PortfolioData[]>();
  return (
    <Wrapper>
      <SplitLeft>
        <NameWrapper>
          {transition.state === 'loading' && null}
          {transition.state !== 'loading' && (
            <section>
              {data.map((portfolioData, index) => (
                <Fragment key={index}>
                  {index === 0 && <hr />}
                    <PortfolioCard {...portfolioData} />
                  <hr />
                </Fragment>
              ))}
            </section>
          )}
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