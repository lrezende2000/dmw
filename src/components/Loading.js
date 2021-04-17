import styled, { keyframes } from 'styled-components';

const grow = keyframes`
  to {
    transform: scaleY(2);
  }
`;

const Load = styled.span`
  background: var(--primary-color);
  width: 10px;
  height: 20px;
  display: inline-block;
  margin: 0 2px;
  animation: ${grow} ${props => `0.5s ${props.time} ease-in-out alternate infinite`};
`;

export default function Loading() {
  return (
    <>
      <Load time="-0.45s" />
      <Load time="-0.3s" />
      <Load time="-0.15s" />
      <Load time="0s" />
    </>
  );
}