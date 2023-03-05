import styled from 'styled-components';

export const ListWrapper = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(115px), 1fr));
  gap: 115px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
`;

export const ItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 18px;
`;
