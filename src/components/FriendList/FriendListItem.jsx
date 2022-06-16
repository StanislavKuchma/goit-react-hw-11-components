import s from "./FriendListItem.module.css"
import PropTypes from 'prop-types'

const FriendListItem = ({
  avatar,
  name,
  isOnline,
}) => {
  return <>
    <li className={s.item_friends}>
      {isOnline ? <span className={s.status_friends} /> : <span className={s.status_online} /> }
      <img className={s.avatar_friends} src={avatar} alt="" width="48" />
      <p className={s.name_friends}>{name}</p>
    </li>
    </>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};
export default FriendListItem;