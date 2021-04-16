import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Tabs } from '../utils/tabs';

const Background = styled.div`
  background: var(--black);
  color: var(--white);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--header);
  border-bottom: 1px solid var(--gray);
  height: 70px;
  z-index: 2;
`;

const TabContainer = styled.div`
  height: 100%;
  display: none;

  @media screen and (min-width: 1032px) {
    display: initial;

    &:nth-child(2),
    &:nth-child(3) {
      display: inline-flex;
    }
  }

  .tab {
    text-transform: uppercase;
    padding: var(--space-4x);
    font-size: var(--text-sm);
    color: var(--primary-color);
    font-weight: 700;
    letter-spacing: -0.05em;
    height: 100%;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }

  .tab:hover,
  .tab:focus,
  .tab:active {
    color: var(--white);
  }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
`;

export default function Layout({ children, showHeader = true }) {
  return (
    <Background>
      {
        showHeader && (
          <Header>
            <TabContainer>
              {Tabs.map(({name, path}) => <Link key={path} className="tab" to={path}>{name}</Link>)}
            </TabContainer>
          </Header>
        )
      }
      <Page>
        <Main>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}>
            {children}
          </div>
        </Main>
      </Page>
    </Background>
  );
}