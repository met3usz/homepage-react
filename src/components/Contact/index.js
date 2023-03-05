import {
  ContactDescription,
  ContactEmail,
  ContactTitle,
  ContactWrapper,
} from './styled';

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactTitle>Let’s talk!</ContactTitle>
      <ContactEmail href={`mailto:${'m.wasik1303@gmail.com'}`}>
        m.wasik1303@gmail.com
      </ContactEmail>
      <ContactDescription>
        If you're looking for professional web development using React, it's
        worth contacting me. With my skills and experience in web development,
        I'm able to provide you with not only a functional and aesthetically
        pleasing website, but also one that is fitted to your specific needs and
        requirements. I'm open to collaboration and always strive to understand
        the needs of my clients in order to create a website that delivers
        positive business results. Contact me to learn more about how I can help
        you! 🫰🏻
      </ContactDescription>
    </ContactWrapper>
  );
};

export default Contact;
