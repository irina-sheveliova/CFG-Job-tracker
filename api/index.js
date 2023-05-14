import express from 'express';

const app = express();

app.use(express.json()); //To parse JSON request bodies

app.get('/', (req, res) => {
  res.send('Hello World! Welcome to the job tracker API');
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
