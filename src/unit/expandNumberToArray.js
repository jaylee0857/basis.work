export function expandNumberToArray(number) {
  const result = [];
  const intPart = Math.floor(number); // 獲取整數部分
  for (let i = 0; i < intPart; i++) {
    result.push(1);
  }
  // 檢查是否有小數部分，如果有，添加0.5
  if (number - intPart >= 0.5) {
    result.push(0.5);
  }
  return result;
}

export default expandNumberToArray;
