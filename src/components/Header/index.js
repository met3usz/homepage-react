import { HeaderImage, HeaderWrapper } from './styled';
import photo from '../../images/mateusz_wasik.jpg';
import HeaderContent from './HeaderContent';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderImage src={photo} />
      <HeaderContent />
    </HeaderWrapper>
  );
};

export default Header;
