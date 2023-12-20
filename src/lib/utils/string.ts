export function amountTostring(amount: number) {
  let result = amount.toLocaleString('ko-KR');
  result += ' 원';
  return result;
}

export function formatDate(date: Date) {
  function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }
  return `${date.getFullYear()}-${padTo2Digits(date.getMonth() + 1)}-${padTo2Digits(date.getDate())}`;
}

export function getFirstDay(date: Date) {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  return firstDay;
}

export function getLastDay(date: Date) {
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return lastDay;
}
