import PropTypes from 'prop-types'

const TransactionHistory = ({
  items,

}) => {
  return <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
      {items.map(data=>
        <tr key={data.id} >
          <td>{data.type}</td>
          <td>{data.amount}</td>
          <td>{data.currency}</td>
        </tr>)}

  </tbody>
</table>
}

TransactionHistory.propTypes = {

    items: PropTypes.array,
};
export default TransactionHistory;