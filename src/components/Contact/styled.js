import styled from 'styled-components';

export const ContactWrapper = styled.section`
  max-width: 1216px;
  margin: 0 auto 56px auto;
`;

export const ContactTitle = styled.p`
  margin: 0 0 24px 0;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const ContactEmail = styled.a`
  margin: 0;
  font-size: 32px;
  font-weight: 900;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
`;

export const ContactDescription = styled.p`
  margin: 24px 0 0 0;
  max-width: 670px;
  font-size: 18px;
  line-height: 1.4;
`;
