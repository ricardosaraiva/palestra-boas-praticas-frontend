import styled from 'styled-components';
import { Colors, Radius } from '../../theme';

export default styled.button`
    box-sizing: border-box;
    margin: 5px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: ${Radius.default};
    cursor: pointer;
    background: ${({ active }) => (!active ? Colors.cyan._500 : Colors.cyan._900)};
    opacity: .6;
    transition: all .5s ease;
    position: relative;
    color: ${Colors.foreground._100};
    font-size: 16px;
    font-weight: bold;
    
    &:before {
      width: 100%;
      height: 100%;
      transition: all 1s ease;
      position: absolute;
      content: '';
      background: ${Colors.cyan._500};
      transform: scale(1.1, 1.2);
      border-radius: ${Radius.default};
      opacity: 0;
      z-index: -1;
      box-shadow: 0 0 5px 1px ${Colors.cyan._500};
    }
    &:hover:before {
        opacity: .3;
    }
`;
