const { EmbedBuilder } = require('discord.js')

async function processCommand(message) {
  const commands = {
    help(args, message) {
      if (args.length > 0) {
        message.channel.send(`🔍 Parece que você precisa de ajuda com: ${args}`);
      } else {
        message.channel.send('📖 Lista de comandos disponíveis:\n`!help` - Ajuda\n`!multiply` - Multiplica números\n`!rank` - Mostra ranking de atividade');
      }
    },
  
    multiply(args, message) {
      if (args.length < 2) {
        message.channel.send('⚠ Por favor, forneça ao menos dois números. Exemplo: `!multiply 3 5`');
        return;
      }
  
      let product = args.reduce((acc, val) => acc * parseFloat(val), 1);
      message.channel.send(`✨ O resultado da multiplicação de ${args.join(' x ')} é: **${product}**`);
    }
  };
  
  let fullCommand = message.content.slice(1);
  let splitCommand = fullCommand.split(' ');
  let primaryCommand = splitCommand[0];
  let args = splitCommand.slice(1);

  switch (primaryCommand) {
    case 'help':
      commands.help(args, message);
      break;
    case 'multiply':
      commands.multiply(args, message);
      break;
    case 'setup-cargos':
      if (message.channel.id === '1331252980975927296') await setupCargos(message)
      break;
    case 'ping':
      message.channel.send('Pong! 🏓');
      break;
    case 'rank':
      message.channel.send('🏆 Comando de rank ainda em desenvolvimento!');
      break;
    case 'dado':
      message.channel.send(`🎲 Você tirou um **${Math.floor(Math.random() * 6) + 1}**!`);
      break;
    case 'moeda':
      message.channel.send(`🪙 Deu **${Math.random() < 0.5 ? 'Cara' : 'Coroa'}**!`);
      break;
    default:
      message.channel.send('❌ Comando não reconhecido. Use `!help` para ver a lista de comandos.');
  }
}

async function setupCargos(message) {
  const embed = new EmbedBuilder()
    .setColor('#2ecc71')
    .setTitle('Escolha seus cargos!')
    .setDescription('Reaja para obter seus cargos:\n\n' +
      '🎮 - FPS Player (CS:GO, Valorant)\n' +
      '🧙 - RPG Player (Skyrim, Dark Souls)\n' +
      '🏎 - Corrida (Forza, Gran Turismo)\n' +
      '⚔ - Battle Royale (Fortnite, Warzone)\n' +
      '🎯 - MOBA (LoL, Dota 2)\n\n' +
      'Reaja para escolher sua plataforma:\n' +
      '🕹 - Console Gamer\n' +
      '🖥 - PC Master\n' +
      '📱 - Mobile Gamer'
    );

  let sentMessage = await message.channel.send({ embeds: [embed] });
  await sentMessage.react('🎮');
  await sentMessage.react('🧙');
  await sentMessage.react('🏎');
  await sentMessage.react('⚔');
  await sentMessage.react('🎯');
  await sentMessage.react('🕹');
  await sentMessage.react('🖥');
  await sentMessage.react('📱');
}

module.exports = {
  processCommand,
  setupCargos
}