export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

// another way to do the sorting

//   sortedData.sort((a, b) => {
//     if (a.cases > b.cases) {
//       return -1;
//     } else {
//       return 1;
//     }
//   });
//   return sortedData;
// }