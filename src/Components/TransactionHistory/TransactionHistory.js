import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => (    
<table className={styles.history}>
  <thead className = {styles.thead}>
    <tr className = {styles.trow}>
      <th className = {styles.tcell}>Type</th>
      <th className = {styles.tcell}>Amount</th>
      <th className = {styles.tcell}>Currency</th>
    </tr>
  </thead>        
  <tbody className = {styles.tbody}>
    {items.map(({ id, type, amount, currency }) =>
     <tr key = {id} className = {styles.trow}>
      <td className = {styles.tcell}>{type}</td>
      <td className = {styles.tcell}>{amount}</td>
      <td className = {styles.tcell}>{currency}</td>
    </tr>
    )}
  </tbody>
</table>
)

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.string).isRequired)
}

export default TransactionHistory;