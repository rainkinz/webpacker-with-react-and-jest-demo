import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <div>Hello {props.name} at {props.date}!</div>
)

Hello.defaultProps = {
  name: 'David',
  date: (new Date()).toString()
}

Hello.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string
}

export default Hello;
