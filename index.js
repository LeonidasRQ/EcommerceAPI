const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

routerApi(app);

app.get('/', (req, res) => {
  res.send('hello my server in express');
});

app.listen(port, () => {
  console.log('Mi port: ' + port);
});
