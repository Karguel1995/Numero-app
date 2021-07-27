import PropTypes from 'prop-types'
import React from 'react'
import Game from './Game'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="rules"
          className={`${this.props.article === 'rules' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Rules</h2>
          <p>
            The goal of the game is to guess 3 numbers in the correct order.
          </p>
          <p>
            Each time you try to guess a code, the game will give you a hint on how many digits you have guessed correctly and if there are numbers among them that are in the correct position.
          </p>
          <p>
            Contact us for your suggestions and opinions on mail Karguel1995@gmail.com!
          </p>
          <p>
            Good Luck & Have Fun!
          </p>
          {close}
        </article>

        <article
          id="start"
          className={`${this.props.article === 'start' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <Game />
          {close}
        </article>

        <article
          id="credits"
          className={`${this.props.article === 'credits' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Credits</h2>
          <p>Written and performed by</p>
            <p>Filip Pawelec</p>
            <p>Karguel1995@gmail.com</p>
            <p>https://github.com/Karguel1995</p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
