import styled, { keyframes } from 'styled-components';
import { Colors } from '../../theme';

const animateActive = keyframes`
  0% {
    opacity: 0;
    filter: blur(5px);
  }
  100% {
    opacity: 1;
  }
`;

const animateInative = keyframes`
  0% {
    width: 100%;
    opacity: 1;
    position: relative;
  }
  99% {
    position: relative;
    width: 100%;
    opacity: 0;
    filter: blur(5px);
  }
  100% {
    position: absolute;
  }
`;

export const Container = styled.button`
  align-items: center;
  border: none;
  background: none;
  font-size: 18px;
  color: ${Colors.cyan._900};
  font-weight: bold;
  cursor: pointer;
  word-break: break-word;
  display: flex;
  width: ${({ inative }) => (inative ? 0 : '100%')};
  opacity: ${({ inative }) => (inative ? 0 : 1)};
  position: ${({ inative }) => (inative ? 'absolute' : 'relative')};
  animation: ${({ inative, detail }) => {
    if (!detail) {
      return inative ? animateInative : animateActive;
    }
    return null;
  }} .5s linear;
`;

export const Detail = styled.div`
  width: 100%;
  padding: 5px 0;
  color: ${Colors.cyan._900};
`;

export const DetailTitle = styled.b``;
