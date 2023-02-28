import styled from 'styled-components';

export const ContentSecondaryText = styled.p`
  color: ${({ theme }) => theme.color.slateGray};
  font-weight: 700;
  font-size: 12px;
  margin: 64px 0 12px 0;
`;

export const ContentName = styled.h1`
  font-size: 38px;
  margin: 0 0 35px 0;
  color: ${({ theme }) => theme.color.black};
`;

export const ContentAbout = styled.p`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 20px;
  line-height: 1.4;
`;

export const ContentButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  margin-top: 32px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.05em;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
`;
