import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard4 from '../components/feature-card4'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Generous Awesome Meerkat</title>
        <meta property="og:title" content="Page - Generous Awesome Meerkat" />
      </Helmet>
      <div className="page-stats">
        <div className="page-stat">
          <svg viewBox="0 0 1152 1024" className="page-icon">
            <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
          </svg>
          <span className="page-text">Customers</span>
          <span className="page-text01">Lorem ipsum dolor sit amet.</span>
          <h1 className="page-text02">
            <span>50</span>
          </h1>
        </div>
        <div className="page-stat1">
          <svg viewBox="0 0 1024 1024" className="page-icon3">
            <path d="M598 512h234l-234-234v234zM640 214l256 256v426q0 34-26 60t-60 26h-470q-34 0-59-26t-25-60v-598q0-34 26-59t60-25h298zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"></path>
          </svg>
          <span className="page-text04">Projects</span>
          <span className="page-text05">Lorem ipsum dolor sit amet.</span>
          <h1 className="page-text06">
            <span>300</span>
          </h1>
        </div>
        <div className="page-stat2">
          <svg viewBox="0 0 1024 1024" className="page-icon5">
            <path d="M810 640v-86h-84v86h84zM810 810v-84h-84v84h84zM554 298v-84h-84v84h84zM554 470v-86h-84v86h84zM554 640v-86h-84v86h84zM554 810v-84h-84v84h84zM298 470v-86h-84v86h84zM298 640v-86h-84v86h84zM298 810v-84h-84v84h84zM640 470h256v426h-768v-598h256v-84l128-128 128 128v256z"></path>
          </svg>
          <span className="page-text08">Cities</span>
          <span className="page-text09">Lorem ipsum dolor sit amet.</span>
          <h1 className="page-text10">
            <span>20</span>
          </h1>
        </div>
      </div>
      <div className="page-features">
        <div className="page-container1">
          <h1 className="page-text12 asd">
            <span>Discover our</span>
            <br></br>
            <span>unique features</span>
          </h1>
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="page-image"
          />
          <div data-thq="thq-dropdown" className="page-thq-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="page-dropdown-toggle"
            >
              <span className="page-text16">Menu Item</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="page-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="page-icon7">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="page-dropdown-list">
              <li data-thq="thq-dropdown" className="page-dropdown list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="page-dropdown-toggle1"
                >
                  <span className="page-text17">Sub-menu Item</span>
                </div>
              </li>
              <li data-thq="thq-dropdown" className="page-dropdown1 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="page-dropdown-toggle2"
                >
                  <span className="page-text18">Sub-menu Item</span>
                </div>
              </li>
              <li data-thq="thq-dropdown" className="page-dropdown2 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="page-dropdown-toggle3"
                >
                  <span className="page-text19">Sub-menu Item</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="page-separator"></div>
        <div className="page-container2">
          <div className="page-container3">
            <FeatureCard4 rootClassName="rootClassName1"></FeatureCard4>
            <FeatureCard4 rootClassName="rootClassName4"></FeatureCard4>
            <FeatureCard4 rootClassName="rootClassName3"></FeatureCard4>
            <FeatureCard4 rootClassName="rootClassName2"></FeatureCard4>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;w=500"
            className="asd csdv input button"
          />
        </div>
      </div>
    </div>
  )
}

export default Page
