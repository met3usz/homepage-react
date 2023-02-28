import { HeaderImage, HeaderWrapper } from './styled';
import photo from '../../images/mateusz_wasik.jpg';
import Content from './Content';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderImage src={photo} />
      <Content />
    </HeaderWrapper>
  );
};

export default Header;
