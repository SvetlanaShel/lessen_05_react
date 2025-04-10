import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ClientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1;
  padding: 60px;
  background-color: rgb(200, 150, 74);
`

export const Title = styled.div`
 font-size: 40px;
 font-weight: bold;
 color: #871b5d;
`

export const StyledLink = styled(Link)`
 font-size: 30px;
 font-weight: bold;
 color: #101246;
`