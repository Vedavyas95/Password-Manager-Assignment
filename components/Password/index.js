import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import PasswordList from '../PasswordList'

class Password extends Component {
  state = {
    listEl: [],
    username: '',
    website: '',
    password: '',

    searchEl: '',
    checked: false,
  }

  formDetails = event => {
    event.preventDefault()
    const {username, password, website} = this.state
    const newObject = {username, password, website, id: v4()}
    this.setState(prevState => ({
      listEl: [...prevState.listEl, newObject],
      username: '',
      password: '',
      website: '',
    }))
  }

  websiteEl = event => {
    this.setState({website: event.target.value})
  }

  usernameEl = event => {
    this.setState({username: event.target.value})
  }

  passwordEl = event => {
    this.setState({password: event.target.value})
  }

  deleteFunction = value => {
    const {listEl} = this.state
    const newList = listEl.filter(eachItem => eachItem.id !== value)

    this.setState({
      listEl: newList,
    })
  }

  searchEl = event => {
    this.setState({searchEl: event.target.value})
  }

  showPasswordCheckboxEl = () => {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }))
  }

  render() {
    const {
      listEl,
      username,
      website,
      password,

      searchEl,
      checked,
    } = this.state

    const newList = listEl.filter(eachItem =>
      eachItem.website.toUpperCase().includes(searchEl.toUpperCase()),
    )

    const deleteOrListEl =
      newList.length === 0 ? (
        <div className="no-password-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-password-image"
          />
          <p className="no-password-text">No Passwords</p>
        </div>
      ) : (
        <ul className="list-container">
          {newList.map(eachItem => (
            <PasswordList
              details={eachItem}
              key={eachItem.id}
              deleteFun={this.deleteFunction}
              checkbox={checked}
            />
          ))}
        </ul>
      )

    const count = newList.length

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="password-manager-image"
        />
        <div className="password-image-container">
          <div className="form-container">
            <h1 className="password-heading">Add New Password</h1>
            <form onSubmit={this.formDetails}>
              <div className="form-element">
                <button type="button" className="button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="image-el"
                  />
                </button>
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-el"
                  onChange={this.websiteEl}
                  value={website}
                />
              </div>
              <div className="form-element">
                <button type="button" className="button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="image-el"
                  />
                </button>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-el"
                  onChange={this.usernameEl}
                  value={username}
                />
              </div>
              <div className="form-element">
                <button type="button" className="button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="image-el"
                  />
                </button>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-el"
                  onChange={this.passwordEl}
                  value={password}
                />
              </div>
              <div className="button-container">
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="password-manager-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-image"
            />
          </div>
        </div>
        <div className="password-list-container">
          <div className="password-count-search-input-container">
            <div className="password-count-container">
              <h1 className="your-password">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="search-image-input-container">
              <button type="button" className="search-button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-image"
                />
              </button>
              <input
                type="search"
                placeholder="Search"
                className="input-search-el"
                onChange={this.searchEl}
                value={searchEl}
              />
            </div>
          </div>
          <hr />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="checkboxEl"
              className="checkbox"
              value={checked}
              onChange={this.showPasswordCheckboxEl}
            />
            <label htmlFor="checkboxEl" className="label-el">
              Show Passwords
            </label>
          </div>
          {deleteOrListEl}
        </div>
      </div>
    )
  }
}

export default Password
