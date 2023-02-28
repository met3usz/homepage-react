import ListItemWrapper from './ListItemWrapper';
import { List, ListWrapper } from './styled';

const StyledList = () => {
  return (
    <ListWrapper>
      <List>
        <ListItemWrapper />
        <ListItemWrapper />
        <ListItemWrapper />
        <ListItemWrapper />
        <ListItemWrapper />
      </List>
      <List>
        <ListItemWrapper />
        <ListItemWrapper />
        <ListItemWrapper />
        <ListItemWrapper />
        <ListItemWrapper />
      </List>
      <List>
        <ListItemWrapper />
        <ListItemWrapper />
        <ListItemWrapper />
        <ListItemWrapper />
        <ListItemWrapper />
      </List>
    </ListWrapper>
  );
};

export default StyledList;
