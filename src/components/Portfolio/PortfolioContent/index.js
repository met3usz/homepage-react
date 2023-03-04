import {
  Card,
  CardContent,
  CardLinkCode,
  CardLinkDemo,
  CardLinksWrapper,
  CardLinkText,
  CardTitle,
} from './styled';

const PortfolioContent = () => {
  return (
    <Card>
      <CardTitle>Lorem ipsum</CardTitle>
      <CardContent>
        Project description, e.g. website where you can search for favourite
        movies and people. Project description, e.g. website where you can
        search.
      </CardContent>
      <CardLinksWrapper>
        <CardLinkText>
          Demo: <CardLinkDemo href="hehe">https://link.demo.com</CardLinkDemo>
        </CardLinkText>
        <CardLinkText>
          Code: <CardLinkCode href="">https://link.demo.com</CardLinkCode>
        </CardLinkText>
      </CardLinksWrapper>
    </Card>
  );
};

export default PortfolioContent;
