const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { botDb, addCommand, updateSettings } = require('./data/botData');
const {
  client, sendBroadcast, sendAlert, sendPoll,
} = require('./bot');
require('dotenv').config();

const { DISCORD_KEY } = process.env;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

client.login(DISCORD_KEY);

const createCommand = (command, reply) => ({
  command,
  reply,
  enabled: true,
});

const createSettings = (welcome, prefix, lock) => ({
  welcome: welcome || botDb.settings.welcome,
  prefix: prefix || botDb.settings.prefix,
  lock: lock || botDb.settings.lock,
});

app.route('/commands')
  .get((req, res) => {
    res.json(botDb.commands).status(200);
  })
  .post((req, res) => {
    const newCommand = createCommand(req.body.command, req.body.reply);
    if (Object.values(newCommand).some((el) => !el)) throw new Error('Invalid data');
    addCommand(newCommand);
    res.status(201).end();
  });

app.route('/commands/special')
  .get((req, res) => {
    res.json(botDb.specialCommands);
  });

app.route('/settings')
  .get((req, res) => {
    res.json(botDb.settings);
  })
  .put((req, res) => {
    const newSettings = createSettings(req.body.welcome, req.body.prefix, req.body.lock);
    updateSettings(newSettings);
    res.status(200).end();
  });

app.route('/broadcast')
  .post((req, res) => {
    const { message } = req.body;
    sendBroadcast(`@everyone ${message}`);
    res.status(200).end();
  });

app.route('/alert')
  .post((req, res) => {
    const { message, title } = req.body;
    sendAlert(title, message);
    res.status(200).end();
  });

app.route('/poll')
  .post((req, res) => {
    const { question, option1, option2 } = req.body;
    sendPoll(question, option1, option2);
    res.status(200).end();
  });
module.exports = app;
