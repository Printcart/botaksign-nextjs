import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHouse, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

export const footerLinks = [
  {
    year: 'Botak Sign Pte Ltd was established in 1991.',
    descripton:
      'With the motto of "DESTROY TO BUILD", we have been involved in many different printing industries. From vinyl cutting to large format to digital printing, we never stop trying new things and always invest in new technologies to provide our customers with fun and high-quality products at reasonable prices.😊'
  },
  {
    title: 'Explore',
    links: [
      { title: 'Print Products', url: '/' },
      { title: 'Display Products', url: '/' },
      { title: 'About Us', url: '/' },
      { title: 'Careers', url: '/' }
    ]
  },
  {
    title: 'Need help?',
    links: [
      { title: 'FAQ', url: '/' },
      { title: 'Corporate Partners', url: '/' },
      { title: 'Terms & Conditions', url: '/' },
      { title: 'Privacy Policy', url: '/' }
    ]
  },
  {
    title: 'Get in touch',
    links: [
      {
        title: '+(65) 9190 7688 / +(65) 6286 2298',
        url: '/',
        icon: <FontAwesomeIcon icon={faPhoneFlip} />
      },
      {
        title: '+(65) 9731 6551 ',
        url: '/',
        icon: <FontAwesomeIcon icon={faPhoneFlip} />
      },
      {
        title: 'Singapore 545535 Highland Centre 01-3422 Yio Chu Kang Road',
        url: '/',
        icon: <FontAwesomeIcon icon={faHouse} />
      }
    ]
  }
];
