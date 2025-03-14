import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 15px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  z-index: 100;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 1px 1px 15px 4px rgba(0, 0, 0, 0.25);

  h1 {
    font-size: 16px;
    font-weight: bold;
    align-self: center;
    color: ${({ theme }) => theme.colors.text};
  }

  hr {
    border: 1px solid ${({ theme }) => theme.colors.border};
    width: 90%;
    margin: 12px auto;
`;
