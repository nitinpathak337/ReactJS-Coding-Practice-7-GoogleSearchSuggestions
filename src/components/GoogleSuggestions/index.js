// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {inputValue: ''}

  changeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onSelect = suggestion => {
    this.setState({inputValue: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {inputValue} = this.state

    const searchedSuggestionsList = suggestionsList.filter(eachItem =>
      eachItem.suggestion
        .toLowerCase()
        .includes(inputValue.toLocaleLowerCase()),
    )
    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-image"
        />
        <div className="card">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              className="input-search"
              type="search"
              placeholder="Google Search"
              onChange={this.changeInput}
              value={inputValue}
            />
          </div>
          <ul className="list-container">
            {searchedSuggestionsList.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                suggestionItem={eachItem}
                selectSearch={this.onSelect}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
