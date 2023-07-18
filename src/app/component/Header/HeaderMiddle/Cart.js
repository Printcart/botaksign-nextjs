import { headerData } from 'botak/app/constant';
import FontIcon from '../../FontIcon';

const Cart = () => {
  return (
    <div className="cartheadwrapper d-inline-block position-relative">
      <div className="cartwrapper d-flex align-items-center">
        <div className="iconcart text-success px-1 fs-2">
          <FontIcon
            prefix={headerData?.icon?.prefix}
            iconName={headerData?.icon?.iconName}
          />
        </div>
        <div className="showcat position-relative text-start px-1">
          <span
            className="textcart d-block fw-medium text-secondary px-1"
            style={{ fontSize: '14px' }}
          >
            <span>Your Cart</span>
          </span>
          <span className="pricewrapper d-inline-block ">
            <span
              className="number text-start position-static bg-transparent text-secondary px-1 pe-2 text-uppercase"
              style={{ fontSize: '14px' }}
            >
              0 Item (s)
            </span>
            <span className="price d-inline-block ">
              <span className="amount fs-6 " style={{ color: '#21a65b' }}>
                <span className="curentprice" style={{ fontSize: '14px' }}>
                  SGD $0.00
                </span>
              </span>
            </span>
          </span>
        </div>
      </div>
      <div className="statuscart"></div>
    </div>
  );
};

export default Cart;
