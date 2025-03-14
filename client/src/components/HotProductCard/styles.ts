import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: 170px;
  height: 170px;
  overflow: hidden;
  border-radius: 10px;
  transition: border 0.3s ease-in-out;
  box-shadow: 1px 1px 15px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.05);
    }

    div {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const HoverIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
  padding: 8px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(-10px);
  transition:
    opacity 0.5s ease-in-out,
    transform 0.3s ease-in-out;
`;
