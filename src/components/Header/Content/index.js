import MailIcon from './MailIcon';
import { SecondaryText, Name, About, Button } from './styled';

const Content = () => {
  return (
    <div>
      <SecondaryText>THIS IS</SecondaryText>
      <Name>Mateusz Wąsik</Name>
      <About>
        👨🏼‍💻 🚀 Fugiat eiusmod velit in non esse. Et fugiat tempor culpa dolor
        ipsum.
      </About>
      <Button>
        <MailIcon />
        Hire Me
      </Button>
    </div>
  );
};

export default Content;
