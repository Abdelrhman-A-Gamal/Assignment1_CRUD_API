const express = require('express');
const app = express();
const port =3000;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.get('/', (req, res) => {
  res.json({"name": "Task API", "version": "1.0", "endpoints": ["/task1,/task2,task3"]});
});


app.get('/health', (req, res) => {
  res.json({ "status": "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
