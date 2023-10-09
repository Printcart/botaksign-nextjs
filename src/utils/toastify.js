import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = (props) => {
  const { text } = props;
  useEffect(() => {
    toast.error(text, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  }, []);

  return <ToastContainer />
}

export default Toastify;