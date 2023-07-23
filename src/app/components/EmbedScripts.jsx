import { fetcAssets } from 'botak/api/homepage';
import Script from 'next/script';
import React from 'react';

const EmbedScripts = async () => {
  const assets = await fetcAssets();

  return (
    <>
      {assets?.length > 0 &&
        assets.map((item, index) => (
          <React.Fragment key={`assets-${index}`}>
            {item?.type === 'css' && item?.src && (
              <link
                rel="stylesheet"
                id={item?.handle ? `$${item?.handle}-css` : ''}
                href={item?.src}
                type="text/css"
                media="all"
              />
            )}
            {item?.type === 'script' && item?.src && (
              <Script type="text/javascript" src={item?.src}></Script>
            )}
          </React.Fragment>
        ))}
    </>
  );
};

export default EmbedScripts;
