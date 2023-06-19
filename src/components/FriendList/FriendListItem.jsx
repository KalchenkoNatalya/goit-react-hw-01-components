import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
    <li className={styles.item}>
      <span className={`${styles.status} ${isOnline ? styles.isOnline : styles.isOffline}`}></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
    </>
  );
};


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}