// Get Products
const getProducts = (url) => {
  const fetchedData = fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data) {
        return data;
      }
    });
  return fetchedData;
};

// const getProducts = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };

export default getProducts;
