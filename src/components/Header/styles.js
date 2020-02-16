import styled from 'styled-components';
import { Colors } from '../../theme';

export const Container = styled.nav`
    background: ${Colors.cyan._100};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 10px 20px;
    margin-bottom: 50px;
    @media(max-width: 450px) {
      flex-direction: column;
      height: 120px;
    }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;
