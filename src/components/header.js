import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      width: `100%`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`
      }}
    >
      <h1 style={{ 
        margin: 0
        }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Menu />
    </div>
    <div style={{
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
      alignItems: `center`,
      padding: `250px`
    }}>
      <h5 style={{
        color: `white`
      }}>
        Placeholder
      </h5>
      <h3 style={{
        color: `white`
      }}>
        LET'S BUILD SOMETHING AMAZING TOGETHER
      </h3>
      <button style={{
        border: `2px solid white`,
        backgroundColor: `inherit`,
        color: `white`,
        cursor: `pointer`,
        padding: `15px`
      }}> CONTACT ME </button>
    </div>
  </header>
)

const Menu = () => (
  <ul style={{
    listStyle: `none`,
    display: `flex`,
    padding: `0`,
    margin: `0`,
    justifyItems: `space-around`
  }}>
    <li style={{
      padding: `0 8px`,
      margin: `0 10px`,
      fontSize: `12px`
    }}>
      <Link to="/" style={{
        textDecoration: `none`,
        color: `white`
      }}>HOME</Link>
    </li>
    <li style={{
      padding: `0 8px`,
      margin: `0 10px`,
      fontSize: `12px`
    }}>
      <a href="https://github.com/GingSing" style={{
        textDecoration: `none`,
        color: `white`
      }}>
        GITHUB
      </a>
    </li >
    <li style={{
      padding: `0 8px`,
      margin: `0 10px`,
      fontSize: `12px`
    }}>
      <a href="#portfolio" style={{
        textDecoration: `none`,
        color: `white`
      }}>
        PORTFOLIO
      </a>
    </li>
    <li style={{
      padding: `0 8px`,
      margin: `0 10px`,
      fontSize: `12px`
    }}>
      <a href="#resume" style={{
        textDecoration: `none`,
        color: `white`
      }}>
        RESUME
      </a>
    </li>
    <li style={{
      padding: `0 8px`,
      margin: `0 10px`,
      fontSize: `12px`
    }}>
      <a href="#contact" style={{
        textDecoration: `none`,
        color: `white`
      }}>
        CONTACT
      </a>
    </li>
  </ul>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
