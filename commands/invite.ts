import { ICommand} from "wokcommands";
import { MessageEmbed } from "discord.js";

export default {
    category: 'Utility',
    description: 'use this to invite fecaliton to your server',

    callback: async ({message}) => {
        const embed = new MessageEmbed()
        .setColor('#000080')
        .setDescription('**teste👍**')

        await message.reply({ 
            embeds: [embed]
        })
    }
} as ICommand