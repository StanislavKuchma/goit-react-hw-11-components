import PropTypes from 'prop-types'
import s from "./Statistics.module.css"

const Statistics = ({
    title = '',
    stats,
}) => {
  return <section className={s.statistics}>
    {{title} && <h2 className={s.title}>{title}</h2>}
        {stats.map(data =>
            <ul className={s.stat} key={data.id} >
            <li className={s.item} style={{backgroundColor: getRandomHexColor()}}>
                <span className="s.label">{data.label}</span>
                <span className="s.percentage">{data.percentage}%</span>
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