import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  margin: 0px auto;
  padding: 10px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const StatList = styled.ul`
  display: inline-flex;
  list-style: none;
  margin: 20;
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Label = styled.span`
  margin-left: 6px;
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

export const Percentage = styled.span`
  font-size: 16px;
  color: #555;
`;
