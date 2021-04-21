import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Info = styled.div`
  grid-area: "info";
`;

const TicketContainer = styled.div`
  grid-area: "ticket";
`;

export default function Ticket({ userInfo }) {
  return (
    <Container>
      <Info>
        <h1>{userInfo.name}</h1>
      </Info>
      <TicketContainer>
        <h1>{userInfo.name}</h1>
      </TicketContainer>
    </Container>
  );
}