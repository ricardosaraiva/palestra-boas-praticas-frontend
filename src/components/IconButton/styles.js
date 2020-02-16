import styled from 'styled-components';
import Button from '../Button';

export default styled(Button)`
    box-sizing: border-box;
    padding: 0;
    margin: 5px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    &:before {
      transform: scale(1.2);
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
`;
