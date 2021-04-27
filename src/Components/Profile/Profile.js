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
    <li className = "stats-item">
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li className = "stats-item">
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li className = "stats-item">
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
}

export default Profile;


