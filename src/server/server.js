import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { connectDB } from './connect-db';
import { AsyncDependenciesBlock } from 'webpack';

let port = 8888;
let app = express();

app.listen(port, console.info('Server listening on port', port));

// Plugins for Express
app.use(
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  cors(),
);

app.get('/', (req, res) => res.send('Hello World!'));

export const addNewTask = async (task) => {
  let db = await connectDB();
  let collection = db.collection('tasks');
  await collection.insertOne(task);
};

export const updateTask = async (task) => {
  let { id, group, isComplete, name } = task;
  let db = await connectDB();
  let collection = db.collection('tasks');

  // * From my dummy thoughts this is a bit of a mess and non good practice
  // * e.g. if task get's more fields (columns) we need to add them here

  if (group) {
    await collection.updateOne({ id }, { $set: { group } });
  }

  if (isComplete !== undefined) {
    await collection.updateOne({ id }, { $set: { isComplete } });
  }

  if (name) {
    await collection.updateOne({ id }, { $set: { name } });
  }

};

// * I suggest to use HTTP call methods like GET, POST, PUT, DELETE.
// * This is a good practice and it's easier to understand what is happening
// * in the code. Also it's easier to debug and test.
// * I suggest to use the same URL for the same resource.
// * e.g. /tasks for all tasks, /tasks/:id for a specific task
// * e.g. /groups for all groups, /groups/:id for a specific group
// * e.g. /users for all users, /users/:id for a specific user

app.post('/tasks/new', async (req, res) => {
  let task = req.body.task;
  await addNewTask(task);
  res.status(200).send(); // * 200 OK
});

app.post('/tasks/update', async (req, res) => {
  let task = req.body.task;
  await addNewTask(task);
  res.status(200).send(); // * 200 OK
});
