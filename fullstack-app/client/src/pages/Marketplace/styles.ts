import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const FilterContainer = styled.div`
  padding: 20px 20px 20px 35px;
`;

export const ListContainer = styled.div`
  height: 590px;
  width: 1150px;
  display: flex;
  flex-direction: column;
`;

export const ProductCardContainer = styled.div`
  padding: 30px 20px 20px 20px;
  margin-top: 20px;
  display: flex;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  overflow: auto;
`;

export const NoProductsFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 18px;
  font-weight: bold;
  text-align: center;

  svg {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ResultsHeader = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 20px 0;
  height: 10px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: regular;
  color: ${({ theme }) => theme.colors.text};

  span {
    position: relative;
    background: ${({ theme }) => theme.colors.background};
    padding: 0 15px;
    z-index: 1;
  }
`;

export const ResultsLine = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 3px;
  background: ${({ theme }) => theme.colors.primary};
  z-index: 0;
`;
