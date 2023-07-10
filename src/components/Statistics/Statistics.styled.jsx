import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  margin: 0px auto;
  padding: 20px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  height: 100%;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const StatList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

export const Percentage = styled.span`
  font-size: 16px;
  color: #555;
`;
