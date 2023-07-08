import user from 'path/to/user.json';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        fontSize: 40,
        color: '#010101',
        padding: '20px 0',
      }}
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        location={user.location}
        stats={user.stats}
        tag={user.tag}
      />
    </div>
  );
};
