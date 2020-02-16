import styled from 'styled-components';
import { Colors } from '../../theme';

export default styled.h1`
    font-size: 22px;
    padding: 0;
    margin: 5px;
    font-family: 'Open Sans', sans-serif;
    color: ${({ dark }) => (dark ? Colors.cyan._900 : Colors.foreground._100)};
`;
