import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const getRandomColor = () =>
{
  let rgb = "";
    let r = function () { return Math.floor(Math.random()*256) };
  rgb = "rgb(" + r() + "," + r() + "," + r() + ")";
  return rgb
}

const Statistics = ({title, stats}) => (
  <div>
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item"
          style = {{backgroundColor: getRandomColor()}}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}          
      </ul>
    </section>
  </div>
);

Statistics.defaultProps = {
  title: ""
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
}
  
export default Statistics;