import React from 'react';
import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/Statistics';
import FriendList from './Components/FriendList/FriendList';
import user from './user.json';
import stats from './statistical-data.json';
import friends from './friends.json';

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
    <Statistics title="Upload stats" stats={stats} />
    <FriendList friends = {friends} />
  </div>
)

export default App;