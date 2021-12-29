import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from "dotenv"
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
})

client.on('ready', () => {
    console.log('Rapaaz')

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true
    })
})

client.on('messageCreate', (message) => {
    if(message.content === 'merda') {
        message.reply({
            content: 'https://desvendandosonhos.com/wp-content/uploads/2018/10/Sonhar-Com-Fezes.jpg',
        })
    }
})

client.login(process.env.TOKEN)