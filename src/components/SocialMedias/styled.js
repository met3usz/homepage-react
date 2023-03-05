import styled from 'styled-components';

export const SocialWrapper = styled.section`
  max-width: 1216px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.color.black};
`;
