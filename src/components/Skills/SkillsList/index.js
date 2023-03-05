import data1 from '../../../skills/skills1.json';
import data2 from '../../../skills/skills2.json';
import data3 from '../../../skills/skills3.json';
import { ItemWrapper, List, ListWrapper } from './styled';
import { EllipseIcon } from '../../../common/Ellipse';

const SkillsList = () => {
  return (
    <ListWrapper>
      <List>
        {data1.map((item) => {
          return (
            <ItemWrapper key={item.content}>
              <EllipseIcon />
              {item.content}
            </ItemWrapper>
          );
        })}
      </List>
      <List>
        {data2.map((item) => {
          return (
            <ItemWrapper key={item.content}>
              <EllipseIcon />
              {item.content}
            </ItemWrapper>
          );
        })}
      </List>
      <List>
        {data3.map((item) => {
          return (
            <ItemWrapper key={item.content}>
              <EllipseIcon />
              {item.content}
            </ItemWrapper>
          );
        })}
      </List>
    </ListWrapper>
  );
};

export default SkillsList;
