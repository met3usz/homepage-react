import styled from 'styled-components';

export const Card = styled.article`
  max-width: 592px;
  max-height: 322px;
  padding: 56px;
  background: ${({ theme }) => theme.color.white};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;

export const CardTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.color.scienceBlue};
  margin: 0 0 24px 0;
`;

export const CardContent = styled.p`
  line-height: 1.4;
  letter-spacing: 0.05em;
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const CardLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CardLinkText = styled(CardContent)`
  margin-bottom: 8px;
`;

export const CardLinkDemo = styled.a`
  margin: 0 0 0 8px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.scienceBlue};
`;

export const CardLinkCode = styled.a`
  margin: 0 0 0 13px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.scienceBlue};
`;
