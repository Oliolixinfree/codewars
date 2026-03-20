function sumStrings(a, b) {
  a = Array.from(String(a), Number);
  b = Array.from(String(b), Number);

  const diff = a.length - b.length;

  if (diff > 0) {
    b.unshift(...Array(diff).fill(0));
  } else if (diff < 0) {
    a.unshift(...Array(-diff).fill(0));
  }

  const sum = a.map((i, idx) => i + b[idx]);

  while (true) {
    if (sum.every((element) => element < 10)) break;

    for (let i = sum.length - 1; i >= 0; i--) {
      console.log(sum[i]);
      if (sum[i] >= 10) {
        const newElem = [...String(sum[i])].map(Number);
        sum[i] = newElem[1];
        if (i === 0) {
          sum.unshift(newElem[0]);
        } else {
          sum[i - 1] += newElem[0];
        }
      }
    }
  }

  while (sum.length > 1 && sum[0] === 0) {
    sum.shift();
  }

  return sum.join("");
}

console.log(sumStrings("123", "457")); //580
console.log(sumStrings("800", "9567"));
