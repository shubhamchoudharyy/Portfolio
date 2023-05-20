import React from 'react';
import './port.css';

const Port = () => {
  return (
    <>
      <div className="hero">
        <nav>
          <h2 className="logo">Portfo<span>lio</span></h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <a href="#" className="btn">Subscribe</a>
        </nav>
        <div className="content">
          <h4>Hello, my name is </h4>
          <h1>Shubham <span>Choudhary</span></h1>
          <h3>I am a web developer</h3>
          <div className="newsletter">
            <form>
              <input type="email" name="email" id="email" placeholder="Enter Your Email" />
              <input type="submit" name="submit" value="Let's Start" />
            </form>
          </div>
        </div>
      </div>

      <section className="about">
        <div className="main">
          <img src="./shivji.jpg" alt="Profile" />
          <div className="about-text">
            <h2>About Me</h2>
            <h5>developer <span>& engineer</span></h5>
            <p>I am a student of B.E. CSE department from <span>NIT Trichy</span>. <br/>I have <span>3</span> years of experience in <span>web development</span> </p>
            <button type="button">Let's talk</button>
          </div>
        </div>
      </section>

      <div className="service">
        <div className="title">
          <h2>Our Services</h2>
        </div>

        <div className="box">
          <div className="card">
            <i className="fa-solid fa-bars"></i>
            <h5>Web development</h5>
            <div className="pra">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, sequi, excepturi nisi qui sit, obcaecati ut eaque recusandae ducimus id fugiat alias? Reiciendis nisi voluptatem, impedit aliquid praesentium at. Dolore repellat rerum debitis quod, illum voluptatum, sint quas corrupti architecto sit placeat hic quis odio, ratione aspernatur. Nostrum, eaque ad!</p>
              <p style={{ textAlign: 'center' }}>
                <a className="button" href="#">Read More</a>
              </p>
            </div>
          </div>

          <div className="card">
            <i className="fa-light fa-user"></i>
            <h5>Web development</h5>
            <div className="pra">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, sequi, excepturi nisi qui sit, obcaecati ut eaque recusandae ducimus id fugiat alias? Reiciendis nisi voluptatem, impedit aliquid praesentium at. Dolore repellat rerum debitis quod, illum voluptatum, sint quas corrupti architecto sit placeat hic quis odio, ratione aspernatur. Nostrum, eaque ad!</p>
              <p style={{ textAlign: 'center' }}>
                <a className="button" href="#">Read More</a>
              </p>
            </div>
          </div>

          <div className="card">
            <i className="fa-regular fa-bell"></i>
            <h5>Web development</h5>
            <div className="pra">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, sequi, excepturi nisi qui sit, obcaecati ut eaque recusandae ducimus id fugiat alias? Reiciendis nisi voluptatem, impedit aliquid praesentium at. Dolore repellat rerum debitis quod, illum voluptatum, sint quas corrupti architecto sit placeat hic quis odio, ratione aspernatur. Nostrum, eaque ad!</p>
              <p style={{ textAlign: 'center' }}>
                <a className="button" href="#">Read More</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-me">
        <p>Let Me Get You A Beautiful Website</p>
        <a className="button-two" href="#">Hire Me</a>
      </div>

      <footer>
        <p>Shubham Choudhary</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi suscipit explicabo aliquid natus dolorem laborum obcaecati odio repellendus deserunt.</p>
        <div className="social">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <p className="end">Copyright by Shubham Choudhary</p>
      </footer>
    </>
  )
}

export default Port;
