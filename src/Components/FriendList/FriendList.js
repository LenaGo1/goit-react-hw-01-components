import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({friends}) => (
    <div>
     <ul className={styles.list}>
        {friends.map(({ avatar, name, isOnline, id }) =>
            <li className={styles.item} key={id}>
                <span className={styles[isOnline]}></span>
                <img className={styles.avatar} src={avatar} alt={name} width="48" />
                <p className={styles.name}>{name}</p>
        </li>
        )}
      
     </ul>
    </div>
)

export default FriendList;