import PropTypes from 'prop-types'


// const statsData= [
//   { "id": "id-1", "label": ".docx", "percentage": 22 },
//   { "id": "id-2", "label": ".pdf", "percentage": 4 },
//   { "id": "id-3", "label": ".mp3", "percentage": 17 },
//   { "id": "id-4", "label": ".psd", "percentage": 47 },
//   { "id": "id-5", "label": ".pdf", "percentage": 10 }
// ]



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
// function Statistics() {
//     return (
//     <>

//             {statsData.map(data => <ul className="stat-list">
//             <li className="item">
//                 <span className="label">{data.label}</span>
//                 <span className="percentage">{data.percentage}</span>
//             </li>

//         </ul>)}
//     </> )
// }
// import data from '/path/to/data.json';

// <Statistics title="Upload stats" stats={data} />
// <Statistics stats={data} />


export default Statistics;