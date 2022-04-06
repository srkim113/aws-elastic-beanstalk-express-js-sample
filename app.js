const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('my first pipeline!'));
=======
app.get('/', (req, res) => res.send('my first git!'));
>>>>>>> 0c26f4e8e90946165a118ab2d7950e9688154258

app.listen(port);
console.log(`App running on http://localhost:${port}`);
