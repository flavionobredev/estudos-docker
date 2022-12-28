setInterval(() => {
  fetch(`${process.env.SERVER_URL}/`)
    .then((res) => res.text())
    .then(console.log)
    .catch(console.error);
}, 1000);
