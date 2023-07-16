import React from 'react';
import { Col } from 'react-bootstrap';

const Cart = () => {
  return (
    <Col className="cart float-end text-end m-auto " style={{ cursor: 'pointer' }}>
      <div className="cartheadwrapper d-inline-block position-relative">
        <div className="cartwrapper d-flex align-items-center">
          <div className="showcat position-relative text-start">
            <span className="textcart d-block fw-medium text-secondary fs-6 px-1">
              <span>Your Cart</span>
            </span>
            <span className="pricewrapper d-inline-block ">
              <span className="number text-start position-static bg-transparent text-secondary fs-6 px-1 pe-2 text-uppercase">
                0 Item (s)
              </span>
              <span className="price d-inline-block ">
                <span className="amount fs-6 " style={{ color: '#21a65b' }}>
                  <span className="curentprice">SGD $0.00</span>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Cart;
