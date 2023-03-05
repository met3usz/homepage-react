import { SocialLink, SocialWrapper } from './styled';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <SocialWrapper>
      <SocialLink
        href="https://github.com/met3usz"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub size={'48px'} />
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/met3usz/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin size={'48px'} />
      </SocialLink>
      <SocialLink
        href="https://www.instagram.com/met3usz/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram size={'48px'} />
      </SocialLink>
    </SocialWrapper>
  );
};

export default SocialMedia;
