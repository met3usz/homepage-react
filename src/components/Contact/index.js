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
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to conatct me 🫰🏻
      </ContactDescription>
    </ContactWrapper>
  );
};

export default Contact;
