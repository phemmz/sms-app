import express from 'express';
import bodyparser from 'body-parser';

import routes from './routes';

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.get('/', (_, res) => {
  res.send({
    message: 'Welcome to SMS Management API.'
  });
});

app.use((_, res) => {
  res.status(404).send({
    message: 'Requested route does not exist.'
  })
});

const { PORT = 3000 } = process.env;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
