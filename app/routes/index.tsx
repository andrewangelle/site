import { Link } from 'remix';
import { 
  Wrapper,  
  NameText, 
  NameTitle, 
  NameWrapper, 
  SplitLeft, 
  SplitRight,
  NavItem,
  NavList
} from '~/styles/Home.styled';


export default function Index() {
  return (
    <Wrapper>
      <SplitLeft>
        <NameWrapper>
          <NameText>Andrew Angelle</NameText>
          <NameTitle>front end software developer</NameTitle>
        </NameWrapper>
      </SplitLeft>

      <SplitRight>
        <NavList>
          <NavItem>
            <Link to='/portfolio'>Portfolio</Link>
          </NavItem>
          <NavItem>
            <Link to='/contact'>Contact</Link>
          </NavItem>
        </NavList>
      </SplitRight>
    </Wrapper>
  );
}
