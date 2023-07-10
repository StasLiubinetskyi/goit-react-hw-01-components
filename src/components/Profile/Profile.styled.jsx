import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin: 50px;
  padding: 50px;
  border: 1px solid #ccc;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const Tag = styled.p`
  font-size: 16px;
  color: #555;
`;

export const Location = styled.p`
  font-size: 16px;
  color: #555;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  margin-right: 20px;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const Quantity = styled.span`
  font-size: 16px;
  color: #555;
`;
