import React from 'react';

const IconFooter = ({ link }) => {
  return (
    <>
      {link.icon && link.icon.lib === 'fa' && (
        <i className={link.icon.attr} />
        // <i className="fa-regular fa-house"></i>;
      )}
    </>
  );
};

export default IconFooter;
