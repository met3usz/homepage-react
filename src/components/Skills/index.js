import { Divider } from '../../common/Divider';
import { SecondaryTitle } from '../../common/SecondaryTitle';
import { Section } from '../../common/Section';
import StyledList from '../../common/StyledList';
import { SkillsTitle } from './styled';

const Skills = () => {
  return (
    <Section>
      <SkillsTitle>
        <SecondaryTitle>My skillset includes ⌨️</SecondaryTitle>
      </SkillsTitle>
      <Divider />
      <StyledList />
    </Section>
  );
};

export default Skills;
