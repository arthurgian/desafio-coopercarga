import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.background};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const SpinnerContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 5px solid ${({ theme }) => theme.colors.primary};
  border-top: 5px solid transparent;
  border-radius: 50%;
  position: absolute;
  animation: ${spin} 1s linear infinite;
`;

export const PulsingIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background};
  animation: ${pulse} 1.5s infinite ease-in-out;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
