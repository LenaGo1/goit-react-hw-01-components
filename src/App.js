import React from 'react';

import user from './user.json';
import Profile from './Components/Profile/Profile';


// const App = () => (
//   <div>
//     <Profile user={user} />
//   </div>
// )

const App = () => (
  <div>
    <Profile name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>
  </div>
)

export default App;