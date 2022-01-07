import { ICommand} from "wokcommands";
import { MessageEmbed } from "discord.js";

export default {
    category: 'Utility',
    description: 'use this to invite fecaliton to your server',

    callback: async ({message}) => {
        const embed = new MessageEmbed()
        .setColor('#000080')
        .setTitle('bruh')
        .setURL('https://github.com/eduardometring')
        .setDescription('**uepa!**\nratinho! **rapaz**\nvagina!')

        await message.reply({ 
            embeds: [embed]
        })
    }
} as ICommand