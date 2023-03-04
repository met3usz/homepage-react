import styled from 'styled-components';
import { SecondaryTitle } from '../../common/SecondaryTitle';

export const PortfolioWrapper = styled.section`
  max-width: 1216px;
  margin: 0 auto;
`;

export const PortfolioTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const PortfolioTitle = styled(SecondaryTitle)`
  margin: 13px 0 8px 0;
`;

export const PortfolioParagraph = styled.p`
  margin: 0;
  font-size: 20px;
`;

export const PortfolioContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 32px;
  max-width: 1216px;
  margin: 0 auto;
`;
