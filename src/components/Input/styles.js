import styled from 'styled-components';
import { Colors } from '../../theme';

export const Container = styled.div`
  margin: 0 20px 30px 20px ;
`;

export const Input = styled.input`
  border: solid 2px ${Colors.cyan._900};
  width: 100%;
  border-radius: 4px;
  font-size: 22px;
  padding: 18px;
  color: ${Colors.cyan._900};
  transition: all .5s ease;
  &::placeholder {
    color: ${Colors.cyan._300};
  }
  &:focus {
    border: solid 2px ${Colors.cyan._500};
    box-shadow: 
    0 0 2px ${Colors.cyan._300},
    0 3px 5px ${Colors.cyan._300};
  }
`;
