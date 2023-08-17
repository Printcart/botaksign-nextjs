import React from 'react';
import SignIn from '../components/SignIn/page';

export const metadata = {
  title: 'My Account | Botak Sign Pte Ltd',
  description: 'Botak Sign Pte Ltd | One Stop Solution For Everything About Printing'
};
const page = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default page;
