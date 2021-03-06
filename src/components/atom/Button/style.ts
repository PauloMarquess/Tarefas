import styled from 'styled-components';
import { COLORS } from '../../../common';

export const CardButton = styled.div`
    
    button {
        background-color: chartreuse;
        height: 40px;
        padding: 0 10px;
        border-radius: 5px;
        width: 100%;
        font-size: 16px;
        color: ${COLORS.BACKGROUND};
        font-weight: bold;
        cursor: pointer;
        border: none;
        
    }
`;
