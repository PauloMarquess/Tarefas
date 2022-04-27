import styled from 'styled-components';
import { COLORS } from '../../../common';

export const Card = styled.div`
    background-color: ${COLORS.BACKGROUND};
    margin: 8px 0;
    padding: 15px 20px;
    border-radius:5px;
    justify-content:space-between ;
    color:${COLORS.WHITE} ;
`;
export const CardCompleted = styled.div`
    background-color: ${COLORS.BACKGROUND};
    margin: 8px 0;
    padding: 15px 20px;
    border-radius: 5px;
    justify-content: space-between;
    color: ${COLORS.WHITE};
    border-left:6px solid  ${COLORS.primary};
`;
