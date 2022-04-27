import styled from 'styled-components';
import { COLORS } from '../../../common';

interface CardProps{
    current?:boolean
}

export const Card = styled.div<CardProps>`
    background-color: ${COLORS.BACKGROUND};
    margin: 8px 0;
    padding: 15px 20px;
    border-radius: 5px;
    justify-content: space-between;
    color: ${COLORS.WHITE};
    cursor: pointer;
    border-left: ${({ current }) =>
        current ? `6px solid ${COLORS.primary}` : 'none'};
`;
