import React from 'react';
import Gravatar from 'react-gravatar';

import styles from './UsersList.css';

const UsersList = props => (
    <div className={styles.Users}>
        <div className={styles.UsersOnline}>
            {props.users.length} users online
        </div>
        <ul className={styles.UsersList}>
            {
                props.users.map((user) => {
                    return (
                        <li key={user.id} className={styles.UserItem}>
                            <img src="http://lorempixel.com/70/70/people" className={styles.Gravatar}/>
                            <span className={styles.UserName}>{user.name}</span>
                        </li>
                    );
                })
            }
        </ul>
    </div>
);

export default UsersList;