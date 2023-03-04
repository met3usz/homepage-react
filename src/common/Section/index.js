import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1216px;
  padding: 32px;
  margin: 72px auto;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;
