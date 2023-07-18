import { headerData } from 'botak/app/constant';
import FontIcon from '../../FontIcon';

const Cart = () => {
  return (
    <div className="cartheadwrapper d-inline-block position-relative">
      <div className="cartwrapper d-flex align-items-center">
        <div className="iconcart text-success px-1 fs-1">
          <FontIcon
            prefix={headerData?.icon?.prefix}
            iconName={headerData?.icon?.iconName}
          />
        </div>
        <div className="showcat position-relative text-start px-1">
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
      <div className="statuscart"></div>
    </div>
  );
};

export default Cart;
