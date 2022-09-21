// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, selectSearch} = props
  const {suggestion} = suggestionItem

  const selectSearchedValue = () => {
    selectSearch(suggestion)
  }

  return (
    <li className="list-item">
      <p>{suggestion}</p>

      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={selectSearchedValue}
      />
    </li>
  )
}

export default SuggestionItem
