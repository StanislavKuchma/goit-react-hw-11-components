import PropTypes from 'prop-types'
import s from "./Profile.module.css"


const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats,
}) =>{
  return <div className={s.profile}>
    <div className={s.description}>
      <img
        src={avatar}
        alt={tag}
        className={s.avatar}
      />
      <p className={s.name}>{username}</p>
      <p className="s.tag">{tag}</p>
      <p className="s.location">{location}</p>
    </div>

    <ul className={s.stats}>
      <li className="s.stats_item">
        <span className="s.label">Followers</span><br></br>
        <span className={s.quantity}>{[stats.followers]}</span>
      </li>
      <li className="s.stats_item">
        <span className="s.label">Views</span><br></br>
        <span className={s.quantity}>{[stats.views]}</span>
      </li>
      <li className="s.stats_item">
        <span className="s.label">Likes</span><br></br>
        <span className={s.quantity}>{[stats.likes]}</span>
      </li>
    </ul>
  </div >
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
};
export default Profile;