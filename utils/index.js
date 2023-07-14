export const FetchData = async () => {
  const response = await fetch('http://localhost/wordpress/wp-json/pc/v2/');
  const result = await response.json();
  return result;
};
export const FetchDataHeader = async () => {
  const responseheader = await fetch(
    'http://localhost/wordpress/wp-json/pc/v2/templates/header'
  );
  console.log('cccc', responseheader);
//   const resultHeader = await responseheader.json();
//   return resultHeader;
};
// export const FetchDataFooter = async () => {
//   const responsefooter = await fetch(
//     'http://localhost/wordpress/wp-json/pc/v2/templates/footer'
//   );
//   const resultFooter = await responsefooter.json();
//   return resultFooter;
// };
