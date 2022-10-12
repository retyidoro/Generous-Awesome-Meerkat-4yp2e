import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className={`component1-container ${props.rootClassName} `}>
      <h1>{props.heading}</h1>
      <h1>{props.heading1}</h1>
    </div>
  )
}

Component1.defaultProps = {
  rootClassName: '',
  heading1: 'Heading',
  heading: 'Heading',
}

Component1.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
}

export default Component1
