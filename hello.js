const express = require('express');
const app = express();
const port =3000;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use(express.json());

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

app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task=Tasks.find(task=>task.id === id );

  if(!task){
    return res.status(404).json({ error: `Task ${id} not found`});
  }

  const {title}= req.body;

  if (!title || title.trim() === "") {
        return res.status(400).json({
            error: "The 'title' field is required and cannot be empty."
        });
    } 

  task.title=title.trim();
  return res.status(200).json(task);
  
});

app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex=Tasks.findIndex(task=>task.id === id );

  if(taskIndex === -1){
    return res.status(404).json({ error: `Task ${id} not found`});
  }

  Tasks.splice(taskIndex, 1);

  return res.sendStatus(204);
});

app.post('/tasks' ,(req, res) => {
  const {title} =req.body;

  if (!title || title.trim() === "") {
        return res.status(400).json({
            error: "The 'title' field is required and cannot be empty."
        });
    }
  
  const nextID=Tasks.length > 0 ? Math.max(...Tasks.map(task => task.id)) + 1 : 1;

  const newTask={
    id : nextID,
    title : title.trim(),
    done : false
  };
  Tasks.push(newTask);

  res.status(201).json(newTask);
});






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));