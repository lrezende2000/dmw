import styled  from "styled-components";

const Container = styled.div`
  margin-top: var(--space-12x);
`;

const Event = styled.h1`
  font-size: 52px;
  line-height: 1.15;
  letter-spacing: 0.1em;
  font-weight: 700;
  text-align: center;
  margin: 0 0 25px;
  color: var(--primary-color);

  @media (min-width: 768px) {
    font-size: 100px;
    line-height: 1;
    font-weight: 800;
    margin: 0 0px 40px;
  }
`;

const DateContainer = styled.h2`
  font-size: 20px;
  line-height: 1.4;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--space-8x);
  color: var(--white);

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 80px;
  }
`;

const Separator = styled.div`
  height: 24px;
  width: 2px;
  background: var(--primary-color);
  margin: 0 var(--space-4x);
`;

export default function Title() {
  return (
    <Container>
      <Event>DIGITAL MAKER WEEK</Event>
      <DateContainer>
        <p>1 de agosto 2021</p>
        <Separator />
        <strong>Online</strong>
      </DateContainer>
    </Container>
  );
}