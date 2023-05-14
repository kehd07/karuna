import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'web-app', 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'web-app', 'build', 'index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log(`Express server listening on port ${port}`);
});
