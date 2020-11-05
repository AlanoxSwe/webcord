const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { botDb, addCommand } = require('./data/botData');
const client = require('./bot');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const createCommand = (command, reply) => ({
  command,
  reply,
  enabled: true,
});

app.route('/commands')
  .get((req, res) => {
    res.json(botDb.commands);
  })
  .post((req, res) => {
    const newCommand = createCommand(req.body.command, req.body.reply);
    if (Object.values(newCommand).some((el) => !el)) throw new Error('Invalid data');
    addCommand(newCommand);
    res.status(201).end();
  });

app.get('/commands/special', (req, res) => {
  res.json(botDb.specialCommands);
});

client.login('NzczNTY1NTkxNzE3MDE5NjQ5.X6LFGQ.i9DVRJtB0ovN6bzpAB0_ULtBt6o');

module.exports = app;
