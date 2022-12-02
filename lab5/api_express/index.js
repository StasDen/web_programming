const Joi = require("joi");
const express = require("express");

const app = express();
app.use(express.json()); // Used in POST

const hamsters = [
  { id: 1, title: "John", description: "Funny little boy", cost: 100 },
  { id: 2, title: "George", description: "Naughty and nasty", cost: 20 },
];

app.get("/", (req, res) => {
  res.send("hamsters REST api");
});

// GET all
app.get("/api/hamsters", (req, res) => {
  res.send(hamsters);
});

// GET by id
app.get("/api/hamsters/:id", (req, res) => {
  const hamster = hamsters.find((h) => h.id === parseInt(req.params.id));

  if (!hamster) res.status(404).send("The hamster with this ID was not found");

  res.send(hamster);
});

// POST
app.post("/api/hamsters", (req, res) => {
  const { error } = validateHamster(req.body);
  if (error) return res.status(400).send(error.details[0].message); // Sending part of error

  const hamster = {
    id: hamsters.length + 1,
    title: req.body.title,
    description: req.body.description,
    cost: req.body.cost,
  };

  hamsters.push(hamster);
  res.send(hamster);
});

// PUT
app.put("/api/hamsters/:id", (req, res) => {
  const hamster = hamsters.find((h) => h.id === parseInt(req.params.id));
  if (!hamster)
    return res.status(404).send("The hamster with this ID was not found");

  const { error } = validateHamster(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  hamster.title = req.body.title;
  hamster.description = req.body.description;
  hamster.cost = req.body.cost;
  res.send(hamster);
});

// DELETE
app.delete("/api/hamsters/:id", (req, res) => {
  const hamster = hamsters.find((h) => h.id === parseInt(req.params.id));
  if (!hamster)
    return res.status(404).send("The hamster with this ID was not found");

  const index = hamsters.indexOf(hamster);
  hamsters.splice(index, 1);

  res.send(hamster);
});

// Validating input
const validateHamster = (hamster) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(5).required(),
    cost: Joi.number().min(1).required(),
  });

  return schema.validate(hamster);
};

const port = process.env.PORT || 3000; // Setting port

app.listen(port, () => console.log(`Listening on port ${port}...`));
