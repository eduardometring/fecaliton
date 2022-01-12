import { MessageEmbed } from "discord.js";
import { ICommand} from "wokcommands";

export default {
    category: 'fun',
    description: 'Tome um café com o bot',
    aliases: ['café', '☕'],

    callback: async ({message}) => {
        const list = [
            'https://i.imgur.com/bVXEwli.gif',
            '',
            '',
            '',
            ''
        ]
        const coffee = list[Math.floor(Math.random() * list.length)]
        const embed = new MessageEmbed()
        .setTitle('cafe')
        .setDescription('cafe lmao')
        .setColor('#381c08')
        .setImage(coffee)
        await message.reply({
            embeds: [embed]
        })
    }
}as ICommand