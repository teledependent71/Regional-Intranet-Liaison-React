import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regional Intranet Liaison</title>
        <meta property="og:title" content="Regional Intranet Liaison" />
      </Helmet>
    </div>
  )
}

export default Home
