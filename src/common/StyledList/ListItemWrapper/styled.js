import styled from 'styled-components';

export const ItemWrapper = styled.span`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 8px;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 18px;
`;
