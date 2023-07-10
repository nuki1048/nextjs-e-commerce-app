export function orderNumsGenerator() {
  let num = "";

  for (let i = 0; i < 10; i++) {
    if (i % 4 === 0 && i !== 0) {
      num += "-";
    } else {
      num += Math.floor(Math.random() * 10);
    }
  }
  return num;
}
