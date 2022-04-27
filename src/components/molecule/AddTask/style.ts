import styled from 'styled-components';
import { COLORS } from '../../../common';

export const CardAdd = styled.div`
  display:flex ;
  align-items:center ;
  width:100% ;
  gap:10px ;
  Input{
    width:100% ;
    outline:0 ;
    font-size:18px ;
    background-color:${COLORS.BACKGROUND} ;
    color:${COLORS.WHITE} ;
  }
  Button{
  width:150px ;
  }
`;
