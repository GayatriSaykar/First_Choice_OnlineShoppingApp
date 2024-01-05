import { Link } from 'react-router-dom';
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mt-4">
      <h2>About Us</h2>
      <Link to="/home" className="nav-link" style={{color:"white",marginLeft:"95%",backgroundColor:"blue",padding:"5px 10px"}}>BACK</Link>
      <hr/>
      <p>
        Welcome to First Choice App, your premier destination for a seamless and enjoyable e-commerce experience.
      </p>
      <p>
        At First Choice App, we are committed to providing you with the best online shopping experience. Our platform
        offers a wide range of products from various categories, ensuring that you can find everything you need in one place.
      </p>
      <p>
        Whether you're looking for the latest fashion trends, electronics, home essentials, or more, First Choice App
        strives to be your first choice for all your shopping needs.
      </p>
      <p>
        Our user-friendly interface, secure payment options, and reliable delivery services make shopping with us
        convenient and enjoyable. We value your trust and are dedicated to creating a platform that exceeds your
        expectations.
      </p>
      <p>
        Thank you for choosing First Choice App. We look forward to serving you and making your online shopping
        experience exceptional.
      </p>
    </div>
  );
};

export default AboutUs;
