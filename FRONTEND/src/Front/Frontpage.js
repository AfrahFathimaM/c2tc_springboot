import React from 'react'
import { Link } from 'react-router-dom'

import './AboutLuluMall.css'
export default function Frontpage() {
  return (
    <div className="app-container">
  
  <div className="about-lulu-mall-container">

        <h1>WELCOME TO LULU MALL</h1>
      
       <h2>Our Vision</h2>
      <p>At Lulu Mall, our vision is to provide a world-class shopping environment that caters to the diverse needs and preferences of our customers. We strive to be a hub of innovation, offering the latest trends, top-notch brands, and a vibrant atmosphere for visitors of all ages.</p>

      <h2>Shopping Extravaganza</h2>
      <p>Discover a myriad of shopping delights as you explore our expansive retail spaces. From high-end fashion boutiques and electronics stores to specialty shops and everything in between, Lulu Mall brings together a curated selection of brands to fulfill your every shopping desire.</p>

      <h2>Entertainment Galore</h2>
      <p>At Lulu Mall, entertainment knows no bounds. Catch the latest blockbuster at our state-of-the-art cinema, treat your taste buds at our diverse range of restaurants and cafes, and let your little ones have a blast at our dedicated play zones. There's something for everyone, making every visit a memorable experience.</p>

      <h2>Community Hub</h2>
      <p>Lulu Mall is not just a place to shop; it's a community hub where people come together to celebrate, connect, and create lasting memories. We host events, festivals, and activities that foster a sense of community, making Lulu Mall more than just a retail space – it's a gathering place for friends and families.</p>

      <h2>Experience Lulu Mall</h2>
      <p>Come and experience the magic of Lulu Mall. Whether you're a dedicated shopper, a food enthusiast, or someone looking for a leisurely day out, Lulu Mall promises an unparalleled experience that goes beyond the ordinary. Join us in creating moments, making memories, and indulging in the best that life has to offer.</p>
  
      <Link className="btn-btn-outline-light" to="/Home">admin section</Link>
      </div>
    </div>
  )
}
