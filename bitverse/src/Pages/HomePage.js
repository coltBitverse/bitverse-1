import React from 'react';
import {Row, Container} from 'react-bootstrap';

const HomePage = () => {
    return (

        <Container className="mt-3">

            <h2>Top News </h2>
        <Row>
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
             src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
             alt=""
                />

            <img
             src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
             className="w-100 shadow-1-strong rounded mb-4"
            alt=""
            />

            
                
           
            </div>

           
           
            <div className="col-lg-4 mb-4 mb-lg-0">
   

    <img
      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
 <img
      src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

   
  </div>
  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
       src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

   
  </div>
  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

   
  </div>

        </Row>

        </Container>
    )
}

export default HomePage
