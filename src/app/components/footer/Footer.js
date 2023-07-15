import FooterBottom from './FooterBottom';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-top">
        <div className="row d-flex justify-content-between">
          <FooterLeft />
          <FooterRight />
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default Footer;
