import React from 'react';
import defaultImage from './default.jpeg'

import PropTypes from 'prop-types';

import './Profile.css'



//шаблон для рендера Профайла, идет в App.js
const Profile = ({tag, name, location, avatar, stats}) => (
    <div className="profile">
    <div className="description">
      <span className = "circle-image ">
            <img
                src={avatar}
                alt={name}
                className="avatar"
        />
        </span>
            <p className="name">{name}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>
        <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
    </div>
)

//прописываем дефолтные значения
Profile.defaultProps = {
    avatar: defaultImage
}


//прописываем для всех приходящих параметров PropTypes - типы пропов
Profile.propTypes = {
    tag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.object.isRequired,
    // stats: PropTypes.shape({
    //     followers: PropTypes.number.isRequired,
    //     views: PropTypes.number.isRequired,
    //     likes:PropTypes.number.isRequired
    // }),
}

export default Profile;


// const Profile = ({ user }) => (
//     <div class="profile">
//         <div class="description">
//             <img
//                 src={user.avatar}
//                 alt={user.name}
//                 class="avatar"
//             />
//             <p class="name">{user.name}</p>
//             <p class="tag">{user.tag}</p>
//             <p class="location">{user.location}</p>
//         </div>
//         <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">{user.stats.followers}</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">{user.stats.views}</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">{user.stats.likes}</span>
//     </li>
//   </ul>
//     </div>
// )
