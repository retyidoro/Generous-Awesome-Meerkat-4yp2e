import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <div className="component-container1 bg-purple-600 bg-purple-400">
        <h1 className="csdv">{props.heading}</h1>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component-image list-item"
      />
    </div>
  )
}

AppComponent.defaultProps = {
  heading: '76.76.21.21',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  image_alt: 'image',
}

AppComponent.propTypes = {
  heading: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default AppComponent
