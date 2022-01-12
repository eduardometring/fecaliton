import { MessageEmbed } from "discord.js";
import { ICommand} from "wokcommands";

export default {
    category: 'fun',
    description: 'Tome um café com o bot',
    aliases: ['café', '☕'],

    callback: async ({message}) => {
        const embed = new MessageEmbed()
        .setTitle('cafe')
        .setDescription('cafe lmao')
        .setColor('#2a1506')
        await message.reply({
            embeds: [embed]
        })
    }
}as ICommand