import { Divider } from '../../common/Divider';
import { SecondaryTitle } from '../../common/SecondaryTitle';
import { Section } from '../../common/Section';
import SkillsList from './SkillsList';

const Skills = () => {
  return (
    <Section>
      <SecondaryTitle>My skillset includes ⌨️</SecondaryTitle>
      <Divider />
      <SkillsList />
    </Section>
  );
};

export default Skills;
