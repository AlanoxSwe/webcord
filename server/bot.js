const Discord = require('discord.js');
const { botDb } = require('./data/botData');

const client = new Discord.Client();

// msg.channel.send('');
// msg.author.username

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(botDb);
});

client.on('message', (msg) => {
  botDb.commands.forEach((c) => {
    if (msg.content.toLowerCase() === botDb.settings.prefix + c.command.toLowerCase()) {
      msg.reply(c.reply);
    }
  });
  // if (msg.content === botDb.specialCommands[0].clear.command) {
  //   const clear = async () => {
  //     msg.delete();
  //     const fetched = await msg.channel.messages.fetch({ limit: 99 });
  //     msg.channel.bulkDelete(fetched);
  //   };
  //   clear();
  // }
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
  channel.send(`Welcome to the server, ${member}`);
});

module.exports = client;
