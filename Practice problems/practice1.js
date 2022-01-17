// create a function that makes a 2d array
const twoDArray = (num) => {
  const row = [];
  for (let i = 0; i < num; i++) {
    const col = [];
    for (let j = 0; j < num; j++) {
      const obj = {
        x: i,
        y: j,
      };
      col.push(obj);
    }
    row.push(col);
  }
  return row;
};
console.log(twoDArray(5));
