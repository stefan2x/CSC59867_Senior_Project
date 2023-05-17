import React, { useRef } from 'react';
import styled from 'styled-components';

const FeaturedProductsContainer = styled.section`
  display: flex;
  background: url("https://plus.unsplash.com/premium_photo-1661767406044-f19b0f1e0a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 80vh; /* Increase the height as desired */

  .fgigs-section-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    h2 {
      font-size: 28px;
      font-weight: 700;
      color: #FCF5E5;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 20px;

      span {
        color: #FCF5E5;
      }
    }

    img {
      /* Add your image source here */
    }
  }

  .carousel {
    display: flex;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    padding-bottom: 20px;
  }

  .card {
    flex: 0 0 calc(50% - 10px);
    margin-right: 10px;
    scroll-snap-align: start;
    background: #272727;
    border-radius: 10px; /* Increase the border-radius for more rounded corners */
    padding-top: 25px;
    text-align: center;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      background: #e67e22;
    }

    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }

      .text {
        font-size: 25px;
        font-weight: 500;
        margin: 10px 0 7px 0;
        color: #FCF5E5;
      }

      p {
        color: #FCF5E5;
      }
    }

    img {
      height: 150px;
      width: 150px;
      object-fit: cover;
      border-radius: 50%; /* Make the border-radius 50% for a more circular shape */
      border: 3px solid #f37f51;
      transition: all 0.3s ease;

      &:hover {
        border-color: #fff;
      }
    }
  }
`;

const FeaturedProducts = () => {
  const carouselRef = useRef(null);
  // for featured products effect
  const carouselInterval = setInterval(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    if (
        carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
        carouselRef.current.scrollWidth
      ) {
        carouselRef.current.scrollLeft = 0;
      }
    }
  }, 5000); // Adjust the interval duration as needed (in milliseconds)


  return (
    <FeaturedProductsContainer>
      <div className="max-width">
        <div className="fgigs-section-heading">
          <h2>Featured <span>Products</span></h2>
          <img src="" alt="" />
        </div>
        <div className="carousel" ref={carouselRef}>
          <div className="card">
            <div className="box">
              <img
                src="https://i.ebayimg.com/images/g/jMQAAOSwQLBj5Fn~/s-l500.jpg"
                alt="Adjika Spicy Sauce"
              />
              <div className="text">Apple AirPods</div>
              <p>True wireless earbuds with seamless connectivity.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img
                src="https://i.ebayimg.com/images/g/~WQAAOSwXYhkLRAG/s-l500.jpg"
                alt="Adjika Spicy Sauce"
              />
              <div className="text">Nintendo Switch</div>
              <p>Unlock the endless possibilities of gaming with the Nintendo Switch.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img
                src="https://i.ebayimg.com/images/g/jMQAAOSwQLBj5Fn~/s-l500.jpg"
                alt="Adjika Spicy Sauce"
              />
              <div className="text">Apple AirPods</div>
              <p>True wireless earbuds with seamless connectivity.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img
                src="https://i.ebayimg.com/images/g/jMQAAOSwQLBj5Fn~/s-l500.jpg"
                alt="Adjika Spicy Sauce"
              />
              <div className="text">Apple AirPods</div>
              <p>True wireless earbuds with seamless connectivity.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img
                src="https://i.ebayimg.com/images/g/jMQAAOSwQLBj5Fn~/s-l500.jpg"
                alt="Adjika Spicy Sauce"
              />
              <div className="text">Apple AirPods</div>
              <p>True wireless earbuds with seamless connectivity.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img
                src="https://i.ebayimg.com/images/g/jMQAAOSwQLBj5Fn~/s-l500.jpg"
                alt="Adjika Spicy Sauce"
              />
              <div className="text">Apple AirPods</div>
              <p>True wireless earbuds with seamless connectivity.</p>
            </div>
          </div>
        </div>
      </div>
    </FeaturedProductsContainer>
  );
};  

export default FeaturedProducts;