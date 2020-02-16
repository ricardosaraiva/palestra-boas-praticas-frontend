import styled from 'styled-components';
import { Colors } from '../../theme';

export const Container = styled.div`
   width: 65px;
   height: 65px;
   min-width: 65px;
   min-height: 65px;
   background: ${Colors.cyan._900};
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   color: ${Colors.foreground._100};
   font-size: 34px;
   position: relative;
   margin: 0 10px;
   font-family: 'Roboto', sans-serif;
   font-weight: normal;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 50%;
`;

export const IconContainer = styled.div`
  position: absolute;
  right: -12px;
  top: -3px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${Colors.foreground._100} solid 3px;
  background: ${Colors.cyan._900};
  & svg {
    padding: 0 !important;
    margin: 0 !important;
  }
`;
