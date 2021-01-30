import React from 'react'
import Rainbow from './../hoc/Rainbow';

function About() {
  return (
    <div className="container">
      <h4 className="center">About Page</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quod pariatur delectus eius quam repellendus totam quos deserunt eveniet maxime cumque corrupti vel quia quis nemo, asperiores doloremque in libero?
      </p>
    </div>
  )
}

export default Rainbow(About);
