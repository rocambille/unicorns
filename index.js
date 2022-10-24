const express = require("express");
const serverPort = 8000;
const app = express();

// ...define the API routes here...
const unicorns = [
  { id: 1, name: "Praline", color: "yellow" },
  { id: 2, name: "Crunchy", color: "pink" },
  { id: 3, name: "Craquante", color: "purple" },
];

app.get("/unicorns", (req, res) => {
  if (req.query.limit != null) {
    res.send(unicorns.slice(0, parseInt(req.query.limit)));
  } else if (req.query.color != null) {
    res.send(unicorns.filter((unicorn) => unicorn.color === req.query.color));
  } else {
    res.send(unicorns);
  }
});

app.get("/unicorns/:id", (req, res) => {
  const unicorn = unicorns.find(
    (unicorn) => unicorn.id === parseInt(req.params.id)
  );

  if (unicorn) {
    res.send(unicorn);
  } else {
    res.sendStatus(404);
  }
});

app.listen(serverPort, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Le serveur Express est en route !");
  }
});
