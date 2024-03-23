/** 百分比算出總百分比 */
export const calculateTotalPercentage = (percentages) => {
  // 計算所有百分比的總和
  const sum = percentages.reduce((acc, currentValue) => acc + currentValue, 0);
  // 計算平均值
  const average = sum / percentages.length;
  return average;
};

export default calculateTotalPercentage;
