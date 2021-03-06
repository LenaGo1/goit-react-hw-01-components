import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({friends}) => (
    <div>
     <ul className={styles.list}>
        {friends.map(({ avatar, name, isOnline, id }) =>
            <li  key={id}>
                <FriendListItem
                    avatar = {avatar}
                    name = {name}
                    isOnline = {isOnline}
                />
        </li>
        )}
     </ul>
    </div>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ).isRequired
};

export default FriendList;