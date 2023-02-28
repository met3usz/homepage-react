import { ReactComponent as MessageIcon } from './Message.svg';
import { MailIconWrapper } from './styled';

const MailIcon = () => {
  return (
    <MailIconWrapper>
      <MessageIcon />
    </MailIconWrapper>
  );
};

export default MailIcon;
