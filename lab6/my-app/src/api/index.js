// Demo REST api

const Joi = require("joi"); // Class
const express = require("express");
const app = express();

// Used in post
app.use(express.json());

// Fake data
const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

// ROOT
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// GET all
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

// GET by id
app.get("/api/courses/:id", (req, res) => {
  // Finding el with the inputted id
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course) res.status(404).send("The course with this ID was not found");

  res.send(course);
});

// CREATE
app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(course);
});

// UPDATE
app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with this ID was not found");

  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

// DELETE
app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with this ID was not found");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

// Validating
const validateCourse = (course) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(course);
};

// Setting port
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
