import styled from 'styled-components';
import { COLORS } from '../../common';

export const MiniContainer = styled.div`
  background:#000;
  border-radius:4px ;
  border:2px solid ${COLORS.primary};
  gap:30px ;
  width:40% ;
  padding:30px ;
  height:70vh ;
  overflow-y:auto ;
`;
