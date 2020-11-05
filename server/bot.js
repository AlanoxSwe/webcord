const Discord = require('discord.js');
const { botDb } = require('./data/botData');

const client = new Discord.Client();

// msg.channel.send('');
// msg.author.username

const sendBroadcast = (msg) => {
  const channel = client.channels.cache.find((chnl) => chnl.name === 'allmänt');
  channel.send(msg);
};

const sendAlert = (title, msg) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(title)
    .setColor(0xff0000)
    .setDescription(msg);
  const channel = client.channels.cache.find((chnl) => chnl.name === 'allmänt');
  channel.send(embed);
};

const sendPoll = async (question, option1, option2) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`NEW POLL: ${question}`)
    .setColor('YELLOW')
    .setDescription(`
     👍: ${option1}
     
     👎: ${option2}
    `);
  const channel = client.channels.cache.find((chnl) => chnl.name === 'allmänt');
  const msgEmbed = await channel.send(embed);
  await msgEmbed.react('👍');
  await msgEmbed.react('👎');
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(botDb);
});

client.on('message', async (msg) => {
  botDb.commands.forEach((c) => {
    if (c.enabled) {
      if (msg.content.toLowerCase() === botDb.settings.prefix + c.command.toLowerCase()) {
        msg.reply(c.reply);
      }
    }
  });
  botDb.specialCommands.forEach((sc) => {
    if (sc.enabled) {
      if (msg.content.toLowerCase() === botDb.settings.prefix + sc.command.toLowerCase()) {
        if (sc.type === 'clear') {
          const clear = async () => {
            msg.delete();
            const fetched = await msg.channel.messages.fetch({ limit: 99 });
            msg.channel.bulkDelete(fetched);
          };
          clear();
        }
      }
    }
  });
});

client.on('message', (message) => {
  if (message.content === 'alert') {
    const embed = new Discord.MessageEmbed()
      .setTitle('Alert')
      .setColor(0xff0000)
      .setDescription('This is an alert!');
    message.channel.send(embed);
  }
});

client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find((ch) => ch.name === 'allmänt');
  if (!channel) return;
  channel.send(`${botDb.settings.welcome} ${member}`);
});

module.exports = {
  client, sendBroadcast, sendAlert, sendPoll,
};
