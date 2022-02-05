export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  //i past mo yung type sa item kasi string yung nasa filters den hahanaping nya sa data object
  if (type === 'colors') {
    unique = unique.flat();
  }
  return ['all', ...new Set(unique)];
};