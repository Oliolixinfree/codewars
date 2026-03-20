function naughtyOrNice(data) {
  let counterNaughty = 0;
  let counterNice = 0;

  Object.values(data).forEach((y) =>
    Object.values(y).forEach((s) =>
      s === "Nice" ? counterNice++ : counterNaughty++,
    ),
  );
  return counterNaughty > counterNice ? "Naughty!" : "Nice!";
}
