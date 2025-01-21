const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js')
require('dotenv/config')
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,// Permite acesso a eventos do servidor
    GatewayIntentBits.GuildMessages,// Permite leitura de mensagens
    GatewayIntentBits.MessageContent,// Necessário para processar comandos
    GatewayIntentBits.GuildMembers,// Detecta entradas e saídas de membros
    GatewayIntentBits.GuildMessageReactions
  ],
  partials: ['USER', 'REACTION', 'MESSAGE']
});

const { processCommand } = require('./commands')

// Mensagem de boas-vindas personalizada
client.on('guildMemberAdd', member => {
  const welcomeChannel = member.guild.channels.cache.get(process.env.TOKEN_CHANNEL);
  
  if (welcomeChannel) {
    const embed = new EmbedBuilder()
      .setColor('#3498db')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setTitle('🎮 Bem-vindo ao Lobby BR!')
      .setURL('https://discord.gg/eTckjN')
      .setDescription(`Seja muito bem-vindo(a), ${member}! Escolha seus cargos no canal <#ID_DO_CANAL_DE_CARGOS>.`)
      .addFields(
        { name: '📢 Compartilhe o servidor:', value: '[Clique aqui](https://discord.gg/eTckjN)' },
        { name: '❓ Precisa de ajuda?', value: 'Use `!help` para saber mais.' }
      )
      .setTimestamp()
      .setFooter('© Boo - Seu bot favorito', client.user.displayAvatarURL());

    welcomeChannel.send({ embeds: [embed] });
  }
});

// Mensagem de saída personalizada
client.on('guildMemberRemove', member => {
  const geralChannel = member.guild.channels.cache.find(channel => channel.name === 'geral');
  if (geralChannel) {
    geralChannel.send(`🚪 O usuário **${member.user.username}** saiu do servidor.`);
  }
});

// 
client.on('messageCreate', async message => {
  if (message.author.bot) return;

  if (message.content.startsWith('!')) {
    await processCommand(message);
  }
});

client.on('messageReactionAdd', async (reaction, user) => {
  if (user.bot) return;

  let member = reaction.message.guild.members.cache.get(user.id);
  let role = null;

  switch (reaction.emoji.name) {
    case '🎮': role = reaction.message.guild.roles.cache.find(r => r.name === '🎮 FPS Player'); break;
    case '🧙': role = reaction.message.guild.roles.cache.find(r => r.name === '🧙 RPG Player'); break;
    case '🏎': role = reaction.message.guild.roles.cache.find(r => r.name === '🏎 Corrida'); break;
    case '⚔': role = reaction.message.guild.roles.cache.find(r => r.name === '⚔ Battle Royale'); break;
    case '🎯': role = reaction.message.guild.roles.cache.find(r => r.name === '🎯 MOBA'); break;
    case '🕹': role = reaction.message.guild.roles.cache.find(r => r.name === '🕹 Console Gamer'); break;
    case '🖥': role = reaction.message.guild.roles.cache.find(r => r.name === '🖥 PC Master'); break;
    case '📱': role = reaction.message.guild.roles.cache.find(r => r.name === '📱 Mobile Gamer'); break;
  }

  if (role) {
    member.roles.add(role);
    user.send(`🎉 Você recebeu o cargo **${role.name}** no servidor ${reaction.message.guild.name}!`);
  }
});

client.on('messageReactionRemove', async (reaction, user) => {
  if (user.bot) return;

  let member = reaction.message.guild.members.cache.get(user.id);
  let role = null;

  switch (reaction.emoji.name) {
    case '🎮': role = reaction.message.guild.roles.cache.find(r => r.name === '🎮 FPS Player'); break;
    case '🧙': role = reaction.message.guild.roles.cache.find(r => r.name === '🧙 RPG Player'); break;
    case '🏎': role = reaction.message.guild.roles.cache.find(r => r.name === '🏎 Corrida'); break;
    case '⚔': role = reaction.message.guild.roles.cache.find(r => r.name === '⚔ Battle Royale'); break;
    case '🎯': role = reaction.message.guild.roles.cache.find(r => r.name === '🎯 MOBA'); break;
    case '🕹': role = reaction.message.guild.roles.cache.find(r => r.name === '🕹 Console Gamer'); break;
    case '🖥': role = reaction.message.guild.roles.cache.find(r => r.name === '🖥 PC Master'); break;
    case '📱': role = reaction.message.guild.roles.cache.find(r => r.name === '📱 Mobile Gamer'); break;
  }

  if (role) {
    member.roles.remove(role);
    user.send(`❌ O cargo **${role.name}** foi removido do servidor ${reaction.message.guild.name}.`);
  }
});

// Status do bot e servidores conectados
client.on('ready', () => {
  console.log(`🤖 Conectado como ${client.user.tag}`);
  client.user.setActivity('🎮 Lobby BR | !help', { type: 'PLAYING' });

  client.guilds.cache.forEach(guild => {
    console.log(`Servidor: ${guild.name}`);
    guild.channels.cache.forEach(channel => {
      console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`);
    });
  });
});

client.login(process.env.TOKEN_BOT_SECRET);
