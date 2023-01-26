export const formatNumber = (number) => {
  let n = parseFloat(number.toFixed(2).replace(/[.,]00$/, ""));
  return n.toLocaleString();
};
