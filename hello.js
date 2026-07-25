const express = require('express');
const app = express();
const port =3000;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const Tasks = [
    { id: 1, title: "Task1", done: true },
    { id: 2, title: "Task2", done: false },
    { id: 3, title: "Task3", done: false }
];
app.get('/', (req, res) => {
  res.json({"name": "Task API", "version": "1.0", "endpoints": ["/task1,/task2,task3"]});
});


app.get('/health', (req, res) => {
  res.json({ "status": "ok" });
});

app.get('/tasks', (req, res) => {
  res.json(Tasks);
});


app.get('/tasks/:id', (req, res) => {
  const id =parseInt(req.params.id);
  const task=Tasks.find(task=>task.id === id );

  if(!task){
    return res.status(404).json({ error: `Task ${id} not found`})
  }
  res.json(task)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
