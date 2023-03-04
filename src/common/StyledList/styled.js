import styled from 'styled-components';

export const ListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(115px), 1fr));
  gap: 115px;
`;

export const List = styled.ul`
  list-style-type: none;
  margin-top: 32px;
  padding-left: 0;
`;
