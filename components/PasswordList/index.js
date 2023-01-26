import './index.css'

const PasswordList = props => {
  const {details, deleteFun, checkbox} = props

  const {username, website, id, password} = details

  const initialLetter = website[0].toUpperCase()

  const deleteEl = () => {
    deleteFun(id)
  }
  const passwordOrImgEl = checkbox ? (
    <p>{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="delete-star-image"
    />
  )

  return (
    <li className="list-element">
      <div className="list-card-container">
        <p className="initial">{initialLetter}</p>
        <div className="name-account">
          <p>{website}</p>
          <p>{username}</p>
          {passwordOrImgEl}
        </div>
      </div>
      <button
        type="button"
        className="button-delete"
        onClick={deleteEl}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default PasswordList
