import PropTypes from 'prop-types'

const FriendList = ({
  friends,
}) => {
  return <>
    {friends.map(data =>
      <ul className="stat_list-friends" key={data.id} >
        <FriendListItem avatar={data.avatar} name={data.name} isOnline={data.isOnline}/>
      </ul>)}     
    </>
}

const FriendListItem = ({
  avatar,
  name,
  isOnline,
}) => {
  return <>
    <li className="item_friends">
      {isOnline ? <span className="status_friends"/>: <span className="status_friends-online"/> }
      <img className="avatar_friends" src={avatar} alt="" width="48" />
      <p className="name_friends">{name}</p>
    </li>
    </>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};
FriendList.propTypes = {
    friends: PropTypes.array,
};

export default FriendList;
























