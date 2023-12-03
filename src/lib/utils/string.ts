export function amountTostring(amount: number) {
  let result = amount.toLocaleString('ko-KR');
  result += ' 원';
  return result;
}
