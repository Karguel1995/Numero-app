import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-user-secret"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Numero</h1>
        <p>
          Join the game and prove that your mind is ahead of the minds of the greatest
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('rules')
            }}
          >
            Rules
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('start')
            }}
          >
            Start game
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('credits')
            }}
          >
            Credits
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
