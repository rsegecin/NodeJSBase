const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

function test(): string {
  return `This is the time ${Date.now().toString()}, this is great`;
}

app.get('/', (req, res) => res.send(test()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
