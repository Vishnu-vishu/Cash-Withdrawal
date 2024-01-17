// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, withdrawAmount} = props
  const {value} = denominationItem

  const onWithdrawbalance = () => {
    withdrawAmount(value)
  }

  return (
    <li>
      <button
        type="button"
        className="denominationitem-btn"
        onClick={onWithdrawbalance}
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
