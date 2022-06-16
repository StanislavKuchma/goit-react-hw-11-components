import FriendListItem from './FriendListItem'
import PropTypes from 'prop-types'


const FriendList = ({
  friends,
}) => {
  return <>
    {friends.map(data =>
      <ul className="stat_list" key={data.id} >
        <FriendListItem avatar={data.avatar} name={data.name} isOnline={data.isOnline}/>
      </ul>)}     
    </>
}

FriendList.propTypes = {
    friends: PropTypes.array,
};

export default FriendList;
























