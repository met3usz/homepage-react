import MailIcon from './MailIcon';
import {
  ContentSecondaryText,
  ContentName,
  ContentAbout,
  ContentButton,
} from './styled';

const Content = () => {
  return (
    <div>
      <ContentSecondaryText>THIS IS</ContentSecondaryText>
      <ContentName>Mateusz WÄsik</ContentName>
      <ContentAbout>
        ð¨ð¼âð» ð Fugiat eiusmod velit in non esse. Et fugiat tempor culpa dolor
        ipsum.
      </ContentAbout>
      <ContentButton>
        <MailIcon />
        Hire Me
      </ContentButton>
    </div>
  );
};

export default Content;
