import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendListContainer,
  FriendListItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(friend => (
        <FriendListItem key={friend.id}>
          <Status className={friend.isOnline ? 'online' : 'offline'}></Status>
          <Avatar src={friend.avatar} alt="User avatar" />
          <Name>{friend.name}</Name>
        </FriendListItem>
      ))}
    </FriendListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;
