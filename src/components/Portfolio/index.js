import {
  PortfolioContentWrapper,
  PortfolioParagraph,
  PortfolioTitle,
  PortfolioTitleWrapper,
  PortfolioWrapper,
} from './styled';
import { AiFillGithub } from 'react-icons/ai';
import PortfolioCard from './PortfolioContent';

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <PortfolioTitleWrapper>
        <AiFillGithub color={'#0366D6'} size={'40px'} />
        <PortfolioTitle>Portfolio</PortfolioTitle>
        <PortfolioParagraph>My recent projects</PortfolioParagraph>
      </PortfolioTitleWrapper>
      <PortfolioContentWrapper>
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </PortfolioContentWrapper>
    </PortfolioWrapper>
  );
};

export default Portfolio;
