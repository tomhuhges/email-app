import React from 'react';
import styles from './styles';

class UserProfile extends React.Component {
  render() {
    return (
      <div className={`user-profile ${styles.userProfile}`}>
        Kamil Bachanek
        <div className={`img-container ${styles.imgContainer}`}>
          <img
            className={`user-profile-img ${styles.img}`}
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Manoj_punjabi.jpeg" alt="User avatar"
          />
          <div className={`active-indicator ${styles.active}`} />
        </div>
      </div>
    );
  }
}

export default UserProfile;
