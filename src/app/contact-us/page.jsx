import { fetchContactUs } from 'botak/api/contactUs';
import ContactUs from './ContactUs';

const ContactUsServer = async () => {
  const data = await fetchContactUs();
  return <ContactUs data={data} />;
};

export default ContactUsServer;
