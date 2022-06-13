import PropTypes from 'prop-types'




const Statistics = ({
    title,
    stats,
}) => {
    return <section className="statistics">
        <h2 className="title">{title}</h2>
        {stats.map(data =>
            <ul className="stat-list" key={data.id} >
              <li className="item" style={{backgroundColor: getRandomHexColor()}}>
                <span className="label">{data.label}</span>
                <span className="percentage">{data.percentage}%</span>
              </li>
            </ul>)}
        </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  };


export default Statistics;