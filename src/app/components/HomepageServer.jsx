// import {
//   fetchHomePage,
//   fetchHomePageHeader
// } from 'botak/api/homepage';

import { ParentCategory } from "./Home/CategoryList";

const HomepageServer = async () => {
  // const homePagedata = await fetchHomePage();
  // const homePageHeaderdata = await fetchHomePageHeader();
  // const homePageFooterdata = await fetchHomePageHeader();

  // const [homePage, homePageHeader, homePageFooter] = await Promise.all([
  //   homePagedata,
  //   homePageHeaderdata,
  //   homePageFooterdata
  // ]);

  // const markupHomePage = { __html: homePage?.content?.rendered || '' };

  // const markupHomePageHeader = {
  //   __html: homePageHeader || ''
  // };

  // const markupHomePageFooter = {
  //   __html: homePageFooter || ''
  // };

  return (
    <div>
      <ParentCategory />

      {/* <div dangerouslySetInnerHTML={markupHomePageHeader}></div> */}
      {/* <div dangerouslySetInnerHTML={markupHomePage}></div> */}
      {/* <div dangerouslySetInnerHTML={markupHomePageFooter}></div> */}
    </div>
  );
};

export default HomepageServer;
