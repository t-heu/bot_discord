const Discord = require('discord.js')
const client = new Discord.Client()
require('dotenv/config')

// mensagem de bem vindo
client.on('guildMemberAdd', member => {
  member.guild.channels.get(process.env.TOKEN_CHANNEL).send({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Welcome! To",
      url: "https://discord.gg/eTckjN",
      description: "Seja bem-vindo " + member,
      fields: [{
          name: "Compartilhe link do servidor",
          value: "aqui está [link](https://discord.gg/eTckjN)"
        },
        {
          name: "Para chamar a mim utilize:",
          value: "para pedir ajuda **__!help [topic]__** para multiplicar uns números **__!multiply 2 4__**."
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Boo"
      }
    }
  })
});

client.on("guildMemberRemove", member => {
  member.guild.channels.find(channel => channel.name === "geral").send("Usuário saiu do servidor `" + member.user.username + "`")
});

// invocar comandos
client.on('message', (receivedMessage) => {
  if (receivedMessage.author == client.user) {
    return
  }

  if (receivedMessage.content.startsWith("!")) {
    processCommand(receivedMessage)
  }
})

function processCommand(receivedMessage) {
  let fullCommand = receivedMessage.content.substr(1)
  let splitCommand = fullCommand.split(" ")
  let primaryCommand = splitCommand[0]
  // The first word directly after the exclamation is the command
  let arguments = splitCommand.slice(1)
  // All other words are arguments/parameters/options for the command
  console.log("Arguments: " + arguments)

  switch (primaryCommand) {
    case 'help':
      commands.help(arguments, receivedMessage)
      break;
    case 'multiply':
      commands.multiply(arguments, receivedMessage)
      break;
    default:
      receivedMessage.channel.send("I don't understand the command. Try `!help` or `!multiply`")
  }
}

const commands = {
  help(arguments, receivedMessage) {
    if (arguments.length > 0) {
      receivedMessage.channel.send("It looks like you might need help with " + arguments)
    } else {
      receivedMessage.channel.send("I'm not sure what you need help with. Try `!help [topic]`")
    }
  },

  multiply(arguments, receivedMessage) {
    if (arguments.length < 2) {
      receivedMessage.channel.send("Not enough values to multiply. Try `!multiply 2 4 10` or `!multiply 5.2 7`")
      return
    }

    let product = 1

    arguments.forEach(value => {
      product = product * parseFloat(value)
    })

    receivedMessage.channel.send("The product of " + arguments + " multiplied together is: " + product.toString())
  }
}

// bot is logged in
client.on('ready', () => {
  console.log("Connected as " + client.user.tag + " Servers: ")
  
  client.guilds.forEach(guild => {
    console.log(" - " + guild.name)
    
    guild.channels.forEach(channel => {
      console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
    })
  })
})

client.login(process.env.TOKEN_BOT_SECRET)