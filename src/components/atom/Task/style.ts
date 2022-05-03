import styled from 'styled-components';
import { COLORS } from '../../../common';

interface CardProps {
    current?: boolean;
}

export const Card = styled.div<CardProps>`
    width: 200px;
    margin-top: 8px 0;
    padding: 15px 20px;
    border-radius: 5px;
    color: ${COLORS.WHITE};
    cursor: pointer;
    border-left: ${({ current }) =>
        current ? `6px solid ${COLORS.primary}` : 'none'};
`;
export const CardTask = styled.div`
    margin-top:6px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${COLORS.BACKGROUND};
    
`;

export const CardButton = styled.div`
    display: flex;
    gap: 10px;
    Button {
        font-size:14px ;
        font-weight:bold ;
        margin-right:30px ;
        background: transparent;
        color:${COLORS.primary} ;
    }
`;
