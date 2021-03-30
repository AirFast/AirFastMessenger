import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Profile.module.css';

const ProfileCard = (props) => {
    const {user} = props;

    return (
        <div className='col-4 col-md-6 col-sm-12 p-60 t-center'>
            <Link to={'/profile/' + user.id} className={styles.profileLink}>
                    <span className={styles.profileAvatar}>
                        {user.photoURL ? <img src={user.photoURL} alt={user.firstName + ' ' + user.lastName}/> : user.initials}
                    </span>
                <h4 className={styles.profileName}>{user.firstName + ' ' + user.lastName}</h4>
            </Link>
        </div>
    );

}

export default ProfileCard;