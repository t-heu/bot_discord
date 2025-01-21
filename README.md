[![Twitter Badge](https://img.shields.io/badge/-@t__h__e__u-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/t_h_e_u)](https://twitter.com/t_h_e_u)
[![Linkedin Badge](https://img.shields.io/badge/-matheusgbatista-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/matheusgbatista-3392bb153/)](https://www.linkedin.com/in/matheusgbatista/)
[![MyWeb Badge](https://img.shields.io/badge/-t--heu.github.io-333?style=flat-square&link=https://t-heu.github.io/)](https://t-heu.github.io)

# Sobre

Este é um bot de Discord que permite aos membros de um servidor escolher cargos através de reações nas mensagens. O bot oferece comandos simples para interagir com os membros e gerenciar cargos automáticos baseados nas reações.

## Bot usado no servidor Lobby BR

Um servidor com propósito de foco em conectar gamers de todo tipo.

![alt text](docs/icon.jpg "Title")

## 📝 Funcionalidades

- **Comandos `!`**: Sistema de Bot que responde aos comandos dados.
- **Sistema de Reações**: Quando um usuário reage a uma mensagem com um emoji específico, ele recebe o cargo correspondente no servidor.

## 🚀 Pré-requisitos

Antes de rodar o bot, você precisa garantir que tenha as seguintes dependências instaladas:

- [Node.js](https://nodejs.org/) (versão recomendada: 16.x ou superior)
- [Discord.js](https://discord.js.org/)

## 📦 Instalação

1. **Clone este repositório**:

   ```bash
   git clone https://github.com/t-heu/bot_discord.git
   cd seu-repositorio
   ```

2. **Instale as dependências**:

   ```bash
   npm install or pnpm install
   ```

3. **Configure o seu bot**:
   
   - Crie um novo bot no [Portal de Desenvolvedores do Discord](https://discord.com/developers/applications).
   - Copie o token do bot e adicione-o em um arquivo `.env` com o seguinte conteúdo:

     ```
     TOKEN_BOT_SECRET=seu-token-aqui
     ```

4. **Inicie o bot**:

   ```bash
   pnpm run dev
   ```

   O bot deve agora estar ativo e rodando.

## 🛠️ Como usar

### Comandos

- **`!help`**: Exibe todos os comandos disponíveis do bot.
- **`!setup-cargos`**: O administrador do servidor pode usar esse comando para configurar os cargos que podem ser escolhidos por meio de reações.
- **`!multiply <número1> <número2> ...`**: Multiplica os números fornecidos e exibe o resultado.
- **`!rank`**: Exibe uma mensagem informando que o comando está em desenvolvimento.
- **`!dado`**: Brinca com usuario de acertar dado.
- **`!moeda`**: Brinca com usuario de acertar cara da moeda.
- **`!ping`**: Responde Pong.

### Cargos disponíveis

Quando o comando `!setup-cargos` for usado, a mensagem será enviada com emojis que os membros podem reagir para escolher os cargos. Os cargos incluem:

- 🎮 FPS Player (CS:GO, Valorant)
- 🧙 RPG Player (Skyrim, Dark Souls)
- 🏎 Corrida (Forza, Gran Turismo)
- ⚔ Battle Royale (Fortnite, Warzone)
- 🎯 MOBA (LoL, Dota 2)
- 🕹 Console Gamer
- 🖥 PC Master Race
- 📱 Mobile Gamer

### Reação aos cargos

Após o envio da mensagem, os membros podem reagir aos emojis para obter os cargos correspondentes.

## Problemas comuns

- **Bot não responde**: Verifique se você adicionou o bot corretamente ao servidor e se ele tem permissões suficientes.
- **Erro ao adicionar cargos**: Certifique-se de que os cargos existem no servidor e que o bot tem permissões para atribuir esses cargos.

## 🐛 Problemas e Suporte

Caso encontre algum problema, sinta-se à vontade para abrir uma [issue](https://github.com/t-heu/hangman/issues).

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
